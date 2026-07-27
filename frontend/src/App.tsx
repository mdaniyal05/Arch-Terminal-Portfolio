import { useState } from "react";
import TerminalWindow from "./components/terminal/TerminalWindow";
import TerminalLauncher from "./components/terminal/TerminalLauncher";
import StatusBar from "./components/status-bar/StatusBar";
import WindowManager from "./components/windows/WindowManager";
import { WORKSPACES } from "./types/workspace";
import { useTerminal } from "./hooks/useTerminal";

function App() {
  const { lines, submit } = useTerminal();
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [activeWindowId, setActiveWindowId] = useState<number | null>(null);

  function handleTabSelect(id: number) {
    setActiveWindowId((current) => (current === id ? null : id));
  }

  return (
    <div className="min-h-screen bg-base flex items-center justify-center p-4 pt-12">
      {isTerminalOpen ? (
        <TerminalWindow
          lines={lines}
          onSubmit={submit}
          onClose={() => setIsTerminalOpen(false)}
        />
      ) : (
        <TerminalLauncher onOpen={() => setIsTerminalOpen(true)} />
      )}

      <StatusBar
        workspaces={WORKSPACES}
        activeId={activeWindowId ?? 0}
        onSelect={handleTabSelect}
      />

      <WindowManager
        activeWindowId={activeWindowId}
        onClose={() => setActiveWindowId(null)}
      />
    </div>
  );
}

export default App;
