import IntroWrapper from "@/components/common/intro-wrapper"
import { MainNav } from "@/components/common/main-nav"
import { ModeToggle } from "@/components/common/mode-toggle"
import { SiteFooter } from "@/components/common/site-footer"
import { routesConfig } from "@/config/routes"
import { ScrollToTop } from "@/components/common/scroll-to-top";

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <IntroWrapper>
      <div className="flex min-h-screen flex-col">
        <header className="fixed top-0 left-0 right-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
          <div className="container flex h-20 items-center justify-between py-6">
            <MainNav items={routesConfig.mainNav}></MainNav>
            <nav className="flex items-center gap-5">
              <ModeToggle />
            </nav>
          </div>
        </header>
        <main className="container flex-1 pt-20">{children}</main>
        <SiteFooter />
      </div>
    </IntroWrapper>
  )
}
