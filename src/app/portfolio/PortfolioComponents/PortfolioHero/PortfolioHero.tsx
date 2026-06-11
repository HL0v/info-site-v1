'use client'

import React from 'react';

const PortfolioHero = () => {
  return (
    <section className="relative -mt-45 pt-52 pb-20 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-(--caitee-green) rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-(--royal-blue) rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-(--primary-text) mb-6 leading-tight">
          Portfólio <span className="bg-linear-to-r from-(--highlighted-text) to-(--royal-blue) bg-clip-text text-transparent">Digital</span>
        </h1>
        <p className="text-xl md:text-2xl text-(--secondary-text) max-w-3xl mx-auto font-medium leading-relaxed">
          Criando Interfaces Vivas para Marcas e Instituições.
        </p>
      </div>
    </section>
  );
};

export default PortfolioHero;