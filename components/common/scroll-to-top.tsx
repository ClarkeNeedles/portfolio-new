"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // If on a mobile or tablet viewport, exit immediately 
    // and let the mobile device handle scrolling naturally.
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return
    }

    // Desktop-only scroll-to-top behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    })
  }, [pathname])

  return null
}
