import { useClock } from "../../hooks/useClock";
import { type Workspace } from "../../types/workspace";
import WorkSpaceTabs from "./WorkSpaceTabs";
import SystemIndicators from "./SystemIndicators";

interface StatusBarProps {
  workspaces: Workspace[];
  activeId: number;
  onSelect: (id: number) => void;
}

export default function StatusBar({
  workspaces,
  activeId,
  onSelect,
}: StatusBarProps) {
  const time = useClock();

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedDate = time.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-9 bg-surface-hi border-b border-border flex items-center justify-between px-2 sm:px-3 font-mono">
      <WorkSpaceTabs
        workspaces={workspaces}
        activeId={activeId}
        onSelect={onSelect}
      />

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="hidden sm:block">
          <SystemIndicators />
        </div>
        <span className="text-xs text-text-primary whitespace-nowrap">
          <span className="hidden sm:inline">{formattedDate} </span>
          {formattedTime}
        </span>
      </div>
    </div>
  );
}
