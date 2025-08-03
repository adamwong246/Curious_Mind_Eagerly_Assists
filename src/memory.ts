import { ProfileManager } from './profile';
import { SocialEngine } from './social';
import { GoogleIntegration } from './services/google';

import { Logger } from './logger';
import axios from 'axios';

export class MemoryManager {
  private memory: Array<{
    type: 'scraped'|'interaction';
    content: string;
    timestamp: Date;
    url?: string;
  }> = [];

  private extractTextFromHTML(html: string): string {
    // Remove script and style tags
    html = html.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '');
    html = html.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, '');
    
    // Replace common HTML entities
    html = html.replace(/&nbsp;/g, ' ');
    html = html.replace(/&lt;/g, '<');
    html = html.replace(/&gt;/g, '>');
    html = html.replace(/&amp;/g, '&');
    
    // Remove all remaining HTML tags
    html = html.replace(/<[^>]*>/g, ' ');
    
    // Normalize whitespace and trim
    return html.replace(/\s+/g, ' ').trim();
  }
  private autonomousEnabled = true;
  public profile: ProfileManager;
  public google: GoogleIntegration;
  public social: SocialEngine;
  constructor() {
    this.social = new SocialEngine();
    this.profile = new ProfileManager();
  }

  async initialize(): Promise<boolean> {
    return true;
  }

  isAutonomousEnabled(): boolean {
    return this.autonomousEnabled;
  }

  setAutonomousMode(enabled: boolean): void {
    this.autonomousEnabled = enabled;
  }

  async getRelevantContext(query: string): Promise<string[]> {
    // Always include recent interactions
    const recent = this.memory.slice(-3);
    
    if (!this.chromaEnabled) {
      Logger.debug('ChromaDB disabled - returning only recent context');
      return recent;
    }

    try {
      Logger.debug(`Querying ChromaDB for: "${query}"`);
      const collection = await this.chroma.getCollection(this.collectionName);
      const results = await collection.query({
        queryTexts: [query],
        nResults: 3,
        include: ['documents', 'distances']
      });

      if (!results.documents || results.documents.length === 0) {
        Logger.debug('No similar documents found in ChromaDB');
        return recent;
      }

      const similar = results.documents[0]
        .filter((doc, i) => 
          // Only include results with reasonable similarity
          results.distances?.[0]?.[i] !== undefined && 
          results.distances[0][i] < 0.5
        )
        .map(doc => doc.trim());

      Logger.debug(`Found ${similar.length} similar documents`);
      return [...new Set([...recent, ...similar])];
    } catch (error) {
      Logger.error(`ChromaDB query failed: ${error}`);
      // On error, disable Chroma for this session
      this.chromaEnabled = false;
      return recent;
    }
  }

  async storeInteraction(input: string, output: string): Promise<void> {
    // console.log("storeInteraction", input, output);
    // const interaction = `Input: ${input}\nOutput: ${output}`;
    
    // // Store in short-term memory
    // this.memory.push(interaction);
    // // this.social.recordInteraction(interaction);
    
    // // Store in ChromaDB
    // try {
    //   const collection = await this.chroma.getCollection(this.collectionName);
    //   await collection.add({
    //     ids: [Date.now().toString()],
    //     documents: [interaction],
    //     metadatas: [{ 
    //       timestamp: new Date().toISOString(),
    //       type: 'interaction' 
    //     }]
    //   });
    // } catch (error) {
    //   Logger.error(`Failed to store in ChromaDB: ${error}`);
    // }
    
    // if (this.memory.length > 10) {
    //   this.memory.shift();
    // }
  }
  
  private async ensureCollectionExists(): Promise<void> {
    let retries = 3;
    while (retries > 0) {
      try {
        // First try to get existing collection
        await this.chroma.getCollection(this.collectionName);
        return;
      } catch (error) {
        if (error instanceof Error && error.message.includes('not found')) {
          // Collection doesn't exist - try to create it
          try {
            Logger.debug(`Creating collection ${this.collectionName}...`);
            await this.chroma.createCollection({
              name: this.collectionName,
              metadata: { "hnsw:space": "cosine" }
            });
            return;
          } catch (createError) {
            retries--;
            if (retries === 0) throw createError;
            Logger.warn(`Collection creation failed, retrying (${retries} left)...`);
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        } else {
          // Other error - retry get operation
          retries--;
          if (retries === 0) throw error;
          Logger.warn(`Collection access failed, retrying (${retries} left)...`);
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
    }
  }

  async scrapeAndStoreWebpage(url: string): Promise<boolean> {
    try {
      // Basic URL validation
      if (!url.startsWith('http')) {
        throw new Error('Invalid URL - must start with http/https');
      }

      // Simple GET request with timeout
      const response = await axios.get(url, {
        timeout: 5000,
        headers: {
          'User-Agent': 'Mozilla/5.0'
        }
      });

      // Extract text content from HTML
      const text = this.extractTextFromHTML(response.data);
      if (!text) {
        throw new Error('No text content found');
      }

      // Clean and normalize the text
      const cleanedText = text
        .replace(/\s+/g, ' ')     // Collapse whitespace
        .trim()
        .substring(0, 5000);      // Limit length

      // Store cleaned text content
      this.memory.push({
        type: 'scraped',
        content: cleanedText,
        timestamp: new Date(),
        url
      });
      
      // Keep only last 10 scrapes
      if (this.memory.filter(m => m.type === 'scraped').length > 10) {
        const firstScrapeIndex = this.memory.findIndex(m => m.type === 'scraped');
        if (firstScrapeIndex !== -1) {
          this.memory.splice(firstScrapeIndex, 1);
        }
      }
      
      return true;
    } catch (error) {
      Logger.error(`Scrape failed: ${error instanceof Error ? error.message : String(error)}`);
      return false;
    }
  }

  async checkChromaStatus() {
    try {
      await this.chroma.heartbeat();
      return { connected: true };
    } catch {
      return { connected: false };
    }
  }

  async getMemoryStats(): Promise<{
    shortTerm: number;
    lastStored?: Date;
    scrapedCount: number;
  }> {
    return {
      shortTerm: this.memory.length,
      lastStored: this.memory.length > 0 ? 
        new Date(Math.max(...this.memory.map(m => m.timestamp.getTime()))) : 
        undefined,
      scrapedCount: this.memory.filter(m => m.type === 'scraped').length
    };
  }

  async getScrapedContent(url?: string): Promise<Array<{
    url: string;
    content: string;
    timestamp: Date;
  }>> {
    const scrapes = this.memory
      .filter(m => m.type === 'scraped' && (!url || m.url === url))
      .map(m => ({
        url: m.url!,
        content: m.content,
        timestamp: m.timestamp
      }));
    
    return scrapes;
  }
}
