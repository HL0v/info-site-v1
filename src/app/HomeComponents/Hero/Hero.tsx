'use client';
import { useState, useEffect } from "react";
import PipesCanvas from "./PipesCanvas";


const flashpoints = [
  {name: "Sites"},
  {name: "Sistemas"},

];

const contentData = [
  {
    title: "sites",
    lines: [
      
      "Sua empresa merece um site de alto impacto.",
      "Desenvolvemos soluções modernas, rápidas e focadas em resultados.",
      "Transforme sua presença digital e conecte-se com mais clientes agora mesmo."
    ],
  },
  {
    title: "sistemas",
    lines: [
      "Sua operação precisa de um sistema sob medida.",
      "Criamos plataformas robustas, escaláveis e focadas em eficiência.",
      "Otimize seus processos e eleve a gestão do seu negócio agora mesmo."
    ],
  }
];



export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    // We wrap everything in a single relative section.
    // min-h-[800px] ensures the section is at least as tall as your original design.
    <section className="relative -mt-45 pt-40 w-full overflow-hidden flex items-center bg-(--caitee-green)/20">
      
      {/* 1. THE FIXED BACKGROUND & OVERLAY (z-0 ensures it stays in the back) */}
      <div className="absolute inset-0 z-0">
        
        
        <PipesCanvas />
        
        {/* The Solid Color Overlay: This div sits directly on top of the image. 
            I used your royal-blue variable with 80% opacity (/80). 
            Adjust the opacity number to make the image more or less visible! */}
        <div className="absolute inset-0"></div>
        
      </div>

      {/* 2. YOUR HERO CONTENT (z-10 ensures it sits on top of the background) */}
      <div className={`
      flex flex-col items-center relative mx-auto 
      xl:flex-row xl:justify-between xl:items-start
      gap-10 z-10 my-20
      px-4 md:px-20
      `}>
  
        {/* The Glass Container */}
        <div className={`
          w-full xl:w-1/2
          bg-[var(--not-white)]/70 backdrop-blur-xl
          shadow-3xl rounded-3xl border border-white
          p-6 md:p-10 
        `}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            Transformações <br className="hidden sm:block" /> software<br />
            <span className={`
            bg-linear-to-r from-(--highlighted-text) 
            to-(--royal-blue) 
            bg-clip-text text-transparent
            `} >On demand.</span>
          </h1>
          
          <button className={`
            mt-6 md:mt-8 bg-[var(--not-white)]/70
            px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-semibold 
            flex items-center gap-2
            shadow-2xl border border-white
            text-sm md:text-base

            /* --- ANIMATION RULES --- */
            transition-all duration-300

            /* --- HOVER RULES --- */
            hover:bg-[var(--caitee-green)] hover:scale-105
            hover:border-[var(--caitee-green)] hover:text-white

            /* --- SUCCESS RULES --- */
            active:scale-90 active:bg-[var(--highlighted-text)]
            active:border active:border-[var(--highlighted-text)]
          `}
          onClick={() => {window.open("https://api.whatsapp.com/send/?phone=5519995943486&text&type=phone_number&app_absent=0")}}
          >
            Fale com um expert <span className="text-xl">→</span>
          </button>
        </div>
      {/* second The Glass Container */}
        <div className={`
          w-full xl:w-2/5
          bg-[var(--not-white)]/70 backdrop-blur-xl
          shadow-3xl rounded-3xl border border-white
          p-6 md:p-10
        `}>
          <h1 className={`
          text-2xl md:text-3xl font-bold relative inline-block pb-2
          `}>
            Construção de{' '}
            <span className="relative inline-block overflow-hidden align-bottom">
              {/* Hidden spacer to maintain width */}
              <span className="invisible select-none">sistemas</span>
              
              {/* Outgoing Word */}
              <span 
                key={`out-${activeIndex}`} 
                className="absolute left-0 top-0 text-[var(--caitee-green)] animate-knock-out"
              >
                {contentData[activeIndex === 0 ? 1 : 0].title}
              </span>

              {/* Incoming Word */}
              <span 
                key={`in-${activeIndex}`} 
                className="absolute left-0 top-0 text-[var(--caitee-green)] animate-knock-in"
              >
                {contentData[activeIndex].title}
              </span>
            </span>

            {/* Animated Underline */}
            <span 
              key={activeIndex} 
              className="absolute left-0 bottom-0 h-1 bg-[var(--caitee-green)] animate-expand"
            ></span>
          </h1>

          <div className={`
            my-4 md:my-5 text-base md:text-xl grid [grid-template-areas:'stack']
            `}>
            {/* Outgoing lines */}
            <div 
              key={`out-text-${activeIndex}`} 
              className="[grid-area:stack] animate-fade-out-right"
            >
              {contentData[activeIndex === 0 ? 1 : 0].lines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>

            {/* Incoming lines */}
            <div 
              key={`in-text-${activeIndex}`} 
              className="[grid-area:stack] animate-fade-in-left"
            >
              {contentData[activeIndex].lines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
          
          <button 
          onClick={() => window.location.href = `/servicos/#${contentData[activeIndex].title}`}
          className={`
            mt-6 md:mt-8 bg-[var(--not-white)]/70
            px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-semibold 
            flex items-center gap-2
            shadow-2xl border border-white
            text-sm md:text-base

            /* --- ANIMATION RULES --- */
            transition-all duration-300

            /* --- HOVER RULES --- */
            hover:bg-[var(--caitee-green)] hover:scale-105
            hover:border-[var(--caitee-green)] hover:text-white

            /* --- SUCCESS RULES --- */
            active:scale-90 active:bg-[var(--highlighted-text)]
            active:border active:border-[var(--highlighted-text)]
          `}>
            Conheça mais Sobre <span className="text-xl">→</span>
          </button>
        </div>
        
      </div>
      
    </section>
  );
}