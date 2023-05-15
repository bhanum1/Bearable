'use client';

import Link from "next/link";
import Image from "next/image";
import '../app/globals.css';

export default function Navbar() {  
    return (
      <header>
        <nav className={`nav`}>
          <div className="logo">
          <Link href={"/"}>
            {/* images in the public folder only need the / at the start that's pre cool */}
            <Image 
              src="/bearable-logo copy.png" 
              width="50"
              height="50"
              alt="logo"
            />
            <h1>Bearable</h1>
          </Link>
          </div>
          <div className={`nav_menu-list`}>
            <Link href="/"> Home </Link>
            <Link href="/about"> About </Link>
            <Link href="/courses"> Courses </Link>
          </div>
        </nav>
      </header>
    );
};

