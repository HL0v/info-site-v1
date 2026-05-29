'use client'; // This tells Next.js this component uses browser features (like state)

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';


export default function Header() {
  // State to control the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(true);
  }, [])

  // Centralizing the links avoids repetition and fixes typos in one place
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
    { name: 'Portfólio', href: '/portfolio' }, // Typo permanently fixed here
  ];

  return (
    <header className={`
    sticky mx-auto top-5 z-50 w-95/100 bg-white/30 
    backdrop-blur-md border-b border-gray-200 rounded-[5]
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* 1. Logo Area */}
          <div className="flex-shrink-0 flex items-center max-h-1xl">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              {/* Info<span className="text-blue-600">Jr</span> */}
              <img
                
                className="size-20" 
                src="/logo.svg" alt="logo"></img>
            </Link>
          </div>

          {/* 2. Desktop Navigation (Hidden on mobile) */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* 3. CTA Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link
              href="/orcamento"
              className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-all font-semibold shadow-sm"
            >
              Solicite um Orçamento
            </Link>
          </div>

          {/* 4. Mobile Menu Button (Hamburger) */}
          <div className="flex md:hidden items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className= {
                `text-gray-700 hover:text-blue-600 
                focus:outline-none focus-visible:ring-2 
                focus-visible:ring-blue-600 rounded-md p-2
                `}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
              
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  // X icon
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Hamburger icon
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Menu Dropdown (Rendered only if state is true) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu when clicked
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/orcamento"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center mt-4 bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 font-semibold"
            >
              Solicite um Orçamento
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}