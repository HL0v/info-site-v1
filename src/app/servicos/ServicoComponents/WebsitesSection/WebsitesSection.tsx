'use client'

import React from 'react';

const WebsitesSection = () => {
  return (
    <section id="sites" className="py-20 px-4 scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-(--caitee-green)/10 border border-(--caitee-green)/20 text-(--caitee-green) font-bold text-sm uppercase tracking-wider">
              Presença Digital Premium
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-(--primary-text) leading-tight">
              Sites que Convertem <br />
              <span className="text-(--caitee-green)">Visitantes em Clientes</span>
            </h2>
            <p className="text-lg text-(--secondary-text) leading-relaxed">
              Não criamos apenas "sites bonitos". Desenvolvemos ferramentas estratégicas de vendas. Cada pixel é planejado para guiar o seu usuário e fortalecer sua marca.
            </p>
            <ul className="space-y-4">
              {[
                "Landing Pages de Alta Conversão",
                "Sites Institucionais Modernos",
                "Design Responsivo e Ultra-rápido",
                "Otimização para Google (SEO)"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg font-medium text-(--primary-text)">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-(--caitee-green)/20 flex items-center justify-center text-(--caitee-green) text-sm font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <button className={`
            
            mt-6 w-full rounded-xl text-xl
            bg-(--caitee-green)/50 py-3 font-semibold 
            border border-transparent

            /* --- TRANSITION RULES --- */
            transition-all transition-all duration-150
            
            
            hover:bg-(--highlighted-text)/80
            hover:text-(--not-white)
            
            /* --- SUCCESS RULES --- */
            active:scale-90 active:bg-(--highlighted-text)
            active:text-white
            `}
            onClick={() => {window.open("https://api.whatsapp.com/send/?phone=5519995943486&text&type=phone_number&app_absent=0")}}
            >
            Entre em contato
          </button>
          </div>

          {/* Card Side (Glassmorphism) */}
          <div className="w-full lg:w-1/2">
            <div className="relative p-1 rounded-4xl bg-linear-to-br from-white/40 to-white/10 shadow-2xl">
              <div className="rounded-[30px] overflow-hidden bg-(--not-white)/50 backdrop-blur-3xl p-8 border border-white/40">
                <div className="aspect-video bg-linear-to-tr from-(--royal-blue)/20 to-(--caitee-green)/20 rounded-2xl flex items-center justify-center border border-white/20">
                   <svg className="w-20 h-20 text-(--royal-blue)/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="h-4 bg-white/40 rounded-full w-3/4"></div>
                  <div className="h-4 bg-white/40 rounded-full w-1/2 ml-auto"></div>
                  <div className="h-4 bg-white/40 rounded-full w-full col-span-2"></div>
                  <div className="h-4 bg-white/40 rounded-full w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsitesSection;
