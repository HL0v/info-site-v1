import React from 'react';

export default function HeroWithParticleWave() {
  return (
    // 1. MAIN BACKGROUND: Uses your requested --not-white variable
    <section className="relative w-full min-h-[800px] bg-[var(--not-white)] overflow-hidden flex items-center">
      
      {/* 2. YOUR HERO CONTENT (z-10 ensures it sits above the background) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-white">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Transformações <br />
          reais com software. <br />
          <span className="text-white">On demand.</span>
        </h1>
        <button className="mt-8 bg-white text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors">
          Fale com um expert <span className="text-xl">→</span>
        </button>
      </div>

      {/* 3. THE ANIMATED CSS PARTICLE MESH (z-0) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        
        {/* 3D TILT CONTAINER 
          'perspective' and 'rotateX' lay the grid down like a floor.
          'scale' makes it large enough to fill the screen.
        */}
        <div 
          className="absolute w-[200vw] h-[200vh] [transform:perspective(800px)_rotateX(60deg)_translateY(-100px)_scale(1.5)]"
          style={{
            // Radial mask to softly fade out the edges into the background
            maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 60%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 60%)',
          }}
        >
          
          {/* THE DOT MATRIX CUTOUT
            This cuts physical holes into the div. Only color behind these holes is visible.
          */}
          <div 
            className="absolute inset-0"
            style={{
              maskImage: 'radial-gradient(circle, black 1.5px, transparent 2px)',
              maskSize: '32px 32px', // Adjust this to make dots closer or further apart
              WebkitMaskImage: 'radial-gradient(circle, black 1.5px, transparent 2px)',
              WebkitMaskSize: '32px 32px',
            }}
          >
            {/* Layer A: The base color of the dots (#64748B) covering everything */}
            <div className="absolute inset-0 bg-[#64748B] opacity-60"></div>

            {/* Layer B: The animated pulse color (#4462f6) sliding over the top 
              - w-[200%] makes it twice as wide as the screen.
              - animate-pulse-sweep (from CSS) pulls it to the left forever.
            */}
            <div className="absolute inset-0 w-[200%] h-full animate-pulse-sweep">
              {/* The gradient configuration: mostly transparent, solid blue in the middle, transparent at the end */}
              <div className="w-full h-full bg-[linear-gradient(to_left,transparent_0%,transparent_30%,#4462f6_50%,transparent_70%,transparent_100%)]"></div>
            </div>
          </div>
          
        </div>
      </div>
      
    </section>
  );
}