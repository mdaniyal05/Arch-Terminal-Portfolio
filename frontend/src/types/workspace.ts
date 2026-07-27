export interface Workspace {
  id: number;
  label: string;
}

export const WORKSPACES: Workspace[] = [
  { id: 1, label: "Home" },
  { id: 2, label: "About" },
  { id: 3, label: "Projects" },
  { id: 4, label: "Contact" },
];
