import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    metadata: {
      title: "Home",
      description: "Clarke Needles' portfolio website.",
    },
  },
  skills: {
    title: "/skills:~$ ",
    metadata: {
      title: "Skills",
      description:
        "Clarke Needles' key skills that define his professional identity.",
    },
  },
  projects: {
    title: "/projects:~$ ",
    metadata: {
      title: "Projects",
      description: "Clarke Needles' projects in building web applications.",
    },
  },
  contact: {
    title: "/contact:~$ ",
    metadata: {
      title: "Contact",
      description: "Contact Clarke Needles.",
    },
  },
  resume: {
    title: "/resume:~$ ",
    metadata: {
      title: "Resume",
      description: "Clarke Needles' resume.",
    },
  },
  experience: {
    title: "/experience:~$ ",
    metadata: {
      title: "Experience",
      description:
        "Clarke Needles' professional journey and experience timeline.",
    },
  },
};
