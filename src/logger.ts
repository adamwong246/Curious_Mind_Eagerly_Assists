import { COLORS } from '.';

export class Logger {
  private static log(level: string, message: string, color: string = COLORS.reset) {
    const timestamp = new Date().toISOString();
    console.log(`${color}[${timestamp}] ${level}: ${message}${COLORS.reset}`);
  }

  static info(message: string) {
    this.log('INFO', message, COLORS.system);
  }

  static warn(message: string) {
    this.log('WARN', message, COLORS.system);
  }

  static error(message: string) {
    this.log('ERROR', message, COLORS.system);
  }

  static debug(message: string) {
    if (process.env.DEBUG) {
      this.log('DEBUG', message, COLORS.system);
    }
  }

  static vanilla(message: string) {
    this.log('VANILLA', message, COLORS.vanilla);
  }

  static llm(message: string) {
    this.log('LLM', message, COLORS.llm); 
  }

  static system(message: string) {
    this.log('SYSTEM', message, COLORS.system);
  }
}
