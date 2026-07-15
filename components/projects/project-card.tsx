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
      <div className="relative w-full h-[200px]">
        <Image
          className="rounded-lg border border-border object-cover"
          src={project.companyLogoImg}
          alt={`Clarke Needles Engineering Project - ${project.companyName} built with ${project.techStack.slice(0, 3).join(", ")}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <h5 className="text-2xl font-bold tracking-tight text-foreground">
        {project.companyName}
      </h5>
      <div className="flex flex-col flex-grow gap-3">
        <p className="line-clamp-3 text-muted-foreground lowercase">
          {project.shortDescription}
        </p>
        <div className="mt-3 sm:mt-4 flex flex-wrap gap-1">
            {project.category.slice(0, 2).map((category, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground lowercase"
              >
                {category}
              </span>
            ))}
            {project.category.length > 2 && (
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                +{project.category.length - 2} more
              </span>
            )}
          </div>
        <Link href={`/projects/${project.id}`} className="mt-auto">
          <Button variant="default" className="mt-2 w-full sm:w-auto">
            {"read more"}
            <Icons.chevronRight className="ml-2 h-4 w-4" />
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
