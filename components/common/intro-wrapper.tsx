"use client"

import { useEffect, useState } from "react"

const bootLogs = [
  "[ OK ] Loading kernel modules...",
  "[ OK ] Initializing portfolio...",
  "[ OK ] Mounting projects...",
  "[ OK ] System ready",
]

export default function IntroWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  const [phase, setPhase] = useState<
    "boot" | "typing" | "waiting" | "done"
  >("boot")

  const [logIndex, setLogIndex] = useState(0)
  const [typed, setTyped] = useState("")

  const fullText = "clarke@portfolio:~$ whoami"

  // --------------------------
  // BOOT SEQUENCE
  // --------------------------
  useEffect(() => {
    setMounted(true)

    const seen = localStorage.getItem("intro_seen")
    if (seen === "true") {
      setPhase("done")
      return
    }

    let timer: NodeJS.Timeout

    if (phase === "boot") {
      if (logIndex < bootLogs.length) {
        timer = setTimeout(() => {
          setLogIndex((p) => p + 1)
        }, 700)
      } else {
        timer = setTimeout(() => {
          setPhase("typing")
        }, 900)
      }
    }

    return () => clearTimeout(timer)
  }, [phase, logIndex])

  // --------------------------
  // TYPING
  // --------------------------
  useEffect(() => {
    if (phase !== "typing") return

    let i = 0

    const interval = setInterval(() => {
      setTyped(fullText.slice(0, i))
      i++

      if (i > fullText.length) {
        clearInterval(interval)
        setPhase("waiting")
      }
    }, 60)

    return () => clearInterval(interval)
  }, [phase])

  // --------------------------
  // INPUT
  // --------------------------
  useEffect(() => {
    if (phase !== "waiting") return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        exitIntro()
      }
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [phase])

  // --------------------------
  // EXIT
  // --------------------------
  const exitIntro = () => {
    localStorage.setItem("intro_seen", "true")
    setPhase("done")
  }

  // --------------------------
  // SCROLL LOCK
  // --------------------------
  useEffect(() => {
    document.body.style.overflow =
      phase === "done" ? "auto" : "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [phase])

  // --------------------------
  // SKIP
  // --------------------------
  if (!mounted || phase === "done") {
    return <>{children}</>
  }

  return (
    <>
      {children}

      {/* OVERLAY */}
      <div
        onClick={() => phase === "waiting" && exitIntro()}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background font-mono text-primary"
      >
        {/* BOOT LOGS */}
        {phase === "boot" && (
          <div className="text-sm md:text-base space-y-1 mb-6">
            {bootLogs.slice(0, logIndex).map((log, i) => (
              <div key={i}>{log}</div>
            ))}
          </div>
        )}

        {/* WHOAMI */}
        {phase !== "boot" && (
          <div className="text-2xl md:text-4xl">
            <p>
              {typed}
              <span className="cursor">█</span>
            </p>

            {phase === "waiting" && (
              <p className="text-xs text-muted-foreground mt-4">
                press enter or click anywhere
              </p>
            )}
          </div>
        )}
      </div>
    </>
  )
}