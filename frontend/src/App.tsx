import TerminalWindow from "./components/terminal/TerminalWindow";
import StatusBar from "./components/status-bar/StatusBar";
import { WORKSPACES } from "./types/workspace";
import { useTerminal } from "./hooks/useTerminal";

function App() {
  const { lines, submit, runByWorkspace, activeWorkspaceId } = useTerminal();

  return (
    <div className="min-h-screen bg-base flex items-center justify-center p-4 pt-12">
      <TerminalWindow lines={lines} onSubmit={submit} />

      <StatusBar
        workspaces={WORKSPACES}
        activeId={activeWorkspaceId}
        onSelect={runByWorkspace}
      />
    </div>
  );
}

export default App;
