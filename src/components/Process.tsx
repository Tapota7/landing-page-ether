import React from 'react';
import { ClipboardList, Target, Cog, Rocket, ShieldCheck } from 'lucide-react';
import FadeIn from './FadeIn';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardList size={40} className="text-ether-secondary" />,
      title: "Consultoría",
      description: "Analizamos tus necesidades y objetivos."
    },
    {
      icon: <Target size={40} className="text-ether-secondary" />,
      title: "Estrategia",
      description: "Diseñamos la solución perfecta para ti."
    },
    {
      icon: <Cog size={40} className="text-ether-secondary" />,
      title: "Desarrollo",
      description: "Ejecutamos con calidad y rapidez."
    },
    {
      icon: <Rocket size={40} className="text-ether-secondary" />,
      title: "Lanzamiento",
      description: "Tu transformación comienza aquí."
    },
    {
      icon: <ShieldCheck size={40} className="text-ether-secondary" />,
      title: "Soporte",
      description: "Te acompañamos en todo el camino."
    }
  ];

  return (
    <section id="process" className="bg-ether-dark py-16 md:py-24 px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-orbitron font-bold text-2xl md:text-4xl text-ether-text mb-4">¿Cómo Funciona?</h2>
            <p className="font-inter text-ether-subtext text-sm md:text-base">5 pasos simples para tu transformación</p>
          </FadeIn>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between gap-6 md:gap-4 mt-10">
          {/* Connector Line Desktop */}
          <div className="hidden md:block absolute top-[70px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-transparent via-ether-secondary/50 to-transparent z-0"></div>

          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 150} className="flex-1 z-10">
              <div className="relative flex flex-col md:items-center text-center group">
                 {/* Mobile Vertical Line */}
                <div className="md:hidden absolute left-[-20px] top-0 bottom-0 w-[2px] bg-ether-secondary/30 last:h-1/2"></div>
                
                <div className="bg-ether-primary border border-ether-secondary/30 p-6 rounded-xl hover:border-ether-secondary hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 w-full md:min-h-[220px] flex flex-row md:flex-col items-center md:justify-start gap-4 md:gap-0">
                  <div className="mb-0 md:mb-4 bg-ether-dark p-3 rounded-full border border-ether-secondary/30 shrink-0">
                    {step.icon}
                  </div>
                  <div className="text-left md:text-center">
                    <h3 className="font-orbitron font-bold text-lg text-ether-secondary mb-2">
                      {step.title}
                    </h3>
                    <p className="font-inter text-sm text-ether-subtext leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;