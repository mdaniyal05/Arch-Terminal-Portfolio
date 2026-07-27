import { type TerminalLine as TerminalLineType } from "../../types/terminal";
import PromptLabel from "./PromptLabel";

interface TerminalLineProps {
  line: TerminalLineType;
}

export default function TerminalLine({ line }: TerminalLineProps) {
  if (line.type === "input") {
    return (
      <div className="flex gap-2">
        <PromptLabel />
        <span className="text-text-primary">{line.content}</span>
      </div>
    );
  }

  return (
    <div className="text-text-primary whitespace-pre-wrap">{line.content}</div>
  );
}
