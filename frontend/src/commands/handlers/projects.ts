import { type CommandHandler } from "../../types/terminal";
import { projects as projectList } from "../../data/projects";

export const projects: CommandHandler = () => {
  return projectList
    .map((p) => `${p.name.padEnd(14)} ${p.description}`)
    .join("\n");
};
