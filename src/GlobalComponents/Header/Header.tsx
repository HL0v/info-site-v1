'use client'; 

import { useEffect, useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Sobre', href: '/#sobre' },
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
      {/* 2. THE STICKY HEADER WRAPPER */}
      <header className=" top-2 top-20 mx-auto w-[80%] md:w-[80%] z-30 mt-10 lg:mt-10 mb-10">
        
        {/* THE SINGLE PANE OF GLASS
          This ONE div handles the background, blur, shadow, and borders for EVERYTHING.
          'overflow-hidden' ensures the mobile menu stays perfectly inside the rounded-3xl corners.
        */}
        <div className={`
          relative w-full transition-all duration-1000 ease-out 
           rounded-3xl overflow-hidden 
           backdrop-blur-xl border border-white bg-(--not-white)/70
          
          ${isMobileMenuOpen 
            ? `border border-white`
            : `border border-transparent`
          }
        `}>
          
          {/* --- TOP BAR --- */}
          <div className="flex justify-between items-center h-15 h-20 w-full px-4 sm:px-6 lg:px-8">
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center ">
              <Link href="/" className="flex items-center transition-transform hover:scale-105 active:scale-95">
                <img className="h-8 w-auto md:h-10" src="/logo.svg" alt="logo" />
              </Link>
            </div>

            <div className="flex items-center gap-4 md:gap-12">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`
                      px-4 py-2 text-lg 
                      font-semibold rounded-2xl
                      transition-all duration-200

                      /* --- HOVER RULES --- */
                      hover:text-[var(--caitee-green)] hover:bg-white/20
                      hover:underline hover: underline-offset-10

                      /* --- SUCCES STATE --- */
                      active:scale-90 active:text-(--highlighted-text)
                      
                      `}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            
              {/* Social Media */}
              <div className="flex items-center gap-3">
                <Link 
                  href="https://www.instagram.com/infojr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-2 rounded-xl hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] transition-all duration-300 active:scale-90"
                >
                  <svg className="size-6 text-(--primary-text) group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link 
                  href="https://api.whatsapp.com/send/?phone=5519995943486&text&type=phone_number&app_absent=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl hover:bg-(--caitee-green)/20 transition-all active:scale-90"
                >
                  <svg className="size-6 text-(--primary-text) hover:text-(--highlighted-text)" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.623 1.431h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </Link>
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
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
              <Link
                  key={link.name}
                  href={link.href} replace scroll={true}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block px-3 py-2 rounded-md text-base 
                    text-[var(--primary-text)] text-center z-30
                    
                    /* --- THE TILE EFFECT --- */
                    shadow-xl backdrop-blur-2xl bg-(--not-white)/80
                    border border-white/40

                    /* --- ANIMATION RULES --- */
                    [transition-property:opacity,transform]
                    ease-in-out transform

                    /* --- HOVER RULES --- */
                    hover:text-[var(--caitee-green)] hover:border-(--caitee-green)
                    hover:bg-white/80 hover:shadow-xl
                    
                    /* --- SUCCES STATE --- */
                    active:scale-90 active:bg-(--highlighted-text)

                    ${isMobileMenuOpen 
                    ? 'opacity-100 translate-y-0 duration-500 delay-300 ' 
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