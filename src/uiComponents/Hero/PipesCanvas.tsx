'use client';
import React, { useEffect, useRef } from 'react';

export default function PipesCanvas() {
  // 1. We use a ref to grab the canvas element without querying the DOM directly
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // We store our IDs here so we can destroy them when the component unmounts
    let animationFrameId: number;
    let timeouts: NodeJS.Timeout[] = [];
    let pipes: any[] = [];

    // --- YOUR EXACT VANILLA JS LOGIC ---

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Pipe {
      x: number; y: number; size: number; color: string;
      xVel: number; xPrev: number; yVel: number; yPrev: number;
      minDist: number; dist: number; hasEnteredScreen: boolean;

      constructor(x: number, y: number, size: number, xVel: number, yVel: number, clr: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = clr;
        this.xVel =  xVel;
        this.xPrev =  xVel;
        this.yVel =  yVel;
        this.yPrev =  yVel;
        this.minDist = this.updateMinDist();
        this.dist = 0;
        this.hasEnteredScreen = false;
      }
      
      update() {
        this.x += this.xVel;
        this.y += this.yVel;
        this.dist++;
        
        if (!this.hasEnteredScreen) {
          if (this.x > 0 && this.x < canvas!.width && this.y > 0 && this.y < canvas!.height) {
            this.hasEnteredScreen = true;
          }
        }
        
        if (this.dist % this.minDist === 0) {
          if (Math.random() > 0.75) {
            this.changeDirections();
            this.minDist = this.updateMinDist();
          }
        }
      }
      
      draw() {
        const scale = 8;
        const gradient = ctx!.createRadialGradient(this.x, this.y, 2, this.x, this.y, this.size * scale);
        gradient.addColorStop(0, "#002366");
        gradient.addColorStop(1, "#56bc97");

        ctx!.fillStyle = gradient;
        ctx!.fillRect(this.x - this.size * (scale / 2), this.y - this.size * (scale / 2), this.size * scale, this.size * scale);
        
        ctx!.beginPath();
        ctx!.fillStyle = this.color;
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.closePath();
      }
      
      updateMinDist() {
        return Math.floor(Math.random() * 100 + 50);
      }
      
      changeDirections() {
        const prevX = this.xVel;
        const prevY = this.yVel;
        this.xVel = Math.random() > 0.5 ? this.yPrev : this.yPrev * -1;
        this.yVel = Math.random() > 0.5 ? this.xPrev : this.xPrev * -1;
        this.xPrev = this.xVel;
        this.yPrev = this.yVel;
      }
    }

    function init(quantity: number, clr: string, scale = 1) {
      for (let i = 0; i < quantity; i++) {
        const speed = Math.random() * 0.4 + 0.25;
        let x, y, xVel, yVel;
        const size = (Math.random() + 0.5 - 0.5) * scale;
        
        if (Math.random() >= 0.5) {
          x = Math.random() > 0.5 ? size * -1 : canvas!.width + size;
          y = Math.random() * canvas!.height;
          xVel = x < 0 ? speed : speed * -1;
          yVel = 0;
        } else {
          x = Math.random() * canvas!.width;
          y = Math.random() > 0.5 ? size * -1 : canvas!.height + size;
          xVel = 0;
          yVel = y < 0 ? speed : speed * -1;
        }
        pipes.push(new Pipe(x, y, size, xVel, yVel, clr));
      }
    }

    // Trigger your initial spawns
    init(16, '#002366');
    timeouts.push(setTimeout(() => init(16, '#002366', 1.5), 1500));
    timeouts.push(setTimeout(() => init(8, '#56bc97', 2), 3000));

    function animate() {
      for (let i = 0; i < pipes.length; i++) {
        pipes[i].update();
        pipes[i].draw();
        
        if (pipes[i].hasEnteredScreen) {
          if (pipes[i].x < 0 || pipes[i].x > canvas!.width || pipes[i].y < 0 || pipes[i].y > canvas!.height) {
            pipes.splice(i, 1);
            i--;
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    }
    
    animate();

    // --- THE REACT CLEANUP (CRITICAL) ---
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  // 2. Render the canvas element. It will stretch to fill its parent.
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 block" />;
}