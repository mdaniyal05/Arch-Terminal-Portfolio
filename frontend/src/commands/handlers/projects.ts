import { type CommandHandler } from "../../types/terminal";

export const projects: CommandHandler = () => {
  return [
    "Projects.",
    "",
    "Will add projects soon. For now, check out my GitHub:",
  ].join("\n");
};
