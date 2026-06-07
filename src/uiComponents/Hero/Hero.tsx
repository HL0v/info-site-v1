'use client'
import { useEffect, useState } from "react";

const carousel = [
  'ascensao-fullview.jpg',
  'eppej-membros-corta-direita.jpg',
  'eppej-membros-pintados.jpg',
  'foto-midia-caitee.jpg',
  'impu_full-ej-mm.jpg',
  'impulsione-fullview.jpg',
  'info-girls-sla.jpg',
  
];

const Hero  = () => {

  const [currentIndex, setCurrentIndex ] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    
    if (isHovered) return;
    const timer = setInterval(() => {
          setCurrentIndex((prevIndex) => 
            // If we are at the last image, go back to 0. Otherwise, go to the next one.
            prevIndex === carousel.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000);
    return() => clearInterval(timer);
    }, [isHovered]);

  



  return (

    <div className={`
      flex relative mx-auto 
      grid-col-2
      gap-10 my-15 z-20
    `}>      
        
      
        <div className={`relative   rounded-3xl bg-(--ghost-white)/10 
        p-8 backdrop-blur-xl border border-white/20 shadow-2xl
        text-4xl font-bold
        `}>       
          <h2>Materialize Seus Sonhos <br /> Com a
          <span className={`
            bg-linear-to-r from-(--highlighted-text) from-10% 
            to-(--royal-blue) to-90%
            bg-clip-text text-transparent`
            }> Info Jr.</span>
          </h2>
          

          <div>

          </div>
          <button className={`
            mt-6 w-full rounded-xl text-xl
            bg-(--caitee-green)/50 py-3 font-semibold 
            transition-all hover:bg-(--highlighted-text)/80 
            transition-all duration-150
            hover:scale-110 active:scale-90
            hover:text-(--not-white)
            `}
            onClick={() => window.open(`google.com`)}
            >
            Entrar em contato
          </button>
        </div>
      
      <div className={`
        box bg-white/10 rounded-4xl
        shadow-2xl backdrop-blur-xl
        `}>
        <div 
          className={`relative z-10 w-full max-w-3xl h-[600px] scale-85 overflow-hidden 
            border border-white/20 rounded-3xl shadow-2xl`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
            >
          {/* 2. The Sliding Track: Holds all images in a row */}
          <div 
            className="flex h-full w-full transition-transform duration-700 ease-in-out "
            // This inline style moves the track to the left by multiples of 100%
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carousel.map((imgUrl, index) => (
              // 3. The Individual Slides
              <div key={index} className="h-full w-full flex-shrink-0">
                <img 
                  src={imgUrl} 
                  alt={`Slide ${index + 1}`} 
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        </div>
    </div>
    )

}; export default Hero; 