'use client';

// I copied this from https://codewithmarish.com/post/how-to-create-responsive-navbar-in-next-js for use to reference
// this isn't complete and would need to be adapted but its what we wanna do with the collapsable navigation bar

import Link from "next/link";
import Image from "next/image";
import NavItem from "./NavItem";
import React, { useState } from 'react'
import '../app/globals.css';

const menu_list = [
    {text: "Home", href: "/"}, 
    {text: "About", href: "/about"},
    {text: "Courses", href: "/courses"} // in future make this a drop down menu ig
]
export default function Navbar() {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);
  
    return (
      <header>
        <nav className={`nav`}>
          <Link href={"/"}>
              <h1 className="logo">Bearable</h1>
          </Link>
          <div
            onClick={() => setNavActive(!navActive)}
            className={`nav_menu-bar`}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${navActive ? "active" : ""} nav_menu-list`}>
            {menu_list.map((menu, idx) => (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
              >
                <NavItem active={activeIdx === idx} {...menu} />
              </div>
            ))}
          </div>
        </nav>
      </header>
    );
};
