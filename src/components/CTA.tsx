import React, { useState } from 'react';
import FadeIn from './FadeIn';

// INSTRUCCIONES:
// 1. Regístrate en https://formspree.io
// 2. Crea un nuevo formulario y obtén el ID (ej: "xjyqlzqz")
// 3. Pega el ID aquí abajo entre las comillas.
const FORMSPREE_ID = "mjkqgyqj"; 

const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');

    if (FORMSPREE_ID) {
      // Lógica real de envío
      try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email })
        });

        if (response.ok) {
          setStatus('success');
          setEmail('');
          setTimeout(() => setStatus('idle'), 5000);
        } else {
          setStatus('error');
          setTimeout(() => setStatus('idle'), 3000);
        }
      } catch (error) {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } else {
      // Simulación (Demo)
      console.log('Modo demo: Email capturado:', email);
      setTimeout(() => {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      }, 1000);
    }
  };

  return (
    <section 
      id="contacto-cta" 
      className="py-20 px-5 border-t border-ether-secondary/30 bg-gradient-to-br from-ether-dark to-ether-primary"
    >
      <div className="max-w-[600px] mx-auto text-center">
        <FadeIn>
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-ether-text mb-4 leading-tight">
            ¿Listo Para Transformar <br/> Tu Negocio?
          </h2>
          <p className="font-inter text-lg text-ether-subtext mb-10">
            Contáctanos hoy y comienza tu viaje con IA
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu mejor email..."
              disabled={status === 'submitting' || status === 'success'}
              className="flex-1 bg-ether-dark border border-ether-border rounded-lg px-4 py-3 text-ether-text focus:outline-none focus:border-ether-secondary focus:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all min-w-0 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className={`font-orbitron font-bold px-8 py-3 rounded-lg transition-all transform hover:scale-105 min-w-[140px] ${
                status === 'success' 
                  ? 'bg-green-600 text-white' 
                  : status === 'error'
                  ? 'bg-red-600 text-white'
                  : 'bg-ether-secondary hover:bg-ether-secondaryHover text-ether-dark animate-pulse-glow hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] disabled:opacity-70 disabled:cursor-not-allowed'
              }`}
            >
              {status === 'submitting' ? 'Enviando...' : status === 'success' ? '✓ Enviado' : status === 'error' ? 'Error' : 'Contactar'}
            </button>
          </form>
          <p className="font-inter text-xs text-ether-subtext/60">
            {status === 'success' 
              ? '¡Gracias! Nos pondremos en contacto pronto.' 
              : 'Responderemos en 24 horas • Sin compromisos • Consulta gratuita'}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTA;