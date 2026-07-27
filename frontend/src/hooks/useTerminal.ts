import { useCallback, useState } from "react";
import { type TerminalLine as TerminalLineType } from "../types/terminal";
import { runCommand } from "../commands/registry";
import { WORKSPACES } from "../types/workspace";

export function useTerminal() {
  const [lines, setLines] = useState<TerminalLineType[]>([]);
  const [activeWorkspaceId, setActiveWorkspaceId] = useState(1);

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

      const matched = WORKSPACES.find(
        (ws) => ws.label.toLowerCase() === command.trim().toLowerCase(),
      );

      if (matched) {
        setActiveWorkspaceId(matched.id);
      }

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

  const runByWorkspace = useCallback(
    (id: number) => {
      const ws = WORKSPACES.find((w) => w.id === id);
      if (!ws) return;
      submit(ws.label);
    },
    [submit],
  );

  return { lines, submit, runByWorkspace, activeWorkspaceId };
}
