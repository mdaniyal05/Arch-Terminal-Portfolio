import { useState } from "react";

export function useCommandHistory() {
  const [history, setHistory] = useState<string[]>([]);
  const [pointer, setPointer] = useState<number | null>(null);

  function push(command: string) {
    setHistory((prev) => [...prev, command]);
    setPointer(null);
  }

  function navigate(direction: "up" | "down", currentValue: string): string {
    if (history.length === 0) return currentValue;

    if (direction === "up") {
      const nextPointer =
        pointer === null ? history.length - 1 : Math.max(pointer - 1, 0);

      setPointer(nextPointer);

      return history[nextPointer];
    }

    if (pointer === null) return currentValue;

    const nextPointer = pointer + 1;

    if (nextPointer >= history.length) {
      setPointer(null);
      return "";
    }

    setPointer(nextPointer);

    return history[nextPointer];
  }

  return { push, navigate };
}
