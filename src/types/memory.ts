export interface MemoryItem {
  type: 'scraped'|'interaction';
  content: string;
  timestamp: Date;
  url?: string;
}

export interface MemoryStats {
  shortTerm: number;
  lastStored?: Date;
  scrapedCount: number;
}

export interface ScrapedContent {
  url: string;
  content: string;
  timestamp: Date;
}

export interface ContextQueryResult {
  documents: string[];
  distances?: number[][];
  ids: string[][];
}
