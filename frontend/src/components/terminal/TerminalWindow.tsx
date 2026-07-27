import { type ReactNode, useState } from "react";
import TitleBar from "./TitleBar";
import TerminalLine from "./TerminalLine";
import CommandInput from "./CommandInput";
import { type TerminalLine as TerminalLineType } from "../../types/terminal";

interface TerminalWindowProps {
  title?: string;
  children?: ReactNode;
}

export default function TerminalWindow({
  title = "guest@arch-portfolio: ~",
}: TerminalWindowProps) {
  const [lines, setLines] = useState<TerminalLineType[]>([]);

  function handleSubmit(command: string) {
    const inputLine: TerminalLineType = {
      id: crypto.randomUUID(),
      type: "input",
      content: command,
    };

    const outputLine: TerminalLineType = {
      id: crypto.randomUUID(),
      type: "output",
      content: `command not found: ${command}`,
    };

    setLines((prev) => [...prev, inputLine, outputLine]);
  }

  return (
    <div className="w-full max-w-4xl rounded-lg overflow-hidden border border-border shadow-2xl shadow-black/50 bg-surface font-mono">
      <TitleBar title={title} />
      <div className="p-6 min-h-100 text-sm leading-relaxed space-y-1">
        {lines.map((line) => (
          <TerminalLine key={line.id} line={line} />
        ))}
        <CommandInput onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
