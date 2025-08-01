import Link from 'next/link';
import React from 'react';

interface NavbarProps {
  colour: string;
}

const Navbar: React.FC<NavbarProps> = ({ colour }) => {
  return (
    <nav className="top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex justify-between items-center h-6 px-6 md:px-20 pt-5">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="h-50 w-auto pt-25"
        />
        <div className={`flex items-center gap-4 ${colour} text-xl font-medium pt-20`}>
          <Link
            href="/"
            className="px-4 py-1 rounded-full hover:bg-white hover:text-black hover:outline hover:outline-1 hover:outline-black transition duration-200"
          >
            HOME
          </Link>
          <Link
            href="/program"
            className="px-4 py-1 rounded-full hover:bg-white hover:text-black hover:outline hover:outline-1 hover:outline-black transition duration-200"
          >
            PROGRAM
          </Link>
          <Link
            href="/galeri"
            className="px-4 py-1 rounded-full hover:bg-white hover:text-black hover:outline hover:outline-1 hover:outline-black transition duration-200"
          >
            GALERI
          </Link>
          <Link
            href="/kontak"
            className="px-4 py-1 rounded-full hover:bg-white hover:text-black hover:outline hover:outline-1 hover:outline-black transition duration-200"
          >
            KONTAK
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
