import { useEffect } from "react";

interface KeyboardShortcutsOptions {
  onToggleTerminal: () => void;
  onEscape: () => void;
}

export function useKeyboardShortcuts({
  onToggleTerminal,
  onEscape,
}: KeyboardShortcutsOptions) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();

        onToggleTerminal();

        return;
      }

      if (e.key === "Escape") {
        onEscape();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onToggleTerminal, onEscape]);
}
