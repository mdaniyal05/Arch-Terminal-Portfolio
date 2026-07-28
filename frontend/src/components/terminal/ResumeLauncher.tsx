import { FileDown } from "lucide-react";

export default function ResumeLauncher() {
  return (
    <a
      href="/resume.pdf"
      download
      className="fixed top-36 left-4 z-20 group flex flex-col items-center gap-1.5 w-16"
    >
      <span className="w-14 h-14 rounded-lg border-2 border-border bg-surface/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-black/40 group-hover:border-arch transition-colors">
        <FileDown size={26} className="text-hypr" />
      </span>
      <span className="text-[11px] font-mono text-text-primary/90 text-center leading-tight drop-shadow">
        Resume
      </span>
    </a>
  );
}
