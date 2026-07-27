import { useState } from "react";
import TerminalWindow from "./components/terminal/TerminalWindow";
import TerminalLauncher from "./components/terminal/TerminalLauncher";
import StatusBar from "./components/status-bar/StatusBar";
import WindowManager from "./components/windows/WindowManager";
import BootScreen from "./components/boot/BootWindow";
import { WORKSPACES } from "./types/workspace";
import { useTerminal } from "./hooks/useTerminal";

const BOOT_SESSION_KEY = "arch-portfolio-booted";

function App() {
  const { lines, submit } = useTerminal();
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [activeWindowId, setActiveWindowId] = useState<number | null>(null);
  const [hasBooted, setHasBooted] = useState(
    () => sessionStorage.getItem(BOOT_SESSION_KEY) === "true",
  );

  function handleBootComplete() {
    sessionStorage.setItem(BOOT_SESSION_KEY, "true");
    setHasBooted(true);
  }

  function handleTabSelect(id: number) {
    setActiveWindowId((current) => (current === id ? null : id));
  }

  if (!hasBooted) {
    return <BootScreen onComplete={handleBootComplete} />;
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
