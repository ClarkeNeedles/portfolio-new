"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // 1. Tell the browser not to automatically manage scroll positions across route steps
    if (typeof window !== "undefined" && window.history) {
      window.history.scrollRestoration = "manual"
    }

    // 2. Use a double micro-task frame lock to ensure Next.js has completely 
    // swapped, unmounted, and painted the incoming page before we touch the scroll layer.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant", // Snaps directly to top without dragging the screen up
        })
      })
    })
  }, [pathname])

  return null
}
