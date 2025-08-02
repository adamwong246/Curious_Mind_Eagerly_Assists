import { ChromaClient } from 'chromadb';
import { Logger } from '../logger';

class ChromaDemo {
  private client: ChromaClient;
  private collectionName = 'demo_collection';

  constructor() {
    this.client = new ChromaClient();
  }

  async run() {
    Logger.info('Starting ChromaDB demonstration...');

    try {
      // Create collection
      const collection = await this.client.getOrCreateCollection({
        name: this.collectionName,
        metadata: { "hnsw:space": "cosine" }
      });
      Logger.info(`Created collection: ${this.collectionName}`);

      // Add documents
      const documents = [
        "The quick brown fox jumps over the lazy dog",
        "I enjoy programming in TypeScript",
        "ChromaDB is a vector database for embeddings"
      ];
      const ids = documents.map((_, i) => `doc${i+1}`);
      const metadatas = documents.map((_, i) => ({ 
        source: 'demo',
        index: i 
      }));

      await collection.add({ ids, documents, metadatas });
      Logger.info(`Added ${documents.length} documents`);

      // Query similar documents
      const queryText = "Tell me about jumping animals";
      const results = await collection.query({
        queryTexts: [queryText],
        nResults: 2
      });

      Logger.info(`\nQuery: "${queryText}"`);
      Logger.info('Top matches:');
      results.documents[0].forEach((doc, i) => {
        Logger.info(`${i+1}. ${doc}`);
        Logger.info(`   ID: ${results.ids[0][i]}`);
        Logger.info(`   Score: ${(1 - (results.distances?.[0]?.[i] || 0)).toFixed(2)}`);
      });

      // Show collection info
      const count = await collection.count();
      Logger.info(`\nCollection contains ${count} documents`);

      // Clean up
      await this.client.deleteCollection({ name: this.collectionName });
      Logger.info('Demo complete - collection deleted');
    } catch (error) {
      Logger.error(`Demo failed: ${error}`);
    }
  }
}

new ChromaDemo().run();
