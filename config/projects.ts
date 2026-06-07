import { ValidCategory, ValidExpType, ValidSkills } from "./constants"

interface DescriptionDetailsInterface {
  paragraphs: string[]
  bullets: string[]
}

export interface ProjectInterface {
  id: string
  type: ValidExpType
  companyName: string
  category: ValidCategory[]
  shortDescription: string
  websiteLink?: string
  githubLink?: string
  techStack: ValidSkills[]
  startDate: Date
  endDate: Date
  companyLogoImg: any
  descriptionDetails: DescriptionDetailsInterface
}

export const Projects: ProjectInterface[] = [
  {
    id: "fractal_generator",
    companyName: "Fractal Generator",
    type: "Personal",
    category: ["WinAPI", "Optimization", "Multithreading", "GUI Development"],
    shortDescription:
      "An application to generate and explore different types of fractals using CPP, SSE, AVX, and multithreading.",
    githubLink: "https://github.com/ClarkeNeedles/FractalGenerator",
    techStack: ["C++", "SSE", "AVX", "Multithreading", "WinAPI"],
    startDate: new Date("2025-07-31T12:00:00"),
    endDate: new Date("2025-09-04T12:00:00"),
    companyLogoImg: "/projects/fractal_generator.webp",
    descriptionDetails: {
      paragraphs: [
        "Developed a high-performance fractal generation application in C++ using SIMD optimizations (SSE and AVX) alongside multithreading to accelerate mathematical rendering workloads.",
        "The application allows users to explore and record multiple fractal types in real time while comparing rendering performance across different computational methods and processor register sizes.",
      ],
      bullets: [
        "Built an interactive fractal visualization tool in C++ using WinAPI with support for Mandelbrot, Burning Ship, Nova, Phoenix, and Multibrot fractals.",
        "Implemented SIMD optimizations using SSE and AVX instructions to improve rendering throughput through parallelized mathematical computation.",
        "Integrated multithreading to distribute fractal calculations across CPU cores, significantly reducing generation times.",
        "Added GIF recording functionality, gradient mapping, zooming, and panning controls to create an interactive real-time exploration experience.",
      ],
    },
  },
  {
    id: "autonomous_picar",
    companyName: "Autonomous PiCar",
    type: "Team",
    category: ["Robotics", "Computer Vision", "Embedded Systems", "Autonomous Systems", "Control Systems"],
    shortDescription:
      "An autonomous Raspberry Pi-based vehicle integrating computer vision and control systems for real-time navigation and self-driving behavior experiments.",
    githubLink: "https://github.com/ClarkeNeedles/Autonomous-PiCar",
    techStack: [
      "OpenCV",
      "Robotics",
      "Raspberry Pi",
      "Computer Vision",
      "Python",
      "C++",
      "Linux",
    ],
    startDate: new Date("2026-01-01T12:00:00"),
    endDate: new Date("2026-04-06T12:00:00"),
    companyLogoImg: "/projects/autonomous_picar.webp",
    descriptionDetails: {
      paragraphs: [
        "Developed an autonomous robotics system on a Raspberry Pi-based PiCar platform, integrating computer vision and control logic to enable real-time navigation and self-driving behavior.",
        "Designed a modular robotics architecture focused on perception, decision-making, and actuation, enabling experimentation with autonomous driving algorithms in a constrained embedded environment."
      ],
      bullets: [
        "Implemented computer vision pipeline using OpenCV for real-time lane detection and environment perception.",
        "Developed motor control and actuation logic for closed-loop navigation on a Raspberry Pi robotics platform.",
        "Structured the system for modular robotics development, separating perception, control, and hardware interface layers.",
        "Integrated sensor-driven decision-making to enable autonomous movement behaviors in real-world conditions.",
        "Designed for extensibility to support future ROS2 integration and advanced autonomy features."
      ]
    }
  },
  {
    id: "verilog_cpu",
    companyName: "Verilog CPU",
    type: "Team",
    category: [ "RTL Design", "Digital Design", "Computer Architecture", "FPGA Design"],
    shortDescription:
      "A custom CPU designed in Verilog, implementing core computer architecture concepts through RTL design, simulation, and hardware-level system modeling.",
    githubLink: "https://github.com/ClarkeNeedles/Verilog-CPU",
    techStack: [
      "Verilog",
      "ModelSim",
      "Quartus Prime",
    ],
    startDate: new Date("2025-01-01T12:00:00"),
    endDate: new Date("2025-04-04T12:00:00"),
    companyLogoImg: "/projects/verilog_cpu.webp",
    descriptionDetails: {
      paragraphs: [
        "Designed and implemented a custom CPU in Verilog HDL, applying core computer architecture principles including instruction execution, datapath design, and control logic.",
        "Built and simulated a hardware-level processor architecture to explore how instructions are fetched, decoded, and executed at the RTL level."
      ],
      bullets: [
        "Developed a modular CPU architecture in Verilog including ALU, control unit, registers, and datapath components.",
        "Implemented instruction decoding and execution logic following a simplified ISA design.",
        "Simulated hardware behavior using standard RTL verification workflows.",
        "Explored fundamental computer architecture concepts including pipelining (if applicable), control flow, and signal timing.",
        "Validated CPU functionality through testbenches and simulation-driven verification."
      ]
    }
  },
  {
    id: "portfolio_new",
    companyName: "New Portfolio Website",
    type: "Personal",
    category: ["Web Development", "Frontend", "Backend", "UI/UX", "Full Stack"],
    shortDescription:
      "A modern personal portfolio website built with Next.js and React, featuring dynamic project showcases and a contact system powered by the Resend API.",
    githubLink: "https://github.com/ClarkeNeedles/portfolio-new",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Resend API",
      "Vercel",
    ],
    startDate: new Date("2026-04-20T12:00:00"),
    endDate: new Date("2026-06-06T12:00:00"),
    companyLogoImg: "/projects/portfolio_new.webp",
    descriptionDetails: {
      paragraphs: [
        "Built a modern, responsive personal portfolio website using Next.js and React, focusing on performance, scalability, and clean UI design.",
        "Implemented a serverless contact form using the Resend API, enabling reliable email delivery directly from the frontend without requiring a traditional backend.",
      ],

      bullets: [
        "Developed reusable React components for projects, navigation, and UI sections to ensure a modular and maintainable codebase.",
        "Integrated Next.js API routes to securely handle contact form submissions and forward messages via the Resend API.",
        "Optimized performance using Next.js rendering strategies (SSR/SSG) for fast load times and improved SEO.",
        "Designed a fully responsive UI with mobile-first principles and consistent visual hierarchy across all sections.",
        "Deployed the application on Vercel with environment variable support for secure API key management.",
      ],
    },
  },
  {
    id: "knowledge_transfer_ai",
    companyName: "Knowledge Transfer AI",
    type: "Team",
    category: ["AI Systems", "Full-Stack Development", "RAG"],
    shortDescription:
      "A full-stack AI-powered learning platform that generates personalized, role-based educational content using a RAG pipeline, AI orchestration services, and text-to-speech narration.",
    githubLink: "https://github.com/ClarkeNeedles/Knowledge-Transfer-AI",
    techStack: [
      "Backboard API",
      "ElevenLabs API",
      "FastAPI",
      "RAG",
      "React",
      "Vite",
      "Tailwind CSS",
      "Python",
      "SQLite"
    ],
    startDate: new Date("2026-01-8T12:00:00"),
    endDate: new Date("2026-01-16T12:00:00"),
    companyLogoImg: "/projects/knowledge_transfer_ai.webp",
    descriptionDetails: {
      paragraphs: [
        "Built a full-stack AI-powered learning platform that generates role-tailored educational content using a structured onboarding system and RAG-based knowledge retrieval pipeline.",
        "Integrated multiple AI services including Backboard API for orchestration and ElevenLabs for text-to-speech, enabling a complete interactive learning experience from content generation to audio narration."
      ],
      bullets: [
        "Developed a React + Vite frontend with onboarding, lecture management, and interactive learning interfaces.",
        "Implemented a Python backend with a RAG-style knowledge retrieval pipeline for context-aware AI responses.",
        "Built service-layer integrations with Backboard API for LLM orchestration and generation workflows.",
        "Integrated ElevenLabs API to convert AI-generated lessons into natural voice narration.",
        "Designed a modular full-stack architecture separating UI, API layer, and AI service integrations.",
        "Used SQLite for session tracking and backend state management."
      ]
    }
  },
  {
    id: "grade_tracker_app",
    companyName: "Grade Tracker App",
    type: "Personal",
    category: [
      "Qt",
      "Full Stack",
      "Database Systems",
      "Desktop Development"
    ],
    shortDescription:
      "A Qt-based desktop application for tracking course grades, study hours, and academic progress, featuring cloud synchronization, friend comparisons, and dynamic ranking systems.",
    githubLink: "https://github.com/ClarkeNeedles/Grade-Tracker-App",
    techStack: [
      "Qt 6",
      "Supabase",
      "PostgreSQL",
      "C++",
      "JSON",
      "CMake"
    ],
    startDate: new Date("2025-09-01T12:00:00"),
    endDate: new Date("2025-12-01T12:00:00"),
    companyLogoImg: "/projects/grade_tracker_app.webp",
    descriptionDetails: {
      paragraphs: [
        "Developed a full-stack academic productivity application using C++ and Qt, enabling students to manage courses, track grades, monitor study habits, and visualize academic performance through an intuitive desktop interface.",
        "Integrated a cloud-hosted Supabase backend for authentication, persistent data storage, and real-time synchronization, while implementing social and competitive features such as friend tracking and rank comparisons."
      ],
      bullets: [
        "Designed and implemented a multi-page desktop application using Qt Widgets, Qt Designer, and C++.",
        "Integrated Supabase REST APIs using Qt Network to support user authentication, cloud data storage, and account management.",
        "Built course management functionality allowing users to track grades, assignments, weighted averages, and study hours.",
        "Implemented dynamic ranking systems based on academic performance and productivity metrics.",
        "Developed friend comparison features enabling users to view peer rankings, course progress, and study statistics.",
        "Created data visualizations using Qt Charts to display grade distributions and academic performance metrics.",
        "Structured the application using modular UI, database, and business-logic layers to improve maintainability and scalability.",
        "Utilized environment variables and configuration management to securely handle API keys and backend credentials."
      ]
    }
  },
  {
    id: "portfolio",
    companyName: "Portfolio Website",
    type: "Personal",
    category: ["Web Dev", "Full Stack", "Frontend", "Backend", "UI/UX"],
    shortDescription:
      "Personal portfolio website built from scratch using HTML, CSS, and JavaScript, featuring a custom contact system powered by the Resend API.",
    websiteLink: "https://clarkeneedles.github.io/portfolio/",
    githubLink: "https://github.com/ClarkeNeedles/portfolio",
    techStack: ["JavaScript", "CSS 3", "HTML 5", "Resend API", "Vercel"],
    startDate: new Date("2025-08-01T12:00:00"),
    endDate: new Date("2025-11-24T12:00:00"),
    companyLogoImg: "/projects/portfolio.webp",
    descriptionDetails: {
      paragraphs: [
        "Built a personal portfolio website from scratch using vanilla HTML, CSS, and JavaScript, focusing on understanding core web fundamentals without relying on modern frameworks.",
        "The project includes a custom contact system powered by the Resend API, enabling users to send emails directly through the site while maintaining a simple and lightweight architecture.",
      ],
      bullets: [
        "Developed a fully responsive portfolio website using pure HTML, CSS, and JavaScript with no frameworks.",
        "Integrated a backend email system using the Resend API to enable real-time contact form submissions.",
        "Deployed the application on Vercel with a clean, fast-loading UI and minimal dependencies.",
        "Implemented custom styling, SVG assets, and Boxicons to create a polished and consistent design.",
      ],
    },
  },
  {
    id: "data_structures",
    companyName: "Data Structures",
    type: "Personal",
    category: ["Algorithms", "Data Structures", "Systems Programming", "C Library"],
    shortDescription:
      "A custom data structures and algorithms library written entirely in C, featuring reusable implementations of core computer science concepts.",
    githubLink: "https://github.com/ClarkeNeedles/DataStructures",
    techStack: ["C", "Makefile", "Algorithms", "Data Structures", "Unit Testing"],
    startDate: new Date("2025-06-20T12:00:00"),
    endDate: new Date("2025-08-30T12:00:00"),
    companyLogoImg: "/projects/data_structures.webp",
    descriptionDetails: {
      paragraphs: [
        "Developed a low-level data structures and algorithms library entirely in C to strengthen understanding of memory management, abstraction, and systems-level programming concepts.",
        "The project includes reusable implementations of core data structures alongside algorithmic utilities, organized into modular source, include, and testing directories with a custom Makefile build system.",
      ],
      bullets: [
        "Implemented custom data structures and algorithms in pure C with a focus on performance, modularity, and low-level memory control.",
        "Organized the project into reusable include/source modules with separate testing infrastructure for validating implementations.",
        "Built and managed the project using a custom Makefile-based compilation workflow.",
        "Strengthened understanding of pointers, dynamic memory allocation, abstraction, and systems programming through hands-on implementation of foundational computer science concepts.",
      ],
    },
  },
  {
    id: "machine_learning_proj",
    companyName: "Machine Learning Project",
    type: "Team",
    category: ["Machine Learning", "Python", "Data Analysis"],
    shortDescription:
      "A machine learning project focused on classifying human movement patterns such as walking and jumping using sensor-based data.",
    githubLink: "https://github.com/ClarkeNeedles/MachineLearningProj",
    techStack: ["Python", "NumPy", "Pandas", "Scikit-learn"],
    startDate: new Date("2025-03-28T12:00:00"),
    endDate: new Date("2025-08-18T12:00:00"),
    companyLogoImg: "/projects/machine_learning_proj.webp",
    descriptionDetails: {
      paragraphs: [
        "Developed a machine learning classification system in Python capable of distinguishing between walking and jumping motion patterns using processed input data and predictive modeling techniques.",
        "The project explored the end-to-end machine learning workflow, including data preprocessing, feature extraction, model training, and evaluation to better understand supervised learning concepts and classification accuracy.",
      ],
      bullets: [
        "Built a supervised machine learning model in Python to classify movement patterns such as walking and jumping.",
        "Processed and analyzed input datasets using data manipulation and preprocessing techniques to improve model performance.",
        "Experimented with model training, testing, and evaluation workflows to compare prediction accuracy and classification effectiveness.",
        "Strengthened understanding of core machine learning concepts including feature engineering, classification algorithms, and dataset analysis.",
      ],
    },
  },
  {
    id: "audio_amp",
    companyName: "Audio Amp",
    type: "Team",
    category: ["Electronics", "Circuit Design", "Analog Systems", "Power Systems"],
    shortDescription:
      "An analog audio amplifier and AC-DC power supply system using BJTs, rectification, voltage regulation, and Darlington amplification stages.",
    githubLink: "https://github.com/ClarkeNeedles/AudioAmp",
    techStack: [
      "BJT",
      "Analog Electronics",
      "Circuit Design",
      "Power Supply Design",
      "Voltage Regulation",
    ],
    startDate: new Date("2025-01-05T12:00:00"),
    endDate: new Date("2025-04-30T12:00:00"),
    companyLogoImg: "/projects/audio_amp.webp",
    descriptionDetails: {
      paragraphs: [
        "Designed and analyzed an analog audio amplification system featuring an AC-DC power supply, full bridge rectifier, voltage regulation, and a high-current Darlington transistor amplifier stage.",
        "The project explored practical analog electronics concepts including transistor biasing, signal amplification, rectification, filtering, and power delivery through the design and testing of a complete audio amplifier circuit.",
      ],
      bullets: [
        "Designed an AC-DC power supply using a 10:1 transformer, full bridge rectifier, filtering stages, and voltage regulation circuitry.",
        "Implemented a high current gain Darlington BJT amplifier to drive audio output with improved amplification performance.",
        "Analyzed and tested transistor biasing, gain behavior, and analog signal propagation through multiple amplification stages.",
        "Strengthened understanding of analog electronics, power systems, and circuit analysis through hands-on hardware design and simulation work.",
      ],
    },
  },
]

export const featuredProjects = Projects.slice(0, 3)
