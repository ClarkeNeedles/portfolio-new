import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Clarke Needles' portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Clarke Needles' key skills that define his professional identity.",
    },
  },
  projects: {
    title: "$ ls projects/",
    description: "> showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Clarke Needles' projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Clarke Needles.",
    },
  },
  resume: {
    title: "Resume",
    description: "Clarke Needles' resume.",
    metadata: {
      title: "Resume",
      description: "Clarke Needles' resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Clarke Needles' professional journey and experience timeline.",
    },
  },
};
