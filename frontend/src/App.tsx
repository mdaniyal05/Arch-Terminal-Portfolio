import { useState } from "react";
import TerminalWindow from "./components/terminal/TerminalWindow";
import TerminalLauncher from "./components/terminal/TerminalLauncher";
import StatusBar from "./components/status-bar/StatusBar";
import { WORKSPACES } from "./types/workspace";
import { useTerminal } from "./hooks/useTerminal";

function App() {
  const { lines, submit, runByWorkspace, activeWorkspaceId } = useTerminal();
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

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
        activeId={activeWorkspaceId}
        onSelect={runByWorkspace}
      />
    </div>
  );
}

export default App;
