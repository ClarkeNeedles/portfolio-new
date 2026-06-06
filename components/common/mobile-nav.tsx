import { Press_Start_2P } from "next/font/google"
import Link from "next/link"
import * as React from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  items: any[]
  children?: React.ReactNode
}

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
})

export function useLockBody() {
  React.useLayoutEffect(() => {
    const scrollY = window.scrollY

    // lock scroll
    document.body.style.position = "fixed"
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = "0"
    document.body.style.right = "0"
    document.body.style.width = "100%"

    document.documentElement.style.overflow = "hidden"

    return () => {
      // restore styles
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.left = ""
      document.body.style.right = ""
      document.body.style.width = ""

      document.documentElement.style.overflow = ""

      // restore scroll position
      window.scrollTo(0, scrollY)
    }
  }, [])
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody()

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 top-14 z-50 md:hidden",
        "overflow-auto p-6 pb-32",
        "bg-black/40 backdrop-blur-sm"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-background p-4 text-foreground shadow-lg border border-border">
        <Link href="/" className="flex items-center space-x-2 lowercase">
          <span className={cn(pressStart2P.className, "text-sm")}>
            {siteConfig.authorName}
          </span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline lowercase",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children ? <div className="pt-2">{children}</div> : null}
      </div>
    </div>
  )
}
