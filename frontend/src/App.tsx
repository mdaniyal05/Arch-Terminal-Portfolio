import TerminalWindow from "./components/terminal/TerminalWindow";

function App() {
  return (
    <div className="min-h-screen bg-base flex items-center justify-center p-4">
      <TerminalWindow>
        <p className="text-text-muted">
          // content goes here
        </p>
      </TerminalWindow>
    </div>
  );
}

export default App;
