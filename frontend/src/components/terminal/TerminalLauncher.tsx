import { TerminalSquare } from "lucide-react";

interface TerminalLauncherProps {
  onOpen: () => void;
}

export default function TerminalLauncher({ onOpen }: TerminalLauncherProps) {
  return (
    <button
      onClick={onOpen}
      className="group flex flex-col items-center gap-3 text-text-muted hover:text-text-primary transition-colors"
    >
      <span className="w-16 h-16 rounded-xl border-3 border-border bg-surface flex items-center justify-center shadow-xl shadow-black/40 group-hover:border-arch transition-colors">
        <TerminalSquare size={28} className="text-arch" />
      </span>
      <span className="text-xs font-mono tracking-wide">
        Open Terminal
      </span>
    </button>
  );
}
