import WindowFrame from "./WindowFrame";
import AboutWindow from "./AboutWindow";
import ProjectsWindow from "./ProjectsWindow";
import ContactWindow from "./ContactWindow";

interface WindowManagerProps {
  activeWindowId: number | null;
  onClose: () => void;
}

const WINDOW_MAP: Record<number, { title: string; content: React.ReactNode }> =
  {
    1: { title: "about.md", content: <AboutWindow /> },
    2: { title: "projects/", content: <ProjectsWindow /> },
    3: { title: "contact.md", content: <ContactWindow /> },
  };

export default function WindowManager({
  activeWindowId,
  onClose,
}: WindowManagerProps) {
  if (activeWindowId === null) return null;

  const entry = WINDOW_MAP[activeWindowId];
  if (!entry) return null;

  return (
    <WindowFrame title={entry.title} onClose={onClose}>
      {entry.content}
    </WindowFrame>
  );
}
