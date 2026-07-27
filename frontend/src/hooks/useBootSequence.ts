import { useEffect, useRef, useState } from "react";
import { bootLines } from "../data/bootLines";

export function useBootSequence(onComplete: () => void) {
  const [visibleCount, setVisibleCount] = useState(0);
  const completedRef = useRef(false);

  useEffect(() => {
    if (visibleCount >= bootLines.length) {
      if (!completedRef.current) {
        completedRef.current = true;
        const timeout = setTimeout(onComplete, 400);
        return () => clearTimeout(timeout);
      }
      return;
    }

    const delay = bootLines[visibleCount]?.delayMs ?? 150;
    const timeout = setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [visibleCount, onComplete]);

  function skip() {
    if (completedRef.current) return;
    completedRef.current = true;
    setVisibleCount(bootLines.length);
    onComplete();
  }

  return { visibleCount, skip };
}
