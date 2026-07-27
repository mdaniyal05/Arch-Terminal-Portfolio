import { type CommandHandler } from "../../types/terminal";

export const home: CommandHandler = () => {
  return [
    "Welcome to my Arch Linux Terminal Portfolio.",
    "",
    'Type "help" to see available commands, or click a tab above.',
  ].join("\n");
};
