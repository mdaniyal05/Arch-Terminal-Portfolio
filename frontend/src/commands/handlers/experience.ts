import { type CommandHandler } from "../../types/terminal";
import { experience } from "../../data/experience";

export const experienceCmd: CommandHandler = () => {
  return experience
    .map((entry) => {
      const header = `${entry.role} @ ${entry.company}  (${entry.period})`;
      const bullets = entry.highlights.map((h) => `  - ${h}`).join("\n");
      return `${header}\n${bullets}`;
    })
    .join("\n\n");
};
