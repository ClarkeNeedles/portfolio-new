import {
  AlertTriangle,
  ArrowRight,
  BookMarked,
  Bot,
  Building,
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cpu,
  CreditCard,
  File,
  FileText,
  GitBranch,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  Menu,
  Moon,
  MoreVertical,
  Phone,
  Pizza,
  Plus,
  Satellite,
  Settings,
  SunMedium,
  Trash,
  User,
  Users,
  X,
} from "lucide-react"
import { AiFillStar } from "react-icons/ai"
import { BiLaugh, BiSolidUser } from "react-icons/bi"
import { BsInfoCircle, BsQuestionCircle } from "react-icons/bs"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import {
  HiOutlineExternalLink,
  HiOutlineLink,
} from "react-icons/hi"
import { IoIosGitBranch } from "react-icons/io"
import {
  SiCss,
  SiGmail,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiDocker,
  SiGit,
  SiJenkins,
  SiFastapi,
  SiJira,
  SiCplusplus,
  SiC,
  SiLinux,
  SiRaspberrypi,
  SiQt,
} from "react-icons/si"
import { 
  DiJava,
} from "react-icons/di"
import { TbBrandCSharp } from "react-icons/tb";

export const Icons = {
  contact: Phone,
  gitRepoIcon: BookMarked,
  gitOrgBuilding: Building,
  gitBranch: IoIosGitBranch,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  team: Users,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  menu: Menu,
  chevronDown: ChevronDown,
  laughEmoji: BiLaugh,
  check: Check,
  calendar: Calendar,
  clock: Clock,
  infoMark: BsInfoCircle,
  questionMark: BsQuestionCircle,
  link: HiOutlineLink,
  externalLink: HiOutlineExternalLink,
  star: AiFillStar,
  css3: SiCss,
  html5: SiHtml5,
  javascript: SiJavascript,
  java: DiJava,
  python: SiPython,
  clanguage: SiC,
  cpp: SiCplusplus,
  csharp: TbBrandCSharp,
  docker: SiDocker,
  git: SiGit,
  jenkins: SiJenkins,
  fastapi: SiFastapi,
  jira: SiJira,
  linux: SiLinux,
  raspberryPi: SiRaspberrypi,
  svn: GitBranch,
  qt: SiQt,
  ros2: Bot,
  px4: Satellite,
  mavlink: Satellite,
  gazebo: Bot,
  qgroundcontrol: Satellite,
  nav2: Bot,
  verilog: Cpu,
  postgresql: SiPostgresql,
  nextjs: SiNextdotjs,
  react: SiReact,
  tailwindcss: SiTailwindcss,
  typescript: SiTypescript,
  gmail: SiGmail,
  linkedin: FaLinkedin,
  gitHub: FaGithub,
  userFill: BiSolidUser,
  successAnimated: ({ ...props }: LucideProps) => (
    <div className="svg-container">
      <svg
        className="ft-green-tick"
        xmlns="http://www.w3.org/2000/svg"
        height="5rem"
        width="5rem"
        viewBox="0 0 48 48"
        aria-hidden="true"
        {...props}
      >
        <circle className="circle" cx="24" cy="24" r="22" />
        <path
          className="tick"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M14 27l5.917 4.917L34 17"
        />
      </svg>
    </div>
  ),
}
