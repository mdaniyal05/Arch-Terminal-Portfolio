import { type CommandHandler } from "../../types/terminal";
import { aboutData } from "../../data/about";

export const about: CommandHandler = () => {
  return [
    `${aboutData.name} - ${aboutData.role}`,
    aboutData.location,
    "",
    ...aboutData.bio,
    "",
    `Stack: ${aboutData.skills.join(", ")}`,
  ].join("\n");
};
