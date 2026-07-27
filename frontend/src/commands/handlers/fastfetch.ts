import { type CommandHandler } from "../../types/terminal";

export const fastfetch: CommandHandler = () => {
  return [
    "dani@arch-linux",
    "---------------------",
    "OS: Arch Linux (btw)",
    "WM: Hyprland",
    "Shell: zsh",
    "Terminal: portfolio.tsx",
    "Theme: Catppuccin Mocha (custom)",
  ].join("\n");
};
