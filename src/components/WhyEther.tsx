import React from 'react';
import { Brain, Heart, Sparkles } from 'lucide-react';
import FadeIn from './FadeIn';

const WhyEther: React.FC = () => {
  const benefits = [
    {
      icon: <Brain size={64} className="text-ether-secondary" />,
      title: "Sabiduría",
      description: "Combinamos experiencia humana con la potencia de la inteligencia artificial para tomar decisiones estratégicas que transforman."
    },
    {
      icon: <Heart size={64} className="text-ether-secondary" />,
      title: "Humanidad",
      description: "No vendemos máquinas, vendemos soluciones que respetan tu negocio y entienden tus objetivos reales."
    },
    {
      icon: <Sparkles size={64} className="text-ether-secondary" />,
      title: "Transformación",
      description: "Resultados medibles, procesos optimizados, equipo empoderado. Tu evolución es nuestro éxito."
    }
  ];

  return (
    <section id="why-ether" className="bg-ether-dark py-16 md:py-24 px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-orbitron font-bold text-2xl md:text-4xl text-ether-text mb-4">¿Por Qué ETHER IA?</h2>
            <p className="font-inter text-ether-subtext text-sm md:text-base">Lo que nos diferencia</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <FadeIn key={index} delay={index * 150} className="h-full">
              <div className="bg-ether-primary border border-ether-secondary/50 p-8 rounded-xl text-center hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(168,85,247,0.2)] hover:border-ether-secondary transition-all duration-300 h-full group">
                <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="font-orbitron font-bold text-xl md:text-2xl text-ether-secondary mb-4">
                  {benefit.title}
                </h3>
                <p className="font-inter text-ether-subtext text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEther;