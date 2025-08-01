import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

console.log(dotenv.config());

interface EmailMessage {
  id: string;
  subject: string;
  from: string;
  date: string;
  snippet: string;
}

interface Contact {
  name: string;
  email: string;
  phone?: string;
}

interface CalendarEvent {
  id: string;
  summary: string;
  start: string;
  end: string;
  attendees: string[];
}

type GoogleScope = 
  | 'gmail.readonly'
  | 'contacts.readonly'
  | 'calendar.readonly';

export class GoogleIntegration {
  private oauth2Client: OAuth2Client;
  private scopes: GoogleScope[] = [
    'https://www.googleapis.com/auth/gmail.readonly',
    'https://www.googleapis.com/auth/gmail.send',
    'https://www.googleapis.com/auth/contacts.readonly',
    'https://www.googleapis.com/auth/calendar.readonly'
  ];
  private tokenExpiry: Date | null = null;

  constructor() {
    // First check if we're using service account auth
    if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
      try {
        const key = process.env.GOOGLE_SERVICE_ACCOUNT_KEY.replace(/\\n/g, '\n');
        this.oauth2Client = new google.auth.JWT({
          email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          key: key,
          scopes: this.scopes,
        });
        console.log('Initialized Google service account auth');
        return;
      } catch (error) {
        console.error('Failed to initialize service account:', error);
        // Fall through to OAuth flow
      }
    }

    // Fall back to OAuth
    if (!process.env.GOOGLE_CLIENT_ID) {
      throw new Error('Missing required environment variable: GOOGLE_CLIENT_ID');
    }
    if (!process.env.GOOGLE_CLIENT_SECRET) {
      throw new Error('Missing required environment variable: GOOGLE_CLIENT_SECRET');
    }

    const port = process.env.PORT || '3000';
    const redirectUri = process.env.GOOGLE_REDIRECT_URI || `http://localhost:${port}/auth/google/callback`;
    if (!redirectUri.match(/^https?:\/\/[^\s/$.?#].[^\s]*$/)) {
      throw new Error(`Invalid redirect URI format: ${redirectUri}`);
    }

    this.oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      redirectUri
    );

    console.log('Initialized Google OAuth client with:');
    console.log(`- Client ID: ${process.env.GOOGLE_CLIENT_ID.substring(0, 10)}...`);
    console.log(`- Redirect URI: ${redirectUri}`);

    console.log('Google OAuth client initialized with:');
    console.log(`- Client ID: ${process.env.GOOGLE_CLIENT_ID.substring(0, 10)}...`);
    console.log(`- Redirect URI: ${process.env.GOOGLE_REDIRECT_URI}`);
  }

  async getAuthUrl(): Promise<string> {
    if (!this.oauth2Client) {
      throw new Error('Google OAuth client not initialized');
    }

    const redirectUri = process.env.GOOGLE_REDIRECT_URI;
    if (!redirectUri) {
      throw new Error('Redirect URI not configured');
    }

    try {
      const authUrl = this.oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: this.scopes,
        prompt: 'consent',
        redirect_uri: redirectUri,
        client_id: this.oauth2Client._clientId,
        response_type: 'code',
        include_granted_scopes: true
      });

      if (!authUrl) {
        throw new Error('Failed to generate auth URL - empty response');
      }

      console.log('Generated auth URL with parameters:', {
        client_id: this.oauth2Client._clientId?.substring(0, 10) + '...',
        redirect_uri: redirectUri,
        scope: this.scopes.join(' '),
        response_type: 'code'
      });

      return authUrl;
    } catch (error) {
      console.error('OAuth configuration error:', {
        clientId: this.oauth2Client._clientId,
        redirectUri,
        scopes: this.scopes,
        error: error instanceof Error ? error.message : String(error)
      });
      throw new Error(`Failed to generate auth URL: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  async setCredentials(code: string): Promise<void> {
    try {
      const { tokens } = await this.oauth2Client.getToken(code);
      await this.updateTokens(tokens);
    } catch (error) {
      throw new Error(`Failed to set credentials: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  private async updateTokens(tokens: any): Promise<void> {
    this.oauth2Client.setCredentials(tokens);
    this.tokenExpiry = tokens.expiry_date ? new Date(tokens.expiry_date) : null;
    
    if (!tokens.refresh_token) {
      console.warn('No refresh token provided - session will expire');
    } else {
      // Store refresh token securely
      process.env.GOOGLE_REFRESH_TOKEN = tokens.refresh_token;
    }
  }

  async refreshToken(): Promise<void> {
    try {
      const { credentials } = await this.oauth2Client.refreshAccessToken();
      await this.updateTokens(credentials);
    } catch (error) {
      throw new Error(`Failed to refresh token: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  private async checkTokenValidity(): Promise<void> {
    if (!this.tokenExpiry) return;
    
    const now = new Date();
    const bufferMinutes = 5; // Refresh before actual expiry
    
    if (this.tokenExpiry < new Date(now.getTime() + bufferMinutes * 60000)) {
      if (this.oauth2Client.credentials.refresh_token) {
        await this.refreshToken();
      } else {
        throw new Error('Google API token has expired. Please re-authenticate.');
      }
    }
  }

  async getRecentEmails(maxResults = 10, pageToken?: string): Promise<{emails: EmailMessage[], nextPageToken?: string}> {
    await this.checkTokenValidity();
    
    try {
      const gmail = google.gmail({ version: 'v1', auth: this.oauth2Client });
      const res = await gmail.users.messages.list({
        userId: 'me',
        maxResults,
        pageToken,
        q: 'in:inbox'
      });

      if (!res.data.messages) return { emails: [] };

      const emails = await Promise.all(
        res.data.messages.map(async (msg) => {
          const fullMsg = await gmail.users.messages.get({
            userId: 'me',
            id: msg.id!,
            format: 'metadata',
            metadataHeaders: ['From', 'Subject', 'Date']
          });
          
          return {
            id: msg.id!,
            subject: fullMsg.data.payload?.headers?.find(h => h.name === 'Subject')?.value || 'No Subject',
            from: fullMsg.data.payload?.headers?.find(h => h.name === 'From')?.value || 'Unknown Sender',
            date: fullMsg.data.payload?.headers?.find(h => h.name === 'Date')?.value || '',
            snippet: fullMsg.data.snippet || ''
          };
        })
      );

      return {
        emails,
        nextPageToken: res.data.nextPageToken
      };
    } catch (error) {
      throw new Error(`Failed to fetch emails: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  async getContacts(maxResults = 100, pageToken?: string): Promise<{contacts: Contact[], nextPageToken?: string}> {
    await this.checkTokenValidity();
    
    try {
      const people = google.people({ version: 'v1', auth: this.oauth2Client });
      const res = await people.people.connections.list({
        resourceName: 'people/me',
        pageSize: maxResults,
        pageToken,
        personFields: 'names,emailAddresses,phoneNumbers'
      });

      const contacts = (res.data.connections || []).map(conn => ({
        name: conn.names?.[0]?.displayName || 'Unknown',
        email: conn.emailAddresses?.[0]?.value || '',
        phone: conn.phoneNumbers?.[0]?.value
      }));

      return {
        contacts,
        nextPageToken: res.data.nextPageToken
      };
    } catch (error) {
      throw new Error(`Failed to fetch contacts: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  async getCalendarEvents(maxResults = 10, timeMin?: string): Promise<CalendarEvent[]> {
    await this.checkTokenValidity();
    
    try {
      const calendar = google.calendar({ version: 'v3', auth: this.oauth2Client });
      const res = await calendar.events.list({
        calendarId: 'primary',
        timeMin: timeMin || new Date().toISOString(),
        maxResults,
        singleEvents: true,
        orderBy: 'startTime'
      });

      return (res.data.items || []).map(event => ({
        id: event.id!,
        summary: event.summary || 'No Title',
        start: event.start?.dateTime || event.start?.date || '',
        end: event.end?.dateTime || event.end?.date || '',
        attendees: event.attendees?.map(a => a.email || '') || []
      }));
    } catch (error) {
      throw new Error(`Failed to fetch calendar events: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    await this.checkTokenValidity();
    
    try {
      const gmail = google.gmail({ version: 'v1', auth: this.oauth2Client });
      
      const message = [
        `To: ${to}`,
        'Content-Type: text/html; charset=utf-8',
        'MIME-Version: 1.0',
        `Subject: ${subject}`,
        '',
        body
      ].join('\n');

      const encodedMessage = Buffer.from(message)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

      await gmail.users.messages.send({
        userId: 'me',
        requestBody: {
          raw: encodedMessage
        }
      });
    } catch (error) {
      throw new Error(`Failed to send email: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  async createCalendarEvent(event: {
    summary: string;
    start: string;
    end: string;
    description?: string;
    attendees?: string[];
  }): Promise<CalendarEvent> {
    await this.checkTokenValidity();
    
    try {
      const calendar = google.calendar({ version: 'v3', auth: this.oauth2Client });
      const res = await calendar.events.insert({
        calendarId: 'primary',
        requestBody: {
          summary: event.summary,
          start: { dateTime: event.start },
          end: { dateTime: event.end },
          description: event.description,
          attendees: event.attendees?.map(email => ({ email }))
        }
      });

      return {
        id: res.data.id!,
        summary: res.data.summary!,
        start: res.data.start?.dateTime!,
        end: res.data.end?.dateTime!,
        attendees: res.data.attendees?.map(a => a.email!) || []
      };
    } catch (error) {
      throw new Error(`Failed to create calendar event: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
}
