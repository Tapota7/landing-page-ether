import React, { useEffect, useState, useRef } from 'react';
import FadeIn from './FadeIn';

// Hook for counting up animation
const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth stop
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
};

const StatItem: React.FC<{ number: string; label: string; delay: number }> = ({ number, label, delay }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Extract numeric part and suffix/prefix
    const numericValue = parseInt(number.replace(/\D/g, '')) || 0;
    const prefix = number.includes('+') ? '+' : '';
    const suffix = number.includes('%') ? '%' : number.includes('k') ? 'k' : '';

    const count = useCountUp(numericValue, 2500, isVisible);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, { threshold: 0.5 });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="h-full">
             <FadeIn delay={delay} className="h-full">
              <div className="bg-ether-dark/80 backdrop-blur-md border border-ether-border/50 p-6 md:p-8 rounded-xl text-center hover:border-ether-secondary hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all duration-300 h-full flex flex-col justify-center group">
                <div className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-ether-secondary mb-3 group-hover:scale-110 transition-transform duration-300 origin-center">
                   {prefix}{count}{suffix}
                </div>
                <div className="font-inter text-ether-text text-sm md:text-base font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  {label}
                </div>
              </div>
            </FadeIn>
        </div>
    );
};

const Stats: React.FC = () => {
  const stats = [
    { number: '+50', label: 'Proyectos Completados' },
    { number: '+10k', label: 'Horas Ahorradas' },
    { number: '+200%', label: 'Aumento en Eficiencia' },
    { number: '95%', label: 'Tasa de Satisfacción' },
  ];

  return (
    <section id="stats" className="bg-ether-primary py-16 md:py-24 px-5 border-t border-ether-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="mb-12 text-center">
            <FadeIn>
                <h2 className="font-orbitron font-bold text-2xl md:text-4xl text-ether-text mb-4">Números Que Hablan</h2>
                <div className="w-20 h-1 bg-ether-secondary mx-auto mb-6 rounded-full"></div>
                <p className="font-inter text-ether-subtext text-sm md:text-base max-w-2xl mx-auto">
                    Resultados tangibles que demuestran el poder de la transformación digital inteligente.
                </p>
            </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;