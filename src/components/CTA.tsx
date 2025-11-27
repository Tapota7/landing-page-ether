import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { supabase } from '../lib/supabase';

// INSTRUCCIONES:
// 1. Regístrate en https://formspree.io
// 2. Crea un nuevo formulario y obtén el ID (ej: "xjyqlzqz")
// 3. Pega el ID aquí abajo entre las comillas.
const FORMSPREE_ID = "mjkqgyqj";

const SERVICES = [
  "Aplicaciones Web",
  "Automatizaciones",
  "Contenido Visual",
  "Consultoría en IA",
  "Otro"
];

const CTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) return;

    setStatus('submitting');

    try {
      // 1. Guardar en Supabase
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            service: formData.service,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (supabaseError) {
        console.error('Error saving to Supabase:', supabaseError);
        // No detenemos el proceso, intentamos enviar el mail de todas formas
      }

      // 2. Enviar mail vía Formspree
      if (FORMSPREE_ID) {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', service: '', message: '' });
          setTimeout(() => setStatus('idle'), 5000);
        } else {
          throw new Error('Formspree error');
        }
      } else {
        // Modo Demo
        console.log('Modo demo:', formData);
        setTimeout(() => {
          setStatus('success');
          setFormData({ name: '', email: '', service: '', message: '' });
          setTimeout(() => setStatus('idle'), 3000);
        }, 1000);
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section
      id="contacto-cta"
      className="py-20 px-5 border-t border-ether-secondary/30 bg-gradient-to-br from-ether-dark to-ether-primary"
    >
      <div className="max-w-[800px] mx-auto text-center">
        <FadeIn>
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-ether-text mb-4 leading-tight">
            ¿Listo Para Transformar <br /> Tu Negocio?
          </h2>
          <p className="font-inter text-lg text-ether-subtext mb-10">
            Contáctanos hoy y comienza tu viaje con IA
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6 max-w-[600px] mx-auto text-left">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nombre */}
              <div>
                <label className="block text-ether-subtext text-sm mb-1 ml-1">Nombre Completo</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej: Juan Pérez"
                  disabled={status === 'submitting' || status === 'success'}
                  className="w-full bg-ether-dark border border-ether-border rounded-lg px-4 py-3 text-ether-text focus:outline-none focus:border-ether-secondary focus:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all disabled:opacity-50"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-ether-subtext text-sm mb-1 ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nombre@empresa.com"
                  disabled={status === 'submitting' || status === 'success'}
                  className="w-full bg-ether-dark border border-ether-border rounded-lg px-4 py-3 text-ether-text focus:outline-none focus:border-ether-secondary focus:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all disabled:opacity-50"
                />
              </div>
            </div>

            {/* Servicio */}
            <div>
              <label className="block text-ether-subtext text-sm mb-1 ml-1">Servicio de Interés</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                disabled={status === 'submitting' || status === 'success'}
                className="w-full bg-ether-dark border border-ether-border rounded-lg px-4 py-3 text-ether-text focus:outline-none focus:border-ether-secondary focus:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all disabled:opacity-50 appearance-none"
              >
                <option value="" disabled>Selecciona una opción...</option>
                {SERVICES.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-ether-subtext text-sm mb-1 ml-1">Mensaje (Opcional)</label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos brevemente sobre tu proyecto..."
                disabled={status === 'submitting' || status === 'success'}
                className="w-full bg-ether-dark border border-ether-border rounded-lg px-4 py-3 text-ether-text focus:outline-none focus:border-ether-secondary focus:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all disabled:opacity-50 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className={`font-orbitron font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-[1.02] w-full mt-2 ${status === 'success'
                ? 'bg-green-600 text-white'
                : status === 'error'
                  ? 'bg-red-600 text-white'
                  : 'bg-ether-secondary hover:bg-ether-secondaryHover text-ether-dark animate-pulse-glow hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] disabled:opacity-70 disabled:cursor-not-allowed'
                }`}
            >
              {status === 'submitting' ? 'Enviando...' : status === 'success' ? '✓ Mensaje Enviado' : status === 'error' ? 'Error al enviar' : 'Enviar Consulta'}
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