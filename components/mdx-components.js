import * as React from "react"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import Link from 'next/link'

import TitleBar from "./lesson-title-bar"

import { cn } from "@/lib/utils"


const components = {
  h1: ({ className, ...props }) => (
      <h1
        className={cn(
          "font-Poppins mt-2 scroll-m-20 text-4xl font-bold tracking-tight before:content-none text-title",
          className,
        )}
        {...props}
      />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "font-Poppins border-b-2 border-gray-700 mt-10 scroll-m-20 pb-1 text-3xl font-semibold tracking-tight first:mt-0 text-title border-title",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "font-Poppins mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-title",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn(
        "font-Poppins mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-title",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={cn(
        "font-Poppins mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-title",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={cn(
        "font-Poppins mt-8 scroll-m-20 text-base font-semibold tracking-tight text-title",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, href, ...props }) => {
    if (href.startsWith("http") || href.includes('fn')) {
      return (
        <a
          className={"font-Poppins font-medium underline underline-offset-4 text-blue-500"}
          href={href}
          target="_blank"
          rel="noopener"
          {...props}
        />
      );
    }
    return (
      <a
        href={href}
        className={cn(`font-Poppins before:content-['#'] before:absolute before:-ml-[1em] before:text-opacity-0 before:text-white hover:before:text-[#bb434e]/100 transition-opacity duration-300 pl-[1em] -ml-[1em]`)}
        {...props}
      />
    );
  },
  p: ({ className, ...props }) => (
    <p
      className={cn("font-Poppins leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("font-Poppins my-2 ml-2 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn("font-Poppins my-2 ml-2 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("font-Poppins mx-10 mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "font-Poppins mt-6 border-l-2 border-gray-700 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("font-Poppins rounded-md border", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="font-Poppins my-4 md:my-8 border-gray-700 border-[1.5px]" {...props} />,
  table: ({ className, ...props }) => (
    <div className="font-Poppins my-6 w-full overflow-y-auto">
      <table className={cn("font-Poppins w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }) => (
    <tr
      className={cn("font-Poppins m-0 border-gray-700 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "font-Poppins border border-gray-700 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        "font-Poppins border border-gray-700 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "font-Poppins mb-4 mt-6 overflow-x-auto rounded-lg border py-4 px-[1rem]",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "font-Poppins rounded px-[0.2rem] font-mono text-sm text-[#be185d] bg-inherit" ,
        className
      )}
      {...props}
    />
  ),
  strong: ({ className, ...props }) => (
    <strong
      className={cn(
        "font-Poppins font-bold" ,
        className
      )}
      {...props}
    />
  ),
  Image,
  TitleBar,
}

export function Mdx({ code }) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
}