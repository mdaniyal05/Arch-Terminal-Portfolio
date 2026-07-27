import { type CommandHandler } from "../../types/terminal";

export const about: CommandHandler = () => {
  return [
    "Hi, I'm Daniyal - a software developer who spends slightly too much",
    "time tweaking window manager configs instead of shipping code.",
    "",
    'Type "projects" to see what I have actually shipped.',
  ].join("\n");
};
