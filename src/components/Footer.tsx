import React, { useState } from 'react';
import { Instagram, Mail } from 'lucide-react';

// Si usas el mismo Formspree para el newsletter, pon el ID aquí o impórtalo.
// Para simplificar, usamos una constante local, pero idealmente sería la misma o una lista separada.
const FORMSPREE_ID = "mjkqgyqj";

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubscribe = async () => {
    if (!email) return;

    if (FORMSPREE_ID) {
      try {
        await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, type: 'newsletter_subscription' })
        });
        setStatus('success');
        setEmail('');
      } catch (e) {
        // Fallback silencioso
        setStatus('success');
        setEmail('');
      }
    } else {
      // Simulación
      console.log('Newsletter sub:', email);
      setStatus('success');
      setEmail('');
    }

    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <footer className="bg-ether-dark pt-12 pb-8 px-5 border-t border-ether-border/50">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand & Links */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-6">
              <span className="font-orbitron font-bold text-lg text-ether-text tracking-wide">ETHER IA</span>
            </div>
            <ul className="space-y-2">
              {['Servicios', 'Testimonios', 'FAQ', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="font-inter text-sm text-ether-subtext hover:text-ether-secondary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-orbitron font-bold text-ether-secondary text-sm mb-4 uppercase tracking-wider">Conectar</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:ia.ether.2025@gmail.com" className="flex items-center gap-2 font-inter text-sm text-ether-subtext hover:text-ether-secondary transition-colors group">
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                ia.ether.2025@gmail.com
              </a>
              <a href="https://www.instagram.com/ether_i.a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-inter text-sm text-ether-subtext hover:text-ether-secondary transition-colors group">
                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                @ether_i.a
              </a>
            </div>
          </div>

          {/* Mini Newsletter */}
          <div>
            <h4 className="font-orbitron font-bold text-ether-secondary text-sm mb-4 uppercase tracking-wider">Newsletter</h4>
            <p className="font-inter text-xs text-ether-subtext mb-3">Tips de IA directo a tu inbox.</p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-ether-primary border border-ether-border rounded px-3 py-2 text-sm text-ether-text focus:outline-none focus:border-ether-secondary"
              />
              <button
                onClick={handleSubscribe}
                className="w-full bg-ether-secondary hover:bg-ether-secondaryHover text-ether-dark font-orbitron font-bold text-sm py-2 rounded transition-colors"
              >
                {status === 'success' ? '¡Suscrito!' : 'Suscribir'}
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-ether-border/30 pt-6 text-center md:flex md:justify-between md:items-center">
          <p className="font-inter text-xs text-ether-subtext/50 mb-2 md:mb-0">
            © 2025 ETHER IA. Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-4">
            <span className="font-inter text-xs text-ether-subtext/50 hover:text-ether-secondary cursor-pointer">Política de Privacidad</span>
            <span className="font-inter text-xs text-ether-subtext/50 hover:text-ether-secondary cursor-pointer">Términos de Servicio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;