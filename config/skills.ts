import { Icons } from "@/components/common/icons";

type ProjectLink = {
  name: string;
  href: string;
};

export interface skillsInterface {
  name: string;
  description: string;
  icon: any;
  projects: ProjectLink[];
}

export const skills: skillsInterface[] = [
  {
    name: "Next.js",
    description:
      "Built responsive web apps with dynamic routing and optimized performance.",
    icon: Icons.nextjs,
    projects: [
      { name: "Project1", href: "/projects/portfolio (ref to project)" },
      { name: "Project2", href: "/projects/portfolio (ref to project)" },
      { name: "Project3", href: "/projects/portfolio (ref to project)" },
    ],
  },
];

export const featuredSkills = skills.slice(0, 6);
