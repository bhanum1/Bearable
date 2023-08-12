'use client'
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [menuStatus, setMenu] = useState(false)

  const changeMenu = () => {
    setMenu(!menuStatus)
  }

  return (
    <header className="top-0 z-40 w-full bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ThemeToggle />
            <div className='sm:hidden' onClick={changeMenu}>
              <div className={buttonVariants({
                size: 'sm',
                variant: 'ghost'
              })}>
                <Icons.menu className="h-5 w-5" />
              </div>
            </div>
          </nav>
        </div>
      </div>

      
      <div className={
        menuStatus
        ? "absolute left-0 top-0 h-screen w-[65%] border bg-background p-10 duration-500 ease-in sm:hidden"
        : "absolute left-[-100%] top-0 h-screen w-[65%] border bg-background p-10 duration-500 ease-in"
      }>
      <Link href="/" className="mb-3 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className={cn(
          "font-Habibi xs:text-[24px] from-neutral-800 text-[30px] font-extrabold leading-tight tracking-tighter")}>
            {siteConfig.name}
        </span>
      </Link>
      
      {siteConfig.mainNav?.length ? (
        <nav className="flex gap-6">
          {siteConfig.mainNav?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground hover:text-red-600",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
      
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ThemeToggle />
            <div className='sm:hidden' onClick={changeMenu}>
              <div className={buttonVariants({
                size: 'sm',
                variant: 'ghost'
              })}>
                <Icons.menu className="h-5 w-5" />
              </div>
            </div>
          </nav>

      </div>
    </header>
  )
}