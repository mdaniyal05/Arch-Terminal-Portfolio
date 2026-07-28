export interface Workspace {
  id: number;
  label: string;
}

export const WORKSPACES: Workspace[] = [
  { id: 1, label: "ABOUT" },
  { id: 2, label: "EXPERIENCE" },
  { id: 3, label: "PROJECTS" },
  { id: 4, label: "CONTACT" },
];
