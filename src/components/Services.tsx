import React from 'react';
import { Laptop, Bot, Video, GraduationCap, ChevronRight } from 'lucide-react';
import FadeIn from './FadeIn';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Laptop size={48} />,
      title: "Aplicaciones Web",
      items: [
        "Landing pages de alto impacto",
        "Dashboards y paneles de control",
        "Plataformas SaaS",
        "E-commerce inteligentes",
        "Aplicaciones con IA integrada"
      ]
    },
    {
      icon: <Bot size={48} />,
      title: "Automatizaciones",
      items: [
        "Flujos de trabajo con IA",
        "Integración de APIs y sistemas",
        "Bots de atención al cliente",
        "Procesamiento de datos automático",
        "Optimización de procesos"
      ]
    },
    {
      icon: <Video size={48} />,
      title: "Contenido Visual",
      items: [
        "Generación de imágenes publicitarias",
        "Producción de videos promocionales",
        "Diseño gráfico asistido por IA",
        "Edición y postproducción automática"
      ]
    },
    {
      icon: <GraduationCap size={48} />,
      title: "Consultoría en IA",
      items: [
        "Estrategia de transformación digital",
        "Asesoramiento en herramientas IA",
        "Capacitación de equipos",
        "Análisis de viabilidad"
      ]
    }
  ];

  return (
    <section id="servicios" className="bg-ether-primary py-16 md:py-24 px-5 border-t border-ether-secondary/20 relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-orbitron font-bold text-2xl md:text-4xl text-ether-text mb-4">Nuestros Servicios</h2>
             <div className="w-20 h-1 bg-ether-secondary mx-auto mb-6 rounded-full opacity-70"></div>
            <p className="font-inter text-ether-subtext text-sm md:text-base">Soluciones integrales de IA para tu negocio</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 100} className="h-full">
              <div className="bg-ether-dark/60 backdrop-blur-sm border border-ether-border/60 p-6 rounded-xl transition-all duration-300 hover:border-ether-secondary hover:bg-ether-dark/90 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.3)] h-full cursor-pointer group flex flex-col relative overflow-hidden">
                
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-ether-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] text-ether-secondary group-hover:text-ether-secondaryHover relative z-10">
                  {service.icon}
                </div>
                <h3 className="font-orbitron font-bold text-lg md:text-xl text-white mb-4 group-hover:text-ether-secondary transition-colors relative z-10">
                  {service.title}
                </h3>
                <ul className="space-y-3 flex-grow relative z-10">
                  {service.items.map((item, i) => (
                    <li key={i} className="font-inter text-sm text-ether-subtext/90 flex items-start leading-relaxed group-hover:text-white transition-colors">
                      <ChevronRight size={16} className="text-ether-secondary mr-2 mt-1 flex-shrink-0 opacity-70 group-hover:opacity-100" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;