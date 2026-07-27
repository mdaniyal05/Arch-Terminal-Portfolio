import { useState } from "react";
import TerminalWindow from "./components/terminal/TerminalWindow";
import StatusBar from "./components/status-bar/StatusBar";
import { WORKSPACES } from "./types/workspace";

function App() {
  const [activeWorkspace, setActiveWorkspace] = useState(1);

  return (
    <div className="min-h-screen bg-base flex items-center justify-center p-4 pt-12">
      <TerminalWindow>
        <p className="text-text-muted">
          // content goes here
        </p>
      </TerminalWindow>

      <StatusBar
        workspaces={WORKSPACES}
        activeId={activeWorkspace}
        onSelect={setActiveWorkspace}
      />
    </div>
  );
}

export default App;
