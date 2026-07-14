import { Press_Start_2P } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  items: any[]
  children?: React.ReactNode
  onClose: () => void
}

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
})

export function useLockBody() {
  React.useEffect(() => {
    // Using useEffect instead of useLayoutEffect gives Next.js routing threads 
    // breathing room to prepare the DOM before locking the screen dimensions.
    document.documentElement.classList.add("overflow-hidden");
    document.body.classList.add("overflow-hidden");

    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
}

export function MobileNav({ items, children, onClose }: MobileNavProps) {
  useLockBody()
  const pathname = usePathname()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      e.preventDefault()
      // Manually clear locks for same-page actions since an unmount won't happen
      document.documentElement.classList.remove("overflow-hidden")
      document.body.classList.remove("overflow-hidden")
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    
    // Always call onClose to let the parent unmount this cleanly
    onClose()
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
            scroll={false} // Stops mobile engine from pre-scrolling prior to route swap
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
                scroll={false} // Essential for mobile: blocks coordinate recalculations mid-transition
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
