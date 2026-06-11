
'use client'

import React from 'react';

const services = [
  {
    title: "Sites de Alta Conversão",
    description: "Transforme sua presença digital em uma máquina de vendas. Desenvolvemos sites institucionais e landing pages com design premium, focados em experiência do usuário e otimizados para converter visitantes em clientes reais.",
    anchor: "#sites",
    icon: (
      <svg className="w-12 h-12 text-(--highlighted-text)" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    title: "Sistemas Web Sob Medida",
    description: "Automatize processos e ganhe escala com softwares desenvolvidos exclusivamente para o seu negócio. De plataformas complexas a dashboards inteligentes, criamos sistemas robustos que resolvem problemas reais e otimizam sua operação.",
    anchor: "#sistemas",
    icon: (
      <svg className="w-12 h-12 text-(--royal-blue)" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  }
];

const ServiceCards = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-(--primary-text) mb-4">
          Soluções Digitais que <span className="bg-linear-to-r from-(--highlighted-text) to-(--royal-blue) bg-clip-text text-transparent">Impulsionam Negócios</span>
        </h2>
        <p className="text-xl text-(--secondary-text) max-w-2xl mx-auto">
          Unimos a excelência técnica da UNESP Rio Claro com foco total em resultados comerciais.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`
              group relative p-10 rounded-4xl bg-white/10 backdrop-blur-2xl
              border border-white/30 shadow-2xl transition-all duration-300
              hover:bg-white/20 hover:scale-[1.05]
              flex flex-col justify-between
            `}
          >
            <div>
              <div className="mb-6 p-4 rounded-2xl bg-white/40 w-fit shadow-2xl ">
                {service.icon}
              </div>
              <h3 className="text-3xl font-bold text-(--primary-text) mb-4">
                {service.title}
              </h3>
              <p className="text-lg text-(--secondary-text) leading-relaxed mb-8">
                {service.description}
              </p>
            </div>

            <button 
              onClick={() => window.location.href = `/servicos${service.anchor}`}
              className={`
            
            mt-6 w-full rounded-xl text-xl
            bg-(--caitee-green)/50 py-3 font-semibold 
            border border-transparent

            /* --- TRANSITION RULES --- */
            transition-all transition-all duration-150
            
            
            hover:bg-(--highlighted-text)/80
            hover:text-(--not-white)
            
            /* --- SUCCESS RULES --- */
            active:scale-90
            `}
            >
              Saiba Mais
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
