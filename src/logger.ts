const COLORS = {
  reset: '\x1b[0m',
  error: '\x1b[31m', // red
  warn: '\x1b[33m', // yellow
  info: '\x1b[36m', // cyan
  debug: '\x1b[35m', // magenta
  verbose: '\x1b[32m', // green
  system: '\x1b[34m', // blue
  llm: '\x1b[38;5;208m', // orange
  vanilla: '\x1b[38;5;99m' // purple
};

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
