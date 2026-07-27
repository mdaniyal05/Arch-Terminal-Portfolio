import { type CommandHandler } from "../../types/terminal";

export const fastfetch: CommandHandler = () => {
  return [
    "OS: Arch Linux x86_64 (btw)",
    "Kernel: Linux 6.9.1-arch1-1",
    "WM: Hyprland",
    "Shell: zsh",
    "Terminal: portfolio.tsx",
    "Theme: Catppuccin Mocha (custom)",
    "CPU: AMD Ryzen 7 5700X (8 cores, 16 threads) @ 3.4 GHz",
    "GPU: AMD Radeon RX 9600 XT (ASUS) [16GB]",
    "Memory: 2.74 GiB / 15.9 GiB (available: 994 MiB)",
    "Disk: /dev/nvme0n1 (953.9 GiB) - WD_BLACK SN770",
    "Motherboard: Gigabyte B550M DS3H (BIOS: F20, 10/29/2025)",
    "Uptime: 0 days, 0 hours (just booted)",
  ].join("\n");
};
