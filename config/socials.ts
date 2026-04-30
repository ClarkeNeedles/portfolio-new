import { Icons } from "@/components/common/icons"

interface SocialInterface {
  name: string
  username: string
  icon: any
  link: string
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@ClarkeNeedles",
    icon: Icons.gitHub,
    link: "https://github.com/ClarkeNeedles",
  },
  {
    name: "LinkedIn",
    username: "Clarke Needles",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/clarke-needles-cwn/",
  },
  {
    name: "Gmail",
    username: "Clarke Needles",
    icon: Icons.gmail,
    link: "mailto:c.w.needles@gmail.com",
  },
]
