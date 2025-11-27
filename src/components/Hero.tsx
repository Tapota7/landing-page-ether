import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    const starCount = window.innerWidth < 768 ? 80 : 150;

    // Resize handler
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
      twinklePhase: number;
      vx: number;
      vy: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2.5;
        this.opacity = Math.random() * 0.7 + 0.3;
        this.twinkleSpeed = Math.random() * 0.03 + 0.01;
        this.twinklePhase = Math.random() * Math.PI * 2;
        this.vx = (Math.random() - 0.5) * 0.15;
        this.vy = (Math.random() - 0.5) * 0.15;
      }

      update() {
        this.twinklePhase += this.twinkleSpeed;
        this.opacity = Math.sin(this.twinklePhase) * 0.4 + 0.5; // Base 0.5, swing 0.4
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around
        if (this.x < 0) this.x = canvas!.width;
        if (this.x > canvas!.width) this.x = 0;
        if (this.y < 0) this.y = canvas!.height;
        if (this.y > canvas!.height) this.y = 0;
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = `rgba(245, 245, 245, ${this.opacity})`;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    // Init stars
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    // Parallax
    const handleScroll = () => {
      if (canvas) {
        canvas.style.transform = `translateY(${window.scrollY * 0.5}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.update();
        star.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-80 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        {/* Logo Graphic Simulation */}
        <div className="mb-6 md:mb-8 animate-fade-up">
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-ether-secondary/20 blur-[60px] rounded-full transform scale-75"></div>
            <div className="flex flex-col items-center gap-2">
              <img
                src="/logo-white-circuits.jpg"
                alt="ETHER IA Logo"
                className="w-48 h-48 md:w-72 md:h-72 object-contain relative z-10 mix-blend-screen opacity-70 hover:opacity-100 transition-all duration-500"
              />
              <h2 className="font-orbitron font-bold text-4xl md:text-6xl tracking-[0.2em] bg-gradient-to-b from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] relative z-10 mt-[-20px]">
                ETHER
              </h2>
              <p className="font-inter text-ether-secondary text-sm md:text-lg tracking-[0.3em] uppercase font-semibold mt-2">
                Evolucionar con IA
              </p>
            </div>
          </div>
        </div>

        <h1 className="font-orbitron font-black text-3xl md:text-5xl lg:text-7xl text-ether-text leading-[1.1] mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-ether-text to-ether-subtext">Inteligencia Artificial que</span> <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-ether-secondary to-ether-secondaryHover drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">Evoluciona Contigo</span>
        </h1>

        <p className="font-inter text-ether-subtext text-base md:text-xl max-w-2xl mb-10 opacity-0 animate-fade-up leading-relaxed" style={{ animationDelay: '0.8s' }}>
          Transformamos tu negocio con IA estratégica, humanidad y sabiduría.
        </p>

        <div className="flex flex-col md:flex-row gap-5 w-full md:w-auto opacity-0 animate-fade-up" style={{ animationDelay: '1s' }}>
          <button
            onClick={() => scrollTo('#contacto-cta')}
            className="bg-ether-secondary hover:bg-ether-secondaryHover text-ether-dark font-orbitron font-bold px-9 py-4 rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] border border-white/10"
          >
            Comienza Tu Transformación
          </button>
          <button
            onClick={() => scrollTo('#servicios')}
            className="bg-white/5 backdrop-blur-sm border border-ether-secondary/50 text-ether-text font-orbitron font-bold px-9 py-3.5 rounded-lg hover:bg-ether-secondary hover:text-ether-dark hover:border-ether-secondary transition-all transform hover:scale-105"
          >
            Ver Servicios
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={() => scrollTo('#stats')}>
        <svg className="w-8 h-8 text-ether-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;