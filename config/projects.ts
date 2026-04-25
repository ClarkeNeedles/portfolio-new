import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "portfolio",
    companyName: "Portfolio Website",
    type: "Personal",
    category: ["Web Dev", "Full Stack", "Frontend", "Backend", "UI/UX"],
    shortDescription:
      "Personal portfolio website built from scratch using HTML, CSS, and JavaScript, featuring a custom contact system powered by the Resend API.",
    websiteLink: "https://clarkeneedles.github.io/portfolio/",
    githubLink: "https://github.com/ClarkeNeedles/portfolio",
    techStack: [
      "Javascript",
      "CSS 3",
      "HTML 5",
      "Resend API",
      "Vercel",
    ],
    startDate: new Date("2025-08-01T12:00:00"),
    endDate: new Date("2025-11-24T12:00:00"),
    companyLogoImg: "/projects/portfolio/image.png",
    pagesInfoArr: [
      {
        title: "Landing & Sections",
        description:
          "A clean, minimal landing page with sections for skills, projects, and experience.",
        imgArr: ["/projects/portfolio/portfolio.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I built a personal portfolio website from scratch using vanilla HTML, CSS, and JavaScript, focusing on understanding core web fundamentals without relying on modern frameworks.",
        "The project includes a custom contact system powered by the Resend API, enabling users to send emails directly through the site while maintaining a simple and lightweight architecture.",
      ],
      bullets: [
        "Developed a fully responsive portfolio website using pure HTML, CSS, and JavaScript with no frameworks.",
        "Integrated a backend email system using the Resend API to enable real-time contact form submissions.",
        "Deployed the application on Vercel with a clean, fast-loading UI and minimal dependencies.",
        "Implemented custom styling, SVG assets, and Boxicons to create a polished and consistent design.",
      ],
    }
  },
];

export const featuredProjects = Projects.slice(0, 3);
