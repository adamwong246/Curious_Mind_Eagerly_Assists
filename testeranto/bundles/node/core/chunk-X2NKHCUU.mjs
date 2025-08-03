import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  init_cjs_shim
} from "./chunk-LFLTOQ4W.mjs";

// src/logger.ts
init_cjs_shim();
var COLORS = {
  reset: "\x1B[0m",
  error: "\x1B[31m",
  // red
  warn: "\x1B[33m",
  // yellow
  info: "\x1B[36m",
  // cyan
  debug: "\x1B[35m",
  // magenta
  verbose: "\x1B[32m",
  // green
  system: "\x1B[34m",
  // blue
  llm: "\x1B[38;5;208m",
  // orange
  vanilla: "\x1B[38;5;99m"
  // purple
};
var Logger = class {
  static log(level, message, color = COLORS.reset) {
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    console.log(`${color}[${timestamp}] ${level}: ${message}${COLORS.reset}`);
  }
  static info(message) {
    this.log("INFO", message, COLORS.system);
  }
  static warn(message) {
    this.log("WARN", message, COLORS.system);
  }
  static error(message) {
    this.log("ERROR", message, COLORS.system);
  }
  static debug(message) {
    if (process.env.DEBUG) {
      this.log("DEBUG", message, COLORS.system);
    }
  }
  static vanilla(message) {
    this.log("VANILLA", message, COLORS.vanilla);
  }
  static llm(message) {
    this.log("LLM", message, COLORS.llm);
  }
  static system(message) {
    this.log("SYSTEM", message, COLORS.system);
  }
};

export {
  Logger
};
