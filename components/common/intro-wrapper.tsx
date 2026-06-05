"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const bootLogs = [
  "[ OK ] Loading kernel modules...",
  "[ OK ] Initializing portfolio...",
  "[ OK ] Mounting projects...",
]

export default function IntroWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  const [phase, setPhase] = useState<
    "boot" | "typing" | "waiting" | "exit" | "done"
  >("boot")

  const [logIndex, setLogIndex] = useState(0)
  const [typed, setTyped] = useState("")
  const [visible, setVisible] = useState(true)

  const fullText = "clarke@portfolio:~$ whoami"

  // --------------------------
  // BOOT SEQUENCE
  // --------------------------
  useEffect(() => {
    setMounted(true)

    const seen = localStorage.getItem("intro_seen")
    if (seen === "true") {
      setPhase("done")
      setVisible(false)
      return
    }

    let logTimer: NodeJS.Timeout

    if (phase === "boot") {
      if (logIndex < bootLogs.length) {
        logTimer = setTimeout(() => {
          setLogIndex((prev) => prev + 1)
        }, 700)
      } else {
        setPhase("typing")
      }
    }

    return () => clearTimeout(logTimer)
  }, [phase, logIndex])

  // --------------------------
  // WHOAMI TYPING ANIMATION
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
  // INPUT HANDLING
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

  const exitIntro = () => {
    setPhase("exit")
    localStorage.setItem("intro_seen", "true")

    setTimeout(() => {
      setVisible(false)
      setPhase("done")
    }, 500)
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
  // SKIP IF DONE
  // --------------------------
  if (!mounted || phase === "done") {
    return <>{children}</>
  }

  return (
    <>
      {children}

      {visible && (
        <div
          onClick={() => phase === "waiting" && exitIntro()}
          className={cn(
            "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background font-mono text-primary",
            "transition-all duration-500 ease-out",
            phase === "exit"
              ? "opacity-0 scale-95 blur-sm pointer-events-none"
              : "opacity-100 scale-100"
          )}
        >
          {/* BOOT LOGS */}
          {phase === "boot" && (
            <div className="text-sm md:text-base space-y-1 mb-6 font-mono">
              {bootLogs.slice(0, logIndex).map((log, i) => (
                <div key={i}>{log}</div>
              ))}
            </div>
          )}

          {/* WHOAMI */}
          {phase !== "boot" && (
            <div className="font-mono text-2xl md:text-4xl">
              <p>
                {typed}
                <span className="cursor">█</span>
              </p>

              {/* hint */}
              {phase === "waiting" && (
                <p className="text-xs text-muted-foreground mt-4">
                  press enter or click anywhere
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  )
}