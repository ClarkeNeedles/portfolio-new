import Image from "next/image"
import Link from "next/link"

import { Icons } from "@/components/common/icons"
import { Button } from "@/components/ui/button"
import ChipContainer from "@/components/ui/chip-container"
import { ProjectInterface } from "@/config/projects"

interface ProjectCardProps {
  project: ProjectInterface
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative p-6 w-full bg-background border border-border rounded-lg h-full flex flex-col gap-4">
      <h5 className="text-2xl font-bold tracking-tight text-foreground">
        {"$ " + project.companyName}
      </h5>
      <div className="relative w-full h-[200px]">
        <Image
          className="rounded-lg border border-border object-cover"
          src={project.companyLogoImg}
          alt="img"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-col flex-grow gap-3">
        <p className="line-clamp-3 text-muted-foreground lowercase">
          {"> " + project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>
        <Link href={`/projects/${project.id}`} className="mt-auto">
          <Button variant="default" className="mt-2 w-full sm:w-auto">
            {"$ read_more"}
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-4 right-4 p-3 rounded-full bg-background border border-border hidden md:block">
        {project.type === "Personal" ? (
          <Icons.userFill className="h-4 w-4" />
        ) : (
          <Icons.team className="h-4 w-4" />
        )}
      </div>
    </div>
  )
}
