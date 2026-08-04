import { type ReactNode } from "react";
import { X } from "lucide-react";

interface WindowFrameProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export default function WindowFrame({
  title,
  onClose,
  children,
}: WindowFrameProps) {
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-base/70 backdrop-blur-sm sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full h-full sm:h-auto sm:max-w-2xl overflow-hidden border-2 border-hypr/40 shadow-2xl shadow-black/50 bg-surface font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:py-2 bg-surface-hi border-b-2 border-border select-none">
          <span className="text-xs text-hypr tracking-wide">{title}</span>
          <button
            onClick={onClose}
            aria-label="Close window"
            className="text-text-muted hover:text-danger transition-colors p-1 cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-4 sm:p-6 text-sm leading-relaxed text-text-primary h-[calc(100%-45px)] sm:h-auto sm:max-h-[70vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
