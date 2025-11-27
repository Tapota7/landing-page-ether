import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'privacy' | 'terms' | null;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !type) return null;

    const content = {
        privacy: {
            title: 'Política de Privacidad',
            text: (
                <div className="space-y-4 text-ether-subtext font-inter text-sm md:text-base">
                    <p><strong>Última actualización: Noviembre 2025</strong></p>
                    <p>En ETHER IA, nos comprometemos a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos y compartimos su información personal.</p>

                    <h3 className="text-ether-text font-bold text-lg mt-4">1. Información que recopilamos</h3>
                    <p>Podemos recopilar información personal que usted nos proporciona voluntariamente, como su nombre, dirección de correo electrónico y número de teléfono cuando se comunica con nosotros o se suscribe a nuestros servicios.</p>

                    <h3 className="text-ether-text font-bold text-lg mt-4">2. Uso de la información</h3>
                    <p>Utilizamos su información para proporcionar y mejorar nuestros servicios, responder a sus consultas y enviarle comunicaciones relacionadas con nuestros productos y servicios.</p>

                    <h3 className="text-ether-text font-bold text-lg mt-4">3. Compartir información</h3>
                    <p>No vendemos ni alquilamos su información personal a terceros. Podemos compartir su información con proveedores de servicios que nos ayudan a operar nuestro negocio, siempre bajo estrictas obligaciones de confidencialidad.</p>

                    <h3 className="text-ether-text font-bold text-lg mt-4">4. Seguridad</h3>
                    <p>Implementamos medidas de seguridad razonables para proteger su información personal contra el acceso no autorizado, la alteración, la divulgación o la destrucción.</p>

                    <h3 className="text-ether-text font-bold text-lg mt-4">5. Contacto</h3>
                    <p>Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos en ia.ether.2025@gmail.com.</p>
                </div>
            )
        },
        terms: {
            title: 'Términos de Servicio',
            text: (
                <div className="space-y-4 text-ether-subtext font-inter text-sm md:text-base">
                    <p><strong>Última actualización: Noviembre 2025</strong></p>
                    <p>Bienvenido a ETHER IA. Al acceder o utilizar nuestro sitio web y servicios, usted acepta estar sujeto a estos Términos de Servicio.</p>

                    <h3 className="text-ether-text font-bold text-lg mt-4">1. Uso de los servicios</h3>
                    <p>Usted se compromete a utilizar nuestros servicios solo para fines legales y de acuerdo con estos términos. No debe utilizar nuestros servicios de manera que pueda dañar, deshabilitar o sobrecargar nuestros sistemas.</p>

                    <h3 className="text-ether-text font-bold text-lg mt-4">2. Propiedad Intelectual</h3>
                    <p>Todo el contenido, marcas comerciales y otros derechos de propiedad intelectual en nuestro sitio web son propiedad de ETHER IA o de sus licenciantes. No se permite el uso no autorizado de este contenido.</p>

                    <h3 className="text-ether-text font-bold text-lg mt-4">3. Limitación de Responsabilidad</h3>
                    <p>ETHER IA no será responsable de ningún daño indirecto, incidental, especial o consecuente que surja del uso o la imposibilidad de uso de nuestros servicios.</p>

                    <h3 className="text-ether-text font-bold text-lg mt-4">4. Modificaciones</h3>
                    <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.</p>

                    <h3 className="text-ether-text font-bold text-lg mt-4">5. Ley Aplicable</h3>
                    <p>Estos términos se regirán e interpretarán de acuerdo con las leyes vigentes, sin dar efecto a ningún principio de conflicto de leyes.</p>
                </div>
            )
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-ether-dark border border-ether-border w-full max-w-2xl max-h-[80vh] rounded-xl shadow-[0_0_50px_rgba(168,85,247,0.2)] flex flex-col relative animate-scale-up">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-ether-border/50">
                    <h2 className="font-orbitron font-bold text-xl md:text-2xl text-ether-text">
                        {content[type].title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-ether-subtext hover:text-ether-secondary transition-colors p-1"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto custom-scrollbar">
                    {content[type].text}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-ether-border/50 flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-ether-secondary hover:bg-ether-secondaryHover text-ether-dark font-orbitron font-bold px-6 py-2 rounded-lg transition-all"
                    >
                        Cerrar
                    </button>
                </div>

            </div>
        </div>
    );
};

export default LegalModal;
