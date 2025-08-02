import { ProfileManager } from './profile';
import { GoogleIntegration } from './services/google';
import { SocialEngine } from './social';
import { ChromaClient } from 'chromadb';
import { Logger } from './logger';

export class MemoryManager {
  private memory: string[] = [];
  private autonomousEnabled = true;
  public profile: ProfileManager;
  public google: GoogleIntegration;
  public social: SocialEngine;
  private chroma: ChromaClient;
  private collectionName = 'memory_embeddings';

  constructor() {
    this.profile = new ProfileManager();
    this.google = new GoogleIntegration();
    this.social = new SocialEngine();
    this.chroma = new ChromaClient();
  }

  async initialize() {
    Logger.debug('Initializing ChromaDB memory...');
    try {
      // Create or get the collection
      const collection = await this.chroma.getOrCreateCollection({
        name: this.collectionName,
        metadata: { "hnsw:space": "cosine" }
      });
      
      Logger.debug(`ChromaDB ready with collection: ${this.collectionName}`);
      return true;
    } catch (error) {
      Logger.error(`Failed to initialize ChromaDB: ${error}`);
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
    // Get both recent interactions and semantically similar memories
    const recent = this.memory.slice(-3);
    
    try {
      const collection = await this.chroma.getCollection(this.collectionName);
      const results = await collection.query({
        queryTexts: [query],
        nResults: 3
      });
      
      const similar = results.documents?.[0] || [];
      return [...new Set([...recent, ...similar])];
    } catch (error) {
      Logger.error(`ChromaDB query failed: ${error}`);
      return recent;
    }
  }

  async storeInteraction(input: string, output: string): Promise<void> {
    const interaction = `Input: ${input}\nOutput: ${output}`;
    
    // Store in short-term memory
    this.memory.push(interaction);
    this.social.recordInteraction(interaction);
    
    // Store in ChromaDB
    try {
      const collection = await this.chroma.getCollection(this.collectionName);
      await collection.add({
        ids: [Date.now().toString()],
        documents: [interaction],
        metadatas: [{ 
          timestamp: new Date().toISOString(),
          type: 'interaction' 
        }]
      });
    } catch (error) {
      Logger.error(`Failed to store in ChromaDB: ${error}`);
    }
    
    if (this.memory.length > 10) {
      this.memory.shift();
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
