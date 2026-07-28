import { TerminalSquare } from "lucide-react";

interface TerminalLauncherProps {
  onOpen: () => void;
}

export default function TerminalLauncher({ onOpen }: TerminalLauncherProps) {
  return (
    <button
      onClick={onOpen}
      className="fixed top-14 left-4 z-20 group flex flex-col items-center gap-1.5 w-16 cursor-pointer"
    >
      <span className="w-14 h-14 rounded-lg border-2 border-border bg-surface/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-black/40 group-hover:border-arch transition-colors">
        <TerminalSquare size={26} className="text-arch" />
      </span>
      <span className="text-[11px] font-mono text-text-primary/90 text-center leading-tight drop-shadow">
        Terminal
      </span>
    </button>
  );
}
