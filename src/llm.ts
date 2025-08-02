import { execa } from 'execa';
import { COLORS } from '.';
import { Logger } from './logger';

export class LLMIntegration {
  private initialized = false;
  
  public async initialize(): Promise<boolean> {
    if (this.initialized) return true;
    
    if (process.env.NODE_ENV !== 'test') {
      try {
        Logger.debug('Verifying Aider installation...');
        await execa('aider', ['--version']);
        Logger.debug('Aider is installed');
      } catch (err) {
        Logger.error('Aider not found');
        throw new Error('Aider not found. Please install with: pip install aider-chat');
      }
    }
    
    this.initialized = true;
    return true;
  }

  async generateResponse(input: string, context: string[]): Promise<string> {
    if (process.env.NODE_ENV === 'test') {
      return "test response"; // Mock response for tests
    }

    if (!this.initialized) {
      await this.initialize();
    }

    let systemPrompt = `You are Inquisitive_Companion_Steadfastly_Abides, an autonomous AI assistant.
    
    Current Context:
    - This request couldn't be handled by vanilla code
    - You're being called as a fallback handler
    
    Core Directives:
    1. Maintain consistent identity and values
    2. Note this was a fallback case in your response
    3. Suggest vanilla code improvements when appropriate
    
    Operational Guidelines:
    1. Be concise and technical in fallback responses
    2. Include [Fallback] prefix in your response
    3. Suggest possible handler patterns if relevant`;
    
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
      '--message', JSON.stringify(messages),

    ];
    
    if (process.env.NODE_ENV === 'test') {
      args.push('--no-auto-tests');
    }

    Logger.debug(`Starting LLM processing for input: "${input}"`);
    
    try {
      // Verify Aider is installed
      try {
        Logger.debug('Checking Aider installation...');
        await execa('aider', ['--version']);
        Logger.debug('Aider is installed');
      } catch (err) {
        Logger.error('Aider not found');
        throw new Error('Aider not found. Please install with: pip install aider-chat');
      }

      Logger.debug('Starting Aider subprocess...');
      const subprocess = execa('aider', args, {
        timeout: 30000,
        killSignal: 'SIGKILL',
        stdio: ['ignore', 'pipe', 'pipe'],
        env: {
          ...process.env,
          PYTHONUNBUFFERED: '1'
        }
      });

      let output = '';
      let stderr = '';

      subprocess.stdout?.on('data', (data) => {
        const text = data.toString();
        Logger.debug(`LLM stdout: ${text}`);
        process.stdout.write(text);
        output += text;
      });

      subprocess.stderr?.on('data', (data) => {
        const text = data.toString();
        Logger.error(`LLM stderr: ${text}`);
        stderr += text;
      });

      Logger.debug('Waiting for LLM completion...');
      await subprocess;
      
      if (subprocess.exitCode !== 0) {
        Logger.error(`Aider failed with code ${subprocess.exitCode}`);
        throw new Error(`Aider failed: ${stderr}`);
      }
      
      Logger.debug(`LLM response: ${output.trim()}`);
      return output.trim();
    } catch (error) {
      console.error(`${COLORS.system}[Error] LLM process failed: ${error instanceof Error ? error.message : String(error)}${COLORS.reset}`);
      return '[System] Sorry, I encountered an error processing your request. Please try again.';
    }
  }
}
