import { ProfileManager } from './profile';
import { SocialEngine } from './social';
import { GoogleIntegration } from './services/google';
import { SocialEngine } from './social';
import { ChromaClient } from 'chromadb';
import { Logger } from './logger';
import axios from 'axios';
import * as cheerio from 'cheerio';

export class MemoryManager {
  private memory: string[] = [];
  private autonomousEnabled = true;
  public profile: ProfileManager;
  public google: GoogleIntegration;
  public social: SocialEngine;
  private chromaEnabled = true;
  private chroma: ChromaClient;
  private collectionName = 'memory_embeddings';

  constructor() {
    Logger.debug('Initializing MemoryManager');
    this.social = new SocialEngine();
    this.profile = new ProfileManager();
    try {
      this.chroma = new ChromaClient({
        path: "http://localhost:8000",
        fetchOptions: {
          // Increase timeout and add retries
          timeout: 5000,
          retry: 3,
          retryDelay: 1000
        }
      });
      Logger.debug('ChromaClient initialized with retry configuration');
    } catch (error) {
      Logger.error('Failed to initialize ChromaClient:', error);
      throw new Error(`ChromaDB connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async initialize() {
    Logger.debug('Initializing ChromaDB...');
    try {
      // Create collection if it doesn't exist
      const collection = await this.chroma.getOrCreateCollection({
        name: this.collectionName,
        metadata: { "hnsw:space": "cosine" }
      });
      Logger.debug(`Collection ready: ${this.collectionName}`);
      return true;
    } catch (error) {
      Logger.error('Failed to initialize ChromaDB:', error);
      return false;
    }
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
    Logger.debug(`Scraping webpage: ${url}`);
    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      const text = $('body').text()
        .replace(/\s+/g, ' ')
        .trim()
        .substring(0, 5000);

      const collection = await this.chroma.getCollection(this.collectionName);
      await collection.add({
        ids: [`web_${Date.now()}`],
        documents: [text],
        metadatas: [{ url }]
      });
      
      Logger.debug(`Stored webpage content from ${url}`);
      return true;
    } catch (error) {
      Logger.error(`Failed to scrape ${url}:`, error);
      return false;
    }
  }

  async checkChromaStatus(): Promise<{
    connected: boolean;
    collectionExists: boolean;
    enabled: boolean;
    error?: string;
    version?: string;
    documentsCount?: number;
  }> {
    try {
      Logger.debug('Checking ChromaDB status...');
      
      // 1. Check basic connectivity
      const heartbeat = await this.chroma.heartbeat();
      if (typeof heartbeat !== 'number') {
        Logger.error('Invalid heartbeat response');
        return {
          connected: false,
          collectionExists: false,
          error: 'Invalid heartbeat response'
        };
      }
      Logger.debug(`Heartbeat successful: ${heartbeat}`);

      // 2. Get server version
      const version = await this.chroma.version();
      Logger.debug(`Server version: ${version}`);

      // 3. Check collection existence
      try {
        await this.chroma.getCollection(this.collectionName);
        const count = await collection.count();
        return {
          connected: true,
          collectionExists: true,
          enabled: this.chromaEnabled,
          version,
          documentsCount: count
        };
      } catch (error) {
        if (error.message.includes('not found')) {
          Logger.debug('Collection does not exist');
          return {
            connected: true,
            collectionExists: false,
            version
          };
        }
        throw error;
      }
    } catch (error) {
      Logger.error('Status check failed:', error);
      return {
        connected: false,
        collectionExists: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  async getMemoryStats(): Promise<{
    shortTerm: number;
    vectorCount: number;
    lastStored?: Date;
  }> {
    try {
      const collection = await this.chroma.getCollection(this.collectionName);
      const count = await collection.count();
      
      const lastEntry = await collection.get({
        limit: 1,
        include: ['metadatas']
      });
      
      return {
        shortTerm: this.memory.length,
        vectorCount: count,
        lastStored: lastEntry.metadatas?.[0]?.timestamp 
          ? new Date(lastEntry.metadatas[0].timestamp) 
          : undefined
      };
    } catch (error) {
      Logger.error(`Failed to get memory stats: ${error}`);
      return {
        shortTerm: this.memory.length,
        vectorCount: 0
      };
    }
  }
}
