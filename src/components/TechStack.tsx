import React from 'react';
import FadeIn from './FadeIn';

const TechLogo: React.FC<{ name: string; slug: string; color: string }> = ({ name, slug, color }) => (
    <div className="group flex flex-col items-center justify-center gap-3 p-6 transition-all duration-300 hover:scale-110 cursor-default">
        <div
            className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl bg-ether-dark/50 border border-ether-border/30 group-hover:border-opacity-100 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] relative overflow-hidden"
            style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
            {/* Grayscale version (default) */}
            <img
                src={`https://cdn.simpleicons.org/${slug}/999999`} // Changed to 999999 as 9ca3af is broken for OpenAI
                alt={name}
                className="w-10 h-10 md:w-12 md:h-12 absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />
            {/* Colored version (hover) */}
            <img
                src={`https://cdn.simpleicons.org/${slug}/${color.replace('#', '').toLowerCase()}`}
                alt={`${name} color`}
                className="w-10 h-10 md:w-12 md:h-12 absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
        </div>
        <span className="font-orbitron text-xs md:text-sm text-gray-500 group-hover:text-white transition-colors duration-300 tracking-wider">
            {name}
        </span>
    </div>
);

const TechStack: React.FC = () => {
    const technologies = [
        { name: 'OpenAI', slug: 'openai', color: '#10A37F' },
        { name: 'Gemini', slug: 'googlegemini', color: '#4E88D4' },
        { name: 'React', slug: 'react', color: '#61DAFB' },
        { name: 'Python', slug: 'python', color: '#3776AB' },
        { name: 'Supabase', slug: 'supabase', color: '#3ECF8E' },
        { name: 'TensorFlow', slug: 'tensorflow', color: '#FF6F00' }
    ];

    return (
        <section id="tech-stack" className="bg-ether-primary py-16 md:py-24 px-5 border-t border-ether-secondary/20">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <FadeIn>
                        <h2 className="font-orbitron font-bold text-2xl md:text-4xl text-ether-text mb-4">
                            Potenciado por Tecnología de Vanguardia
                        </h2>
                        <div className="w-20 h-1 bg-ether-secondary mx-auto mb-6 rounded-full opacity-70"></div>
                        <p className="font-inter text-ether-subtext text-sm md:text-base">
                            Construimos sobre gigantes para ofrecerte lo mejor
                        </p>
                    </FadeIn>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {technologies.map((tech, index) => (
                        <FadeIn key={tech.name} delay={index * 100}>
                            <TechLogo {...tech} />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
