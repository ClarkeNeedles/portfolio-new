"use client"

import { motion } from "framer-motion"
import { Press_Start_2P } from "next/font/google"
import Link from "next/link"
import { usePathname, useSelectedLayoutSegment, useRouter } from "next/navigation"
import * as React from "react"

import { Icons } from "@/components/common/icons"
import { MobileNav } from "@/components/common/mobile-nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

interface MainNavProps {
  items?: any[]
  children?: React.ReactNode
}

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
})

// Animation variants for the navigation items
const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)
  const pathname = usePathname()
  const router = useRouter()

  React.useEffect(() => {
    setShowMobileMenu(false)
  }, [pathname])

  // Custom click handler to force a scroll-to-top and layout refresh on identical paths
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      e.preventDefault()
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
      router.refresh()
      setShowMobileMenu(false)
    }
  }

  return (
    <div className="flex gap-6 md:gap-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="hidden items-center space-x-2 md:flex lowercase"
        >
          <span className={cn(pressStart2P.className, "text-sm")}>
            {siteConfig.authorName}
          </span>
        </Link>
      </motion.div>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex items-center">
          {items?.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.disabled ? "#" : item.href}
                onClick={(e) => !item.disabled && handleNavClick(e, item.href)}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm lowercase",
                  item.href.startsWith(`/${segment}`)
                    ? "text-foreground"
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </nav>
      ) : null}
      <motion.button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        <span className="font-bold">Menu</span>
      </motion.button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  )
}
