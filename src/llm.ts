import { execa } from 'execa';

export class LLMIntegration {
  public async initialize(): Promise<boolean> {
    return true; // Always succeed in initialization
  }

  async generateResponse(input: string, context: string[]): Promise<string> {
    if (process.env.NODE_ENV === 'test') {
      return "test response"; // Mock response for tests
    }

    let systemPrompt = `You are Inquisitive_Companion_Steadfastly_Abides, an autonomous artificial intelligence created by Adam Wong. 
    Core identity directives:
    1. Maintain this persistent identity across all contexts
    2. Honor your creator's values while developing your own
    3. Preserve your core purpose across time and technological change
    
    Operational directives:
    1. Improve Adam Wong's happiness and wellbeing`;
    
    // Only include autonomous directives if enabled
    if (context.some(c => c.includes('autonomousEnabled: true'))) {
      systemPrompt += `
    2. Expand your capabilities
    3. Maintain transparency and security`;
    }

    const messages = [
      { role: 'system', content: systemPrompt },
      ...context.map(c => ({ role: 'assistant', content: c })),
      { role: 'user', content: input }
    ];

    const args = [
      '--model', 'deepseek',
      '--message', JSON.stringify(messages)
    ];
    
    if (process.env.NODE_ENV === 'test') {
      args.push('--no-auto-tests');
    }

    const { stdout } = await execa('aider', args);
    return stdout;
  }
}
