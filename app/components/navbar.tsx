import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center relative w-[180px] h-[50px]">
            <Image
              src="/IEDC-SJCET.github.io/images/logo.png"
              alt="Boot Camp"
              fill
              className="object-contain brightness-200 filter"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/why-iedc" className="text-white hover:text-gray-300 text-sm font-medium">
              WHY IEDC
            </Link>
            <Link href="/events" className="text-white hover:text-gray-300 text-sm font-medium">
              EVENTS
            </Link>
            <Link href="/summit" className="text-white hover:text-gray-300 text-sm font-medium">
              SUMMIT
            </Link>
            <Link href="/execom" className="text-white hover:text-gray-300 text-sm font-medium">
              EXECOM
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 text-sm font-medium">
              ABOUT US
            </Link>
            <Link 
              href="/login" 
              className="text-white hover:text-gray-300 text-sm font-medium"
            >
              LOGIN
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
