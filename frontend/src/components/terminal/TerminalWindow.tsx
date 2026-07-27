import { type ReactNode } from "react";
import TitleBar from "./TitleBar";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
}

export default function TerminalWindow({
  title = "dani@arch-linux: ~",
  children,
}: TerminalWindowProps) {
  return (
    <div className="w-full max-w-4xl rounded-lg overflow-hidden border border-border shadow-2xl shadow-black/50 bg-surface font-mono">
      <TitleBar title={title} />
      <div className="p-6 min-h-100 text-text-primary text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
