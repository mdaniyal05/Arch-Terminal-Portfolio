export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "Signetix",
    description:
      "A Web Based Application with Real Time Sign Language Gesture Recognition Engine.",
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS S3",
      "Socket.io",
      "FastAPI",
      "Python",
      "OpenCV",
      "MediaPipe",
      "Keras",
      "TensorFlow",
      "VideoSDK",
      "Websockets",
      "NumPy",
      "Pydantic",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Shadcn",
    ],
    liveUrl: "https://signetix.com",
    repoUrl: "https://github.com/mdaniyal05/Signetix",
  },
];
