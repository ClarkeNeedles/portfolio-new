"use client"

import * as React from "react"
import Link from "next/link"
import { skillsInterface } from "@/config/skills"
import { Icons } from "@/components/common/icons"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const iconMap: Record<string, any> = {
  c: Icons.clanguage,
  csharp: Icons.csharp,
  cpp: Icons.cpp,
  css3: Icons.css3,
  docker: Icons.docker,
  fastapi: Icons.fastapi,
  git: Icons.git,
  html5: Icons.html5,
  java: Icons.java,
  javascript: Icons.javascript,
  jenkins: Icons.jenkins,
  jira: Icons.jira,
  linux: Icons.linux,
  mavlink: Icons.mavlink,
  nav2: Icons.nav2,
  nextjs: Icons.nextjs,
  postgresql: Icons.postgresql,
  px4: Icons.px4,
  python: Icons.python,
  qt: Icons.qt,
  qgroundcontrol: Icons.qgroundcontrol,
  raspberrypi: Icons.raspberryPi,
  react: Icons.react,
  ros2: Icons.ros2,
  svn: Icons.svn,
  typescript: Icons.typescript,
  verilog: Icons.verilog,
}

interface SkillsCardProps {
  skills: skillsInterface[]
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  const [openSkill, setOpenSkill] = React.useState<string | null>(null)

  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, id) => {
        const Icon = iconMap[skill.icon]

        return (
          <div
            key={id}
            className="relative overflow-hidden rounded-lg border bg-background p-2"
          >
            <div className="flex h-[140px] flex-col rounded-md p-6 gap-4">

              {/* HEADER */}
              <div className="flex items-center gap-3">
                {Icon && <Icon size={40} />}
                <h3 className="font-bold">{skill.name}</h3>
              </div>

              {/* DROPDOWN */}
              {skill.projects && skill.projects.length > 0 && (
                <DropdownMenu
                  open={openSkill === skill.name}
                  onOpenChange={(open) => {
                    setOpenSkill(open ? skill.name : null)
                  }}
                >
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-fit flex items-center gap-2 text-xs"
                    >
                      Used in
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="min-w-[200px] bg-background border shadow-lg">
                    {skill.projects.map((project) => {
                      const isExternal = project.type === "external"

                      return (
                        <DropdownMenuItem key={project.name} asChild>
                          {isExternal ? (
                            <a
                              href={project.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full cursor-pointer text-xs"
                            >
                              {project.name}
                            </a>
                          ) : (
                            <Link
                              href={project.href}
                              className="w-full cursor-pointer text-xs"
                            >
                              {project.name}
                            </Link>
                          )}
                        </DropdownMenuItem>
                      )
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}