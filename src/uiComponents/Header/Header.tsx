'use client'; 

import { useEffect, useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Contato', href: '/contato' },
  { name: 'Portfólio', href: '/portfolio' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 1);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {  
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* 1. THE STATIONARY SOCKET (The Hole) */}
      <div className="absolute top-20 left-0 right-0 mx-auto w-[85%] h-20 z-0 pointer-events-none">
        <div 
          className={`
            w-full h-full rounded-3xl bg-black/10 
            transition-opacity duration-500 ease-in-out
            ${isScrolled ? 'opacity-100 shadow-[inset_0_10px_20px_rgba(0,0,0,0.5)]' : 'opacity-0'}
          `}
        ></div>
      </div>

      {/* 2. THE STICKY HEADER WRAPPER */}
      
      <header className="sticky top-20 mx-auto w-[85%] z-30 mt-10 mb-10">
        
        {/* THE SINGLE PANE OF GLASS
          This ONE div handles the background, blur, shadow, and borders for EVERYTHING.
          'overflow-hidden' ensures the mobile menu stays perfectly inside the rounded-3xl corners.
        */}
        <div className={`
          relative w-full transition-all duration-1000 ease-out 
          bg-(--not-white)/70 rounded-3xl overflow-hidden 
          ${
            isScrolled 
            //scrolled 'isScrolled -> true'
            ? '-translate-y-3 -translate-x-3 shadow-[15px_15px_25px_rgba(0,0,0,0.2)] backdrop-blur-xl border border-white' 
            //top screen 'isScrolled -> false'
            : 'translate-y-0 translate-x-0 shadow-none'
          }
          ${isMobileMenuOpen 
            ? `border border-white`
            : ``
          }
        `}>
          
          {/* --- TOP BAR (Fixed Height 20) --- */}
          <div className="flex justify-between items-center h-20 max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Logo Area */}
            <div className="flex-shrink flex items-center max-h-1xl ml-20">
              <Link href="/" className="flex items-center gap">
                <img className="size-20" src="/logo.svg" alt="logo" />
              </Link>
            </div>

            <div className="flex items-center gap-12">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-6 text-lg font-semibold hover:text-[var(--caitee-green)] hover:underline underline-offset-10"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            
              {/* Social Media */}
              <div className=" md:block">
                social media logos
              </div>

              {/* Mobile Hamburger Button */}
              <div className="flex md:hidden items-center">
                  <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      className={`text-[var(--primary-text)] hover:text-[var(--caitee-green)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--caitee-green)] rounded-md p-2`}
                      aria-expanded={isMobileMenuOpen}
                      aria-label="Toggle mobile menu"
                  >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {isMobileMenuOpen ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                          )}
                      </svg>
                  </button>
              </div>  
            </div>
          </div>

          {/* --- MOBILE MENU DROPDOWN --- */}
          <div 
            className={`
                md:hidden transition-all ease-in-out z-30 mx-auto
                ${
                  isMobileMenuOpen 
                  ? 'max-h-[400px] opacity-100 duration-500 border-t border-white/20' 
                  : 'max-h-0 opacity-0 duration-500 delay-200 border-transparent' 
                }
            `}
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
              <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                      block px-3 py-2 rounded-md text-base 
                      text-[var(--primary-text)] 
                      hover:text-[var(--caitee-green)] border 
                      border-transparent hover:border-(--caitee-green) 
                      [transition-property:opacity,transform] 
                      ease-in-out transform text-center z-30
                      shadow-2xl backdrop-blur-xl bg-(--not-white)
                      
                      ${isMobileMenuOpen 
                      ? 'opacity-100 translate-y-0 duration-500 delay-300' 
                      : 'opacity-0 -translate-y-4 duration-200'
                  }
                  `}>
                  {link.name}
              </Link>
              ))}
            </div>
          </div>               
        </div>
      </header>
    </>
  );
}