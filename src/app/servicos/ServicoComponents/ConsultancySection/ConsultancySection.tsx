'use client'

import React from 'react';

const ConsultancySection = () => {
  return (
    <section id="consultoria" className="py-20 px-4 scroll-mt-32">
      <div className="max-w-7xl mx-auto rounded-4xl bg-linear-to-r from-(--royal-blue) to-(--midnight-navy) p-10 md:p-20 text-white relative overflow-hidden shadow-4xl">
        {/* Decorative Circles */}
        <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-(--caitee-green)/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-(--caitee-green) font-bold text-sm uppercase tracking-wider mb-8">
            Estratégia e Inteligência
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Consultoria em TI: <br />
            Seu Braço Tecnológico na UNESP
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mb-12 leading-relaxed">
            Não sabe por onde começar? Nossos consultores e professores orientadores analisam seu negócio para indicar as melhores tecnologias e estratégias de digitalização.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { title: "Diagnóstico", desc: "Análise profunda da sua infraestrutura e processos atuais." },
              { title: "Planejamento", desc: "Roadmap tecnológico focado em crescimento e segurança." },
              { title: "Inovação", desc: "Implementação de novas tendências para te manter à frente." }
            ].map((box, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all">
                <h3 className="text-2xl font-bold mb-4 text-(--caitee-green)">{box.title}</h3>
                <p className="text-white/70 leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>

          <button 
            onClick={() => window.location.href = 'https://api.whatsapp.com/send/?phone=5519995943486'}
            className="mt-16 px-10 py-5 bg-(--caitee-green) hover:bg-(--highlighted-text) text-(--midnight-navy) hover:text-white font-bold text-xl rounded-2xl transition-all shadow-xl active:scale-95"
          >
            Agendar Diagnóstico Gratuito
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConsultancySection;
