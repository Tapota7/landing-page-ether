import React, { useState } from 'react';
import { Plus, Minus, Layers, Lightbulb, Zap, HelpCircle, Clock, ShieldCheck } from 'lucide-react';
import FadeIn from './FadeIn';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: <Layers size={20} />,
      q: "¿Qué servicios ofrece ETHER IA?",
      a: "Ofrecemos soluciones integrales de IA: desde aplicaciones web personalizadas, automatizaciones inteligentes, generación de contenido visual, hasta consultoría estratégica."
    },
    {
      icon: <Lightbulb size={20} />,
      q: "¿Cuál es la ventaja de usar IA en mi negocio?",
      a: "La IA te permite optimizar procesos, reducir costos operacionales, mejorar decisiones basadas en datos y liberar a tu equipo para tareas estratégicas."
    },
    {
      icon: <Zap size={20} />,
      q: "¿Cómo funcionan las automatizaciones?",
      a: "Analizamos tus procesos actuales, identificamos oportunidades de mejora y creamos flujos automáticos. Es como tener un empleado virtual trabajando 24/7."
    },
    {
      icon: <HelpCircle size={20} />,
      q: "¿Necesito saber de IA para usar vuestros servicios?",
      a: "No. Nos encargamos de toda la complejidad técnica. Vos solo te enfocas en tu negocio. Nosotros te asesoramos y realizamos la transformación."
    },
    {
      icon: <Clock size={20} />,
      q: "¿Cuál es el tiempo de implementación?",
      a: "Depende del servicio, pero generalmente proyectos complejos se resuelven en 2-4 semanas. Proyectos más simples pueden estar listos en días."
    },
    {
        icon: <ShieldCheck size={20} />,
        q: "¿Ofrecen soporte después de la implementación?",
        a: "Claro. Ofrecemos soporte continuo, mantenimiento y optimización. Queremos que tu inversión siga generando valor a largo plazo."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-ether-dark py-16 md:py-24 px-5">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-orbitron font-bold text-2xl md:text-4xl text-ether-text mb-4">Preguntas Frecuentes</h2>
            <p className="font-inter text-ether-subtext text-sm md:text-base">Respondemos tus dudas</p>
          </FadeIn>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 50}>
              <div 
                className={`bg-ether-primary border ${openIndex === index ? 'border-ether-secondary' : 'border-ether-border/50'} rounded-lg overflow-hidden transition-all duration-300`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left bg-ether-primary hover:bg-ether-border/30 transition-colors group"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <div className="text-ether-secondary/80 group-hover:text-ether-secondary transition-colors shrink-0">
                        {faq.icon}
                    </div>
                    <span className="font-orbitron font-medium text-ether-text text-sm md:text-base">{faq.q}</span>
                  </div>
                  {openIndex === index ? (
                    <Minus size={20} className="text-ether-secondary flex-shrink-0" />
                  ) : (
                    <Plus size={20} className="text-ether-secondary flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 pt-0 pl-12 font-inter text-sm md:text-base text-ether-subtext leading-relaxed border-t border-ether-border/20 mt-2">
                    {faq.a}
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

export default FAQ;