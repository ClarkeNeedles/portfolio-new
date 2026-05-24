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
    companyName: "Fractal_Generator",
    type: "Personal",
    category: ["WinAPI", "Optimization", "Multithreading", "GUI Development"],
    shortDescription:
      "An application to generate and explore different types of fractals using CPP, SSE, AVX, and multithreading.",
    githubLink: "https://github.com/ClarkeNeedles/FractalGenerator",
    techStack: ["C++", "SSE", "AVX", "Multithreading", "WinAPI"],
    startDate: new Date("2025-07-31T12:00:00"),
    endDate: new Date("2025-09-04T12:00:00"),
    companyLogoImg: "/projects/fractal_generator/FractalGenerator.jpg",
    descriptionDetails: {
      paragraphs: [
        "> Developed a high-performance fractal generation application in C++ using SIMD optimizations (SSE and AVX) alongside multithreading to accelerate mathematical rendering workloads.",
        "> The application allows users to explore and record multiple fractal types in real time while comparing rendering performance across different computational methods and processor register sizes.",
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
    id: "knowledge_transfer_ai",
    companyName: "Knowledge_Transfer_AI",
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

    companyLogoImg: "/projects/knowledge_transfer_ai/image.png",

    descriptionDetails: {
      paragraphs: [
        "> Built a full-stack AI-powered learning platform that generates role-tailored educational content using a structured onboarding system and RAG-based knowledge retrieval pipeline.",
        "> Integrated multiple AI services including Backboard API for orchestration and ElevenLabs for text-to-speech, enabling a complete interactive learning experience from content generation to audio narration."
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
  }
  {
    id: "portfolio",
    companyName: "Portfolio_Website",
    type: "Personal",
    category: ["Web Dev", "Full Stack", "Frontend", "Backend", "UI/UX"],
    shortDescription:
      "Personal portfolio website built from scratch using HTML, CSS, and JavaScript, featuring a custom contact system powered by the Resend API.",
    websiteLink: "https://clarkeneedles.github.io/portfolio/",
    githubLink: "https://github.com/ClarkeNeedles/portfolio",
    techStack: ["Javascript", "CSS 3", "HTML 5", "Resend API", "Vercel"],
    startDate: new Date("2025-08-01T12:00:00"),
    endDate: new Date("2025-11-24T12:00:00"),
    companyLogoImg: "/projects/portfolio/image.png",
    descriptionDetails: {
      paragraphs: [
        "> Built a personal portfolio website from scratch using vanilla HTML, CSS, and JavaScript, focusing on understanding core web fundamentals without relying on modern frameworks.",
        "> The project includes a custom contact system powered by the Resend API, enabling users to send emails directly through the site while maintaining a simple and lightweight architecture.",
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
    companyName: "Data_Structures",
    type: "Personal",
    category: ["Algorithms", "Data Structures", "Systems Programming", "C Library"],
    shortDescription:
      "A custom data structures and algorithms library written entirely in C, featuring reusable implementations of core computer science concepts.",
    githubLink: "https://github.com/ClarkeNeedles/DataStructures",
    techStack: ["C", "Makefile", "Algorithms", "Data Structures", "Unit Testing"],
    startDate: new Date("2025-06-20T12:00:00"),
    endDate: new Date("2025-08-30T12:00:00"),
    companyLogoImg: "/projects/data_structures/DataStructures.jpg",
    descriptionDetails: {
      paragraphs: [
        "> Developed a low-level data structures and algorithms library entirely in C to strengthen understanding of memory management, abstraction, and systems-level programming concepts.",
        "> The project includes reusable implementations of core data structures alongside algorithmic utilities, organized into modular source, include, and testing directories with a custom Makefile build system.",
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
    companyName: "Machine_Learning_Project",
    type: "Team",
    category: ["Machine Learning", "Python", "Data Analysis"],
    shortDescription:
      "A machine learning project focused on classifying human movement patterns such as walking and jumping using sensor-based data.",
    githubLink: "https://github.com/ClarkeNeedles/MachineLearningProj",
    techStack: ["Python", "NumPy", "Pandas", "Scikit-learn"],
    startDate: new Date("2025-03-28T12:00:00"),
    endDate: new Date("2025-08-18T12:00:00"),
    companyLogoImg: "/projects/machine_learning/MachineLearningProj.png",
    descriptionDetails: {
      paragraphs: [
        "> Developed a machine learning classification system in Python capable of distinguishing between walking and jumping motion patterns using processed input data and predictive modeling techniques.",
        "> The project explored the end-to-end machine learning workflow, including data preprocessing, feature extraction, model training, and evaluation to better understand supervised learning concepts and classification accuracy.",
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
    companyName: "Audio_Amp",
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
    companyLogoImg: "/projects/audio_amp/AudioAmp.png",
    descriptionDetails: {
      paragraphs: [
        "> Designed and analyzed an analog audio amplification system featuring an AC-DC power supply, full bridge rectifier, voltage regulation, and a high-current Darlington transistor amplifier stage.",
        "> The project explored practical analog electronics concepts including transistor biasing, signal amplification, rectification, filtering, and power delivery through the design and testing of a complete audio amplifier circuit.",
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
