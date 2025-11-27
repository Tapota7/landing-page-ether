import React, { useRef } from 'react';
import FadeIn from './FadeIn';

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      text: "Con ETHER IA automatizamos nuestros procesos en 2 semanas. La diferencia fue increíble. Pasamos de un dolor de cabeza a un sistema fluido.",
      author: "María González",
      role: "CEO Tech Solutions"
    },
    {
      text: "Mi landing page no solo se ve increíble, convierte. El equipo fue profesional, atento y entregó exactamente lo que necesitaba.",
      author: "Carlos Mendez",
      role: "Emprendedor Digital"
    },
    {
      text: "Pasamos de 10 horas de trabajo manual a 10 minutos automatizado. Increíble transformación.",
      author: "Ana Rodriguez",
      role: "Manager de Operaciones"
    },
    {
        text: "Nos ayudaron a crear un dashboard que nos da visibilidad real de nuestro negocio. Las decisiones ahora son más rápidas.",
        author: "Juan Pérez",
        role: "Founder StartUp"
    },
    {
        text: "El servicio de generación de contenido visual con IA nos ahorró miles en producción. Calidad profesional.",
        author: "Laura Martinez",
        role: "Directora de Marketing"
    }
  ];

  return (
    <section id="testimonios" className="bg-ether-primary py-16 md:py-24 px-5 border-t border-ether-secondary/30">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-orbitron font-bold text-2xl md:text-4xl text-ether-text mb-4">Lo Que Dicen Nuestros Clientes</h2>
            <p className="font-inter text-ether-subtext text-sm md:text-base">Historias reales de transformación</p>
          </FadeIn>
        </div>

        <div 
            ref={scrollRef}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t, index) => (
            <div key={index} className="min-w-[85%] md:min-w-0 snap-center">
                 <FadeIn delay={index * 100} className="h-full">
                    <div className="bg-ether-dark border border-ether-border/50 p-6 md:p-8 rounded-xl h-full flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(168,85,247,0.2)]">
                        <div className="text-ether-secondary text-sm mb-4">⭐⭐⭐⭐⭐</div>
                        <p className="font-inter text-ether-subtext text-base leading-relaxed mb-6 flex-grow italic">
                        "{t.text}"
                        </p>
                        <div>
                        <h4 className="font-orbitron font-bold text-sm text-ether-secondary">{t.author}</h4>
                        <p className="font-inter text-xs text-ether-subtext opacity-70 mt-1">{t.role}</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
          ))}
        </div>
        
        {/* Mobile Swipe Indicator */}
        <div className="md:hidden flex justify-center mt-4 space-x-2">
            {[0, 1, 2].map((_, i) => (
                <div key={i} className={`h-2 w-2 rounded-full ${i === 0 ? 'bg-ether-secondary' : 'bg-ether-secondary/30'}`}></div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;