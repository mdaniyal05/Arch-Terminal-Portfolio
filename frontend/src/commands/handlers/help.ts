import { type CommandHandler } from "../../types/terminal";

export const help: CommandHandler = () => {
  return [
    "Available commands:",
    "",
    "help         - show this list",
    "about        - who I am",
    "experience   - where I have worked",
    "projects     - things I have built",
    "contact      - ways to reach me",
    "fastfetch    - system info, for the ricers",
    "clear        - clear the terminal",
  ].join("\n");
};
