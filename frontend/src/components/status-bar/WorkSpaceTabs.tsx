import clsx from "clsx";
import { type Workspace } from "../../types/workspace";

interface WorkspaceTabsProps {
  workspaces: Workspace[];
  activeId: number;
  onSelect: (id: number) => void;
}

export default function WorkSpaceTabs({
  workspaces,
  activeId,
  onSelect,
}: WorkspaceTabsProps) {
  return (
    <div className="flex items-center gap-1">
      {workspaces.map((ws) => {
        const isActive = ws.id === activeId;
        return (
          <button
            key={ws.id}
            onClick={() => onSelect(ws.id)}
            className={clsx(
              "px-2 sm:px-2.5 py-1 rounded text-xs font-medium transition-colors",
              isActive
                ? "bg-arch text-base"
                : "text-text-muted hover:bg-surface hover:text-text-primary",
            )}
          >
            <span className="hidden sm:inline cursor-pointer"> {ws.label}</span>
          </button>
        );
      })}
    </div>
  );
}
