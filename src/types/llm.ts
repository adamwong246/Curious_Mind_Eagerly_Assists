export interface LLMResponse {
  content: string;
  contextUsed: string[];
  tokensUsed: number;
  handlerSuggested?: string;
}

export interface LLMRequest {
  prompt: string;
  context: string[];
  temperature?: number;
  maxTokens?: number;
}
