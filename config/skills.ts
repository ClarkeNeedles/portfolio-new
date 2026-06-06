type ProjectLink = {
  name: string
  href: string
  type: "internal" | "external"
}

export interface skillsInterface {
  name: string
  icon: string
  projects: ProjectLink[]
}

export const skills: skillsInterface[] = [
  {
    name: "C",
    icon: "c",
    projects: [
      { name: "Firmware Designer", href: "/experience/semtech_firmware", type: "internal" },
      { name: "SWE Intern", href: "/experience/fujifilm_software", type: "internal" },
      { name: "Data Structures", href: "https://github.com/ClarkeNeedles/DataStructures", type: "external" },
    ],
  },
  {
    name: "C#",
    icon: "csharp",
    projects: [
      { name: "QA Intern", href: "/experience/fujifilm_QA", type: "internal" },
    ],
  },
  {
    name: "C++",
    icon: "cpp",
    projects: [
      { name: "SWE Intern", href: "/experience/fujifilm_software", type: "internal" },
      { name: "Fractal Generator", href: "https://github.com/ClarkeNeedles/FractalGenerator", type: "external" },
    ],
  },
  {
    name: "CSS 3",
    icon: "css3",
    projects: [
      { name: "Next.js Portfolio Website", href: "/projects/portfolio_new", type: "internal" },
      { name: "Personal Portfolio Website", href: "/projects/portfolio", type: "internal" },
      { name: "Knowledge Transfer AI", href: "/projects/knowledge_transfer_ai", type: "internal" },
    ],
  },
  {
    name: "Docker",
    icon: "docker",
    projects: [
      { name: "Autonomy Software Developer", href: "/experience/qadt_autonomy", type: "internal" },
      { name: "Autonomous PiCar", href: "/projects/autonomous_picar", type: "internal" },
    ],
  },
  {
    name: "FastAPI",
    icon: "fastapi",
    projects: [
      { name: "Knowledge Transfer AI", href: "/projects/knowledge_transfer_ai", type: "internal" },
    ],
  },
  {
    name: "Git",
    icon: "git",
    projects: [
      { name: "Various projects and experiences", href: "https://github.com/ClarkeNeedles", type: "external" },
    ],
  },
  {
    name: "HTML 5",
    icon: "html5",
    projects: [
      { name: "Next.js Portfolio Website", href: "/projects/portfolio_new", type: "internal" },
      { name: "Personal Portfolio Website", href: "/projects/portfolio", type: "internal" },
      { name: "Knowledge Transfer AI", href: "/projects/knowledge_transfer_ai", type: "internal" },
    ],
  },
  {
    name: "Java",
    icon: "java",
    projects: [
      { name: "Password Manager", href: "https://github.com/ClarkeNeedles/PasswordManager", type: "external" },
    ],
  },
  {
    name: "Javascript",
    icon: "javascript",
    projects: [
      { name: "Next.js Portfolio Website", href: "/projects/portfolio_new", type: "internal" },
      { name: "Personal Portfolio Website", href: "/projects/portfolio", type: "internal" },
      { name: "Knowledge Transfer AI", href: "/projects/knowledge_transfer_ai", type: "internal" },
    ],
  },
  {
    name: "Jenkins",
    icon: "jenkins",
    projects: [
      { name: "SWE Intern", href: "/experience/fujifilm_software", type: "internal" },
      { name: "QA Intern", href: "/experience/fujifilm_QA", type: "internal" },
    ],
  },
  {
    name: "Jira",
    icon: "jira",
    projects: [
      { name: "Firmware Designer", href: "/experience/semtech_firmware", type: "internal" },
      { name: "SWE Intern", href: "/experience/fujifilm_software", type: "internal" },
      { name: "QA Intern", href: "/experience/fujifilm_QA", type: "internal" },
    ],
  },
  {
    name: "Linux",
    icon: "linux",
    projects: [
      { name: "Autonomy Software Developer", href: "/experience/qadt_autonomy", type: "internal" },
      { name: "Autonomous PiCar", href: "/projects/autonomous_picar", type: "internal" },
    ],
  },
  {
    name: "MAVLink",
    icon: "mavlink",
    projects: [
      { name: "Autonomy Software Developer", href: "/experience/qadt_autonomy", type: "internal" },
    ],
  },
  {
    name: "Nav2",
    icon: "nav2",
    projects: [
      { name: "Autonomy Software Developer", href: "/experience/qadt_autonomy", type: "internal" },
    ],
  },
  {
    name: "Next.js",
    icon: "nextjs",
    projects: [
      { name: "Next.js Portfolio Website", href: "/projects/portfolio_new", type: "internal" },
    ],
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    projects: [
      { name: "Grade Tracker App", href: "/projects/grade_tracker_app", type: "internal" },
    ],
  },
  {
    name: "PX4",
    icon: "px4",
    projects: [
      { name: "Autonomy Software Developer", href: "/experience/qadt_autonomy", type: "internal" },
    ],
  },
  {
    name: "Python",
    icon: "python",
    projects: [
      { name: "Machine Learning Project", href: "/projects/machine_learning_proj", type: "internal" },
      { name: "Visualizing Wildfires", href: "https://github.com/ClarkeNeedles/VisualizingWildfires", type: "external" },
      { name: "SketchySkies", href: "https://github.com/ClarkeNeedles/SketchySkies", type: "external" },
    ],
  },
  {
    name: "Qt 6",
    icon: "qt",
    projects: [
      { name: "Grade Tracker App", href: "/projects/grade_tracker_app", type: "internal" },
    ],
  },
  {
    name: "QGroundControl",
    icon: "qgroundcontrol",
    projects: [
      { name: "Autonomy Software Developer", href: "/experience/qadt_autonomy", type: "internal" },
    ],
  },
  {
    name: "Raspberry Pi",
    icon: "raspberrypi",
    projects: [
      { name: "Autonomous PiCar", href: "/projects/autonomous_picar", type: "internal" },
    ],
  },
  {
    name: "React",
    icon: "react",
    projects: [
      { name: "Next.js Portfolio Website", href: "/projects/portfolio_new", type: "internal" },
      { name: "Knowledge Transfer AI", href: "/projects/knowledge_transfer_ai", type: "internal" },
    ],
  },
  {
    name: "ROS2",
    icon: "ros2",
    projects: [
      { name: "Autonomy Software Developer", href: "/experience/qadt_autonomy", type: "internal" },
      { name: "Autonomous PiCar", href: "/projects/autonomous_picar", type: "internal" },
    ],
  },
  {
    name: "SVN",
    icon: "svn",
    projects: [
      { name: "Firmware Designer", href: "/experience/semtech_firmware", type: "internal" },
      { name: "SWE Intern", href: "/experience/fujifilm_software", type: "internal" },
      { name: "QA Intern", href: "/experience/fujifilm_QA", type: "internal" },
    ],
  },
  {
    name: "Typescript",
    icon: "typescript",
    projects: [
      { name: "Next.js Portfolio Website", href: "/projects/portfolio_new", type: "internal" },
    ],
  },
  {
    name: "Verilog",
    icon: "verilog",
    projects: [
      { name: "Verilog CPU", href: "/projects/verilog_cpu", type: "internal" },
    ],
  },
]

export const featuredSkills = skills.slice(0, 6)