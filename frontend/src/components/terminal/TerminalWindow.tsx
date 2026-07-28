import TitleBar from "./TitleBar";
import TerminalLine from "./TerminalLine";
import CommandInput from "./CommandInput";
import { type TerminalLine as TerminalLineType } from "../../types/terminal";

interface TerminalWindowProps {
  title?: string;
  lines: TerminalLineType[];
  onSubmit: (command: string) => void;
  onClose: () => void;
}

export default function TerminalWindow({
  title = "dani@arch-linux: ~",
  lines,
  onSubmit,
  onClose,
}: TerminalWindowProps) {
  return (
    <div className="w-full max-w-4xl rounded-lg overflow-hidden border border-border shadow-2xl shadow-black/50 bg-surface font-mono">
      <TitleBar title={title} onClose={onClose} />
      <div className="p-4 sm:p-6 min-h-75 sm:min-h-100 text-sm leading-relaxed space-y-1 overflow-x-hidden">
        {lines.map((line) => (
          <TerminalLine key={line.id} line={line} />
        ))}
        <CommandInput onSubmit={onSubmit} />
      </div>
    </div>
  );
}
