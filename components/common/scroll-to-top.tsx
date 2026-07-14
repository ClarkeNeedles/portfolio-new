"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // A setTimeout push makes this execute at the end of the event loop macro-task queue,
    // guaranteeing that Next.js completes the component unmount/mount swap FIRST.
    const timer = setTimeout(() => {
      // Direct hardware scroll override
      window.scrollTo(0, 0)
      if (document.body) document.body.scrollTop = 0
      if (document.documentElement) document.documentElement.scrollTop = 0
    }, 0)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
