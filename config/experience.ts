import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "fujifilm_QA",
    position: "QA_Engineering_Intern",
    company: "FUJIFILM VisualSonics",
    location: "Toronto, ON",
    startDate: new Date("2024-05-01T12:00:00"),
    endDate: new Date("2024-08-31T12:00:00"),
    description: [
      "Developed automated UI system tests using C# to replace manual validation workflows within a large-scale enterprise application.",
      "Implemented and maintained automated test suites covering core system functionality, improving reliability and reducing manual testing effort.",
      "Collaborated within an agile team environment, working across a large codebase and enterprise testing tools to support continuous integration and validation processes.",
    ],
    achievements: [
      "Automated 4 system validation procedures and over 300 test cases (~12,000+ lines of code), significantly reducing manual testing overhead.",
      "Increased overall system test coverage by 8%, improving product reliability and regression detection.",
      "Built scalable and maintainable test infrastructure using C# to support ongoing system validation in a large enterprise environment.",
      "Gained hands-on experience working within a large engineering team, contributing to production-level testing workflows and agile development cycles.",
    ],
    skills: ["UI/UX", "C#", "Automation", "MSTest", "Agile Methodologies", "Scrum Workflow", "Working in Large Team", "CI/CD Pipelines", "Jira", "SVN", "Jenkins"],
    companyUrl: "https://www.visualsonics.com/",
    logo: "/experience/fujifilm.png",
  },
];
