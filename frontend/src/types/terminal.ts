export interface TerminalLine {
  id: string;
  type: "input" | "output";
  content: string;
}
