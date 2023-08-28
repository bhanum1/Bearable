import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav({ items }) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6"/>
        <span className={cn(
          "font-Habibi font-extrabold xs:text-[24px] from-neutral-800 text-[30px] leading-tight tracking-tighter")}>
            {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden sm:flex sm:gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-xl font-medium text-muted-foreground hover:text-red-600",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}