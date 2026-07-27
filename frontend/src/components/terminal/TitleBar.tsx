interface TitleBarProps {
  title: string;
}

export default function TitleBar({ title }: TitleBarProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-surface-hi border-b border-border rounded-t-lg select-none">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-sm bg-danger/80" />
        <span className="w-3 h-3 rounded-sm bg-warn/80" />
        <span className="w-3 h-3 rounded-sm bg-success/80" />
      </div>

      <p className="text-xs text-text-muted font-mono tracking-wide">{title}</p>
      <div className="w-13" />
    </div>
  );
}
