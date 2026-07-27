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
    "I'm a software engineer who enjoys building software with immense curiosity that helps others and solves their problems.",
    "And apparently also enjoys spending way too much time ricing my Linux setup.",
    "",
    "I care about writing maintainable code, sweating optimizations,",
    "and making things that feel a little more alive than a typical software application.",
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
