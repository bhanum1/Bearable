'use client';

import Link from "next/link";
import Image from "next/image";
import Logo from '../public/bearable-logo.png';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

export default function Navbar() {  
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }

  return (
      <nav className="fixed items-center top-0 w-full h-24 bg-[#F3F1E4] z-50">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
          <Link href='/'>
          <div className="flex items-center">
            <Image 
              src={Logo}
              alt='Logo'
              width='90'
              height='90'>
            </Image>
            <h1 className="text-4xl pl-3 font-Habibi">Bearable</h1>
          </div>
          </Link>
          <div className="hidden sm:flex">
            <ul className="flex gap-16 pr-10">
              <Link href='/'>
                <li className=" text-2xl">Home</li>
              </Link>
              <Link href='/courses'>
                <li className=" text-2xl">Courses</li>
              </Link>
              <Link href='/about'>
                <li className=" text-2xl">About</li>
              </Link>
              <button>
                <BsFillMoonStarsFill />
              </button>
            </ul>
          </div>
          <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
            <AiOutlineMenu size={25}/>
          </div>
        </div>
        <div className={
          menuOpen
          ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-white p-10 ease-in duration-500"
          : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }>
        <div className="flex w-full ite,s-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div>
         <ul className="flex-col py-4">
            <Link href='/'>
              <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">Home</li>
            </Link>
            <Link href='/courses'>
              <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">Courses</li>
            </Link>
            <Link href='/about'>
              <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">About</li>
            </Link>
            <button onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
              <BsFillMoonStarsFill />
            </button>
          </ul>
        </div>
        </div>
      </nav>
    );
};
