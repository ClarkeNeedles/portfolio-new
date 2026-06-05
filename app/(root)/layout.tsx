import IntroWrapper from "@/components/common/intro-wrapper"
import { MainNav } from "@/components/common/main-nav"
import { ModeToggle } from "@/components/common/mode-toggle"
import { SiteFooter } from "@/components/common/site-footer"
import { routesConfig } from "@/config/routes"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <IntroWrapper>
      <div className="flex min-h-screen flex-col">
        <header className="container z-50 bg-background">
          <div className="flex h-20 items-center justify-between py-6">
            <MainNav items={routesConfig.mainNav}></MainNav>
            <nav className="flex items-center gap-5">
              <ModeToggle />
            </nav>
          </div>
        </header>
        <main className="container flex-1">{children}</main>
        <SiteFooter />
      </div>
    </IntroWrapper>
  )
}
