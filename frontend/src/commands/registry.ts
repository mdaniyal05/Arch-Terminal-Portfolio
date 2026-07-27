import { type CommandHandler } from "../types/terminal";
import { home } from "./handlers/home";
import { help } from "./handlers/help";
import { about } from "./handlers/about";
import { projects } from "./handlers/projects";
import { contact } from "./handlers/contact";
import { fastfetch } from "./handlers/fastfetch";

const registry: Record<string, CommandHandler> = {
  home,
  help,
  about,
  projects,
  contact,
  fastfetch,
};

export function runCommand(input: string, clear: () => void): string | null {
  const [name, ...args] = input.trim().split(/\s+/);
  const key = name.toLowerCase();

  if (key === "clear") {
    clear();
    return null;
  }

  const handler = registry[key];

  if (!handler) {
    return `command not found: ${name}. Type "help" for a list of commands.`;
  }

  return handler({ clear, args });
}
