export interface AboutData {
  name: string;
  role: string;
  location: string;
  bio: string[];
  skills: string[];
}

export const aboutData: AboutData = {
  name: "Daniyal",
  role: "Software Engineer",
  location: "Karachi, Pakistan",
  bio: [
    "Software engineer focused on building maintainable, well-optimized systems.",
    "",
    "Spends considerable time customizing Linux environments (window managers, dotfiles, terminal tooling).",
    "",
    "Prioritizes clean architecture, performance tuning,",
    "and attention to interaction detail that most applications skip.",
  ],
  skills: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    ".NET",
    "C#",
    "FastAPI",
    "Python",
    "Git",
    "Linux (Arch, btw)",
    "Docker",
    "CI/CD",
    "Testing",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind CSS",
  ],
};
