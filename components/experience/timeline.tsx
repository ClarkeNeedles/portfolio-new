"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"

import { AnimatedSection } from "@/components/common/animated-section"
import { Icons } from "@/components/common/icons"
import { Button } from "@/components/ui/button"
import { ExperienceInterface } from "@/config/experience"

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

// Helper function to get duration text
const getDurationText = (
  startDate: Date,
  endDate: Date | "Present"
): string => {
  const startYear = new Date(startDate).getFullYear().toString()
  const startMonth = new Date(startDate).getMonth()
  const endString =
    typeof endDate === "string"
      ? "Present"
      : months[new Date(endDate).getMonth()] +
        " " +
        new Date(endDate).getFullYear().toString()

  return `${months[startMonth]} ${startYear} - ${endString}`
}

interface TimelineProps {
  experiences: ExperienceInterface[]
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  // Sort experiences by date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    return b.startDate.getTime() - a.startDate.getTime()
  })

  return (
    <div className="space-y-4">
      {sortedExperiences.map((experience, index) => (
        <AnimatedSection
          key={experience.id}
          delay={0.1 * (index + 1)}
          direction="up"
        >
          <div className="w-full p-4 sm:p-6 bg-background border border-border rounded-lg transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex items-start gap-4 flex-1 min-w-0">
                {experience.logo && (
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg border-2 border-border overflow-hidden bg-white flex-shrink-0">
                    <Image
                      src={experience.logo}
                      alt={experience.company}
                      fill
                      sizes="(min-width: 640px) 64px, 48px"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {experience.position}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-primary/10 text-primary border border-primary/20 w-fit">
                      {getDurationText(
                        experience.startDate,
                        experience.endDate
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-muted-foreground">
                      {experience.company}
                    </span>
                    {experience.companyUrl && (
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Icons.externalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {experience.location}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {experience.description[0]}
                  </p>
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-1">
                    {experience.skills.slice(0, 2).map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                    {experience.skills.length > 2 && (
                      <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                        +{experience.skills.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="rounded-lg w-full sm:w-auto"
                asChild
              >
                <Link href={`/experience/${experience.id}`}>
                  {"view details"}
                  <Icons.chevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  )
}

export default Timeline
