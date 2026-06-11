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



const CTA  = () => {

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

    <div id="sobre" className={`
      flex flex-col relative mx-auto 
      xl:flex-row justify-between items-center gap-10
      z-10 my-20
      px-4 md:px-10 lg:px-20 xl:px-40
    `}>      
        
      {/* text and Call to action */}
      <div className={`
        relative w-full mx-auto lg:w-2/5 rounded-3xl bg-(--ghost-white) 
        transition-all duration-300 hover:scale-[1.05]
        p-8 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col justify-center
        `}>       
          <h2 className="text-4xl font-bold">Materialize Seus Sonhos <br /> Com a
          <span className={`
            bg-linear-to-r from-(--highlighted-text) from-10% 
            to-(--royal-blue) to-90%
            bg-clip-text text-transparent`
            }> Info Jr.</span>
          </h2>

          <div className="mt-6 space-y-4">
            <p className="text-lg text-(--secondary-text) font-medium leading-relaxed">
              Nascida em 1993 na UNESP Rio Claro, a Info Jr é uma das empresas juniores pioneiras no Brasil. Com mais de três décadas de história, combinamos a solidez acadêmica com a força do Movimento Empresa Júnior para entregar excelência.
            </p>
            <p className="text-lg text-(--secondary-text) font-medium leading-relaxed">
              Seja através de um site de alta conversão ou de um sistema web sob medida, nossa equipe está pronta para transformar seus desafios em soluções tecnológicas robustas que impulsionam os seus resultados.
            </p>
          </div>

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
      
      {/* Image Carousel Card */}
      <div className={`
        w-full xl:w-1/2 bg-(--not-white)/80 rounded-4xl
        shadow-2xl backdrop-blur-xl p-4 md:p-6
        flex items-center justify-center
        `}>
        <div 
          className={`
            relative z-10 w-full aspect-3/2
            overflow-hidden border border-white/20 rounded-3xl 
            shadow-inner
            `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
            >
          {/* 2. The Sliding Track: Holds all images in a row */}
          <div 
            className="flex h-full w-full transition-transform duration-700 ease-in-out"
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

}; export default CTA; 