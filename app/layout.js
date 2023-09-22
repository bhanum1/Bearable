import "@/app/globals.css"

import { siteConfig } from "@/config/site"
import { inter } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/Footer"


//  Metadata
export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" className="scroll-smooth">
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            inter.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
            <TailwindIndicator />
            <Footer className='sm:hidden'/>
            <mobileFooter className='max-sm:hidden'/>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}