import { Press_Start_2P } from "next/font/google"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
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
  const pathname = usePathname()
  const router = useRouter()

  // Custom click handler to force a scroll-to-top and layout refresh on identical paths
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      e.preventDefault()
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
      router.refresh()
    }
  }

  return (
    <div
      className={cn(
        "fixed top-20 left-0 right-0 z-50 md:hidden",
        "h-[calc(100vh-5rem)] w-full",
        "overflow-y-auto bg-background p-6 pb-12 border-t border-border/40 shadow-xl"
      )}
    >
      <div className="relative z-20 flex flex-col h-full text-foreground justify-between">
        <div className="space-y-8">
          <Link 
            href="/" 
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center space-x-2 lowercase border-b border-border/40 pb-4"
          >
            <span className={cn(pressStart2P.className, "text-xs tracking-tight")}>
              {siteConfig.authorName}
            </span>
          </Link>
          
          <nav className="flex flex-col space-y-6 text-base font-medium">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                onClick={(e) => !item.disabled && handleNavClick(e, item.href)}
                className={cn(
                  "flex w-full items-center py-1 text-lg hover:text-primary transition-colors lowercase",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        
        {children ? (<div className="pt-6 border-t border-border/40 mt-auto">{children}</div>) : null}
      </div>
    </div>
  )
}
