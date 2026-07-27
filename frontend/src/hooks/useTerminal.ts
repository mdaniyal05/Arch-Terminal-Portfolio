import { useCallback, useState } from "react";
import { type TerminalLine as TerminalLineType } from "../types/terminal";
import { runCommand } from "../commands/registry";

export function useTerminal() {
  const [lines, setLines] = useState<TerminalLineType[]>([]);

  const handleClear = useCallback(() => {
    setLines([]);
  }, []);

  const submit = useCallback(
    (command: string) => {
      const inputLine: TerminalLineType = {
        id: crypto.randomUUID(),
        type: "input",
        content: command,
      };

      const output = runCommand(command, handleClear);

      if (output === null) return;

      const outputLine: TerminalLineType = {
        id: crypto.randomUUID(),
        type: "output",
        content: output,
      };

      setLines((prev) => [...prev, inputLine, outputLine]);
    },
    [handleClear],
  );

  return { lines, submit };
}
