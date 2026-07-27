import { useEffect } from "react";
import { bootLines, type BootLineStatus } from "../../data/bootLines";
import { useBootSequence } from "../../hooks/useBootSequence";

interface BootWindowProps {
  onComplete: () => void;
}

const STATUS_STYLES: Record<BootLineStatus, string> = {
  ok: "text-success",
  info: "text-hypr",
  warn: "text-warn",
  plain: "text-text-muted",
};

function StatusTag({ status }: { status: BootLineStatus }) {
  if (status === "plain") return null;
  const label = status === "ok" ? "OK" : status === "warn" ? "WARN" : "..";
  return <span className={`mr-2 ${STATUS_STYLES[status]}`}>[{label}]</span>;
}

export default function BootWindow({ onComplete }: BootWindowProps) {
  const { visibleCount, skip } = useBootSequence(onComplete);

  useEffect(() => {
    window.addEventListener("keydown", skip);
    window.addEventListener("click", skip);
    return () => {
      window.removeEventListener("keydown", skip);
      window.removeEventListener("click", skip);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed inset-0 bg-base flex flex-col justify-center px-6 md:px-24 font-mono text-sm z-50">
      <div className="space-y-1.5">
        {bootLines.slice(0, visibleCount).map((line, i) => (
          <div key={i} className="flex items-center">
            <StatusTag status={line.status ?? "plain"} />
            <span className="text-text-primary">{line.text}</span>
          </div>
        ))}
        {visibleCount < bootLines.length && (
          <span className="inline-block w-2 h-4 bg-hypr animate-blink" />
        )}
      </div>

      <p className="absolute bottom-6 left-6 md:left-24 text-text-muted text-xs">
        press any key to skip
      </p>
    </div>
  );
}
