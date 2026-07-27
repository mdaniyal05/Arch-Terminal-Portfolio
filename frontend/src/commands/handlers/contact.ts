import { type CommandHandler } from "../../types/terminal";

export const contact: CommandHandler = () => {
  return [
    "email:    dev@danilambda.com",
    "github:   github.com/mdaniyal05",
    "linkedin: linkedin.com/in/mdaniyal05",
  ].join("\n");
};
