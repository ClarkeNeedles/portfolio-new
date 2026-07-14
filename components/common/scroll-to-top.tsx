"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // requestAnimationFrame waits for Next.js to swap the components 
    // before instantly snapping the screen to the top layer.
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      })
    })
  }, [pathname])

  return null
}