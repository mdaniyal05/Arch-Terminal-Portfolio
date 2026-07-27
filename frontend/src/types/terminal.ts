export interface TerminalLine {
  id: string;
  type: "input" | "output";
  content: string;
}

export interface CommandContext {
  clear: () => void;
  args: string[];
}

export type CommandHandler = (ctx: CommandContext) => string;
