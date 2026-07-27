import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import PromptLabel from "./PromptLabel";
import { useCommandHistory } from "../../hooks/useCommandHistory";

interface CommandInputProps {
  onSubmit: (command: string) => void;
}

export default function CommandInput({ onSubmit }: CommandInputProps) {
  const [value, setValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const { push, navigate } = useCommandHistory();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      const trimmed = value.trim();

      if (trimmed.length > 0) {
        push(trimmed);
        onSubmit(trimmed);
      }

      setValue("");
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      setValue(navigate("up", value));
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setValue(navigate("down", value));
    }
  }

  return (
    <div
      className="flex gap-2 items-center cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <PromptLabel />
      <div className="relative flex items-center">
        <span className="text-text-primary whitespace-pre">{value}</span>
        <span className="w-2 h-4 bg-hypr ml-0.5 animate-blink" />
      </div>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="absolute opacity-0 w-0 h-0"
        autoFocus
        spellCheck={false}
        autoComplete="off"
      />
    </div>
  );
}
