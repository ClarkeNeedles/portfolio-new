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
        "fixed inset-x-0 bottom-0 top-20 z-50 md:hidden",
        "overflow-y-auto bg-background p-6 border-t border-border/40 shadow-xl"
      )}
    >
      <div className="relative z-20 flex flex-col space-y-6 text-foreground">
        <Link href="/" className="flex items-center space-x-2 lowercase border-b border-border/40 pb-4">
          <span className={cn(pressStart2P.className, "text-xs tracking-tight")}>
            {siteConfig.authorName}
          </span>
        </Link>
        <nav className="flex flex-col space-y-4 text-sm font-medium">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center p-2 text-base hover:text-primary transition-colors lowercase",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        
        {children ? (<div className="pt-4 border-t border-border/40">{children}</div>) : null}
      </div>
    </div>
  )
}
