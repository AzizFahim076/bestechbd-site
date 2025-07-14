'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-blue-900" style={{ fontFamily: "Pacifico, serif" }}>
              Bestech Group
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer whitespace-nowrap">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer whitespace-nowrap">
              About Us
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer whitespace-nowrap">
              Projects
            </Link>
            <Link href="/careers" className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer whitespace-nowrap">
              Careers
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer whitespace-nowrap">
              Gallery
            </Link>
            <Link href="/brochures" className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer whitespace-nowrap">
              Brochures
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer whitespace-nowrap">
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer">
                About Us
              </Link>
              <Link href="/projects" className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer">
                Projects
              </Link>
              <Link href="/careers" className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer">
                Careers
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer">
                Gallery
              </Link>
              <Link href="/brochures" className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer">
                Brochures
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}