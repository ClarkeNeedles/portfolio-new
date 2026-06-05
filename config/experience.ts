import { ValidSkills } from "./constants"

export interface ExperienceInterface {
  id: string
  position: string
  company: string
  location: string
  startDate: Date
  endDate: Date | "Present"
  description: string[]
  achievements: string[]
  skills: ValidSkills[]
  companyUrl?: string
  logo?: string
}

export const experiences: ExperienceInterface[] = [
  {
    id: "semtech_firmware",
    position: "Firmware Designer",
    company: "Semtech Corporation",
    location: "Kanata",
    startDate: new Date("2026-05-01T12:00:00"),
    endDate: "Present",
    description: [
      "Developing embedded firmware in C for hardware systems, focusing on low-level programming and direct interaction with microcontroller peripherals.",
      "Working with hardware interfaces and system components to support reliable data acquisition, control, and communication in embedded environments.",
      "Collaborating within an engineering team to design, implement, and test firmware features in resource-constrained systems.",
    ],
    achievements: [
      "Gaining hands-on experience in embedded systems development, including debugging, testing, and optimizing firmware for performance and reliability.",
      "Applying low-level programming concepts in C to interact with hardware components and system-level functionality.",
      "Contributing to firmware design and implementation within a collaborative development environment.",
      "Developing an understanding of hardware-software integration and real-time system constraints.",
    ],
    skills: [
      "C",
      "Embedded Systems",
      "Firmware Development",
      "Real-Time Systems",
      "Low-Level Programming",
    ],
    companyUrl: "https://www.semtech.com/",
    logo: "/experience/semtech.webp",
  },
  {
    id: "qadt_autonomy",
    position: "Autonomy Software",
    company: "QADT",
    location: "Kingston",
    startDate: new Date("2025-09-01T12:00:00"),
    endDate: "Present",
    description: [
      "Developing embedded and autonomy software in C++ and Python for UAV guidance, navigation, and flight control systems for the AEAC competition.",
      "Designing and implementing ROS2 nodes to interface with onboard hardware, enabling real-time data collection, processing, and communication across the UAV system.",
      "Integrating autonomy stack components including Nav2 for localization and navigation, SLAM for environment mapping, and PX4 for flight control within a modular ROS2 architecture.",
    ],
    achievements: [
      "Built and integrated ROS2-based autonomy pipelines leveraging Nav2, SLAM, and PX4, enabling coordinated navigation, localization, and flight control.",
      "Established communication between PX4 and ground control systems using MAVLink, supporting telemetry, command, and system monitoring via QGroundControl.",
      "Developed and tested UAV software in simulation using Gazebo, improving reliability and enabling rapid iteration without hardware dependency.",
      "Implemented containerized development workflows using Docker to support consistent environments and CI/CD pipelines across the team.",
      "Collaborated using GitHub for version control, pull requests, and project board management within an agile team environment.",
    ],
    skills: [
      "C++",
      "ROS2",
      "Nav2",
      "SLAM",
      "PX4",
      "MAVLink",
      "QGroundControl",
      "Gazebo",
      "GitHub",
      "Docker",
      "Linux",
    ],
    companyUrl: "https://qadt.ca/",
    logo: "/experience/qadt.webp",
  },
  {
    id: "fujifilm_software",
    position: "SWE Intern",
    company: "FUJIFILM VisualSonics",
    location: "Toronto",
    startDate: new Date("2025-05-01T12:00:00"),
    endDate: new Date("2025-08-31T12:00:00"),
    description: [
      "Developed system-level features in C and C++ using the WinAPI, working with ATL and COM objects within a large-scale Windows application.",
      "Designed and implemented a TreeView-based file navigator panel using the MVP pattern to improve UI structure and maintainability.",
      "Collaborated within an existing codebase to extend core application functionality and support internal tooling improvements.",
    ],
    achievements: [
      "Improved service team productivity by introducing a TreeView file navigator, streamlining file access and navigation workflows.",
      "Contributed over 16,000 lines of production code to the main codebase, reviewed and approved by senior developers.",
      "Applied architectural design patterns (MVP) to build maintainable and scalable UI components within a legacy system.",
      "Gained hands-on experience working with low-level Windows development technologies, including WinAPI, ATL, and COM.",
    ],
    skills: [
      "C",
      "C++",
      "UI/UX",
      "WinAPI",
      "ATL",
      "COM",
      "Agile Methodologies",
      "Scrum Workflow",
      "Working in Large Team",
      "CI/CD Pipelines",
      "Jira",
      "SVN",
      "Jenkins",
    ],
    companyUrl: "https://www.visualsonics.com/",
    logo: "/experience/fujifilm.webp",
  },
  {
    id: "project_manager",
    position: "Project Manager",
    company: "Smith School of Engineering, Queen's University",
    location: "Kingston",
    startDate: new Date("2026-01-01T12:00:00"),
    endDate: new Date("2026-04-31T12:00:00"),
    description: [
      "Led first-year engineering student teams in the design and development of a carbon footprint tracking application, providing guidance on software architecture and technology stack selection.",
      "Managed project timelines, deliverables, and team coordination as Project Manager, ensuring alignment with course milestones and client expectations.",
      "Mentored students through core software development practices, including system design, implementation, and iterative development workflows.",
    ],
    achievements: [
      "Directed student teams in designing and implementing full-stack carbon tracking applications, guiding architectural decisions and technology selection.",
      "Coordinated client meetings and stakeholder communication, ensuring project requirements were clearly defined and met throughout development.",
      "Provided structured feedback on design processes, technical documentation, and presentations, improving overall project quality and clarity.",
      "Developed leadership and project management experience by overseeing multiple teams, balancing technical mentorship with delivery timelines.",
    ],
    skills: [
      "Technical Leadership",
      "Software Architecture",
      "System Design",
      "Project Management",
      "Stakeholder Communication",
      "Team Mentorship",
      "Requirements Analysis",
      "Technical Documentation",
      "Code Review",
    ],
    companyUrl: "https://smithengineering.queensu.ca/first-year/first-year-courses.html",
    logo: "/experience/smith.webp",
  },
  {
    id: "fujifilm_QA",
    position: "QA Intern",
    company: "FUJIFILM VisualSonics",
    location: "Toronto",
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
    skills: [
      "UI/UX",
      "C#",
      "Automation",
      "MSTest",
      "Agile Methodologies",
      "Scrum Workflow",
      "Working in Large Team",
      "CI/CD Pipelines",
      "Jira",
      "SVN",
      "Jenkins",
    ],
    companyUrl: "https://www.visualsonics.com/",
    logo: "/experience/fujifilm.webp",
  },
]
