import { type CommandHandler } from "../../types/terminal";
import { contactLinks } from "../../data/contact";

export const contact: CommandHandler = () => {
  return contactLinks
    .map((link) => `${link.label.padEnd(10)} ${link.value}`)
    .join("\n");
};
