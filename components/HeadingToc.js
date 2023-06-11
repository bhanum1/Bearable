'use client';

import { useState, useRef, useEffect } from 'react'


export default function HeadingToc({headings}) {
    return (
        <div className="fixed hidden xl:block right-[70px] w-[215px] h-full mt-5">
          <h4 className="text-xl border-b-2 border-black"> Lesson Outline </h4>
          <div className="pl-4">
            {headings.length > 0 ? (
              <ul>
                {headings.map((heading) => (
                  <li key={heading.text} className="hover:text-[#bb434e] hover:underline hover:underline-offset-4 my-1.5">
                    <a href={`#${heading.slug}`}>{heading.text}</a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      );
    };