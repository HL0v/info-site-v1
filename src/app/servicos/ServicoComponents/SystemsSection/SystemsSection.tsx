'use client'

import React from 'react';

const SystemsSection = () => {
  return (
    <section id="sistemas" className="py-20 px-4 scroll-mt-32 bg-(--royal-blue)/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-(--royal-blue)/10 border border-(--royal-blue)/20 text-(--royal-blue) font-bold text-sm uppercase tracking-wider">
              Eficiência e Escala
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-(--primary-text) leading-tight">
              Softwares que <br />
              <span className="text-(--royal-blue)">Organizam seu Negócio</span>
            </h2>
            <p className="text-lg text-(--secondary-text) leading-relaxed">
              Elimine gargalos operacionais com sistemas desenvolvidos sob medida para o seu fluxo de trabalho. Automatizamos o repetitivo para que você foque no que realmente importa.
            </p>
            <ul className="space-y-4">
              {[
                "Dashboards Administrativos",
                "Gestão de Processos e Estoque",
                "Integração com APIs e Bancos de Dados",
                "Segurança e Estabilidade de Dados"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg font-medium text-(--primary-text)">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-(--royal-blue)/20 flex items-center justify-center text-(--royal-blue) text-sm font-bold">✓</span>
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
            <div className="relative p-1 rounded-4xl bg-linear-to-bl from-(--royal-blue)/30 to-white/10 shadow-2xl">
              <div className="rounded-[30px] overflow-hidden bg-(--not-white)/50 backdrop-blur-3xl p-8 border border-white/40">
                <div className="aspect-video bg-(--midnight-navy) rounded-2xl p-6 border border-white/10 flex flex-col gap-4">
                  <div className="flex gap-2">
                    <div className="size-3 rounded-full bg-red-500/50"></div>
                    <div className="size-3 rounded-full bg-yellow-500/50"></div>
                    <div className="size-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="space-y-3 mt-2">
                    <div className="h-2 bg-white/10 rounded-full w-3/4"></div>
                    <div className="h-2 bg-white/10 rounded-full w-1/2"></div>
                    <div className="h-2 bg-(--caitee-green)/40 rounded-full w-5/6"></div>
                    <div className="h-2 bg-white/10 rounded-full w-2/3"></div>
                  </div>
                </div>
                <div className="mt-8 flex justify-between items-center">
                  <div className="space-y-2">
                    <div className="h-4 bg-black/10 rounded-full w-24"></div>
                    <div className="h-2 bg-black/5 rounded-full w-32"></div>
                  </div>
                  <div className="size-12 rounded-xl bg-(--royal-blue) flex items-center justify-center text-white font-bold">
                    %
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemsSection;
