import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 h-[70px] ${isScrolled ? 'bg-ether-primary/90 backdrop-blur-md shadow-lg shadow-ether-secondary/10' : 'bg-ether-primary/50 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('#hero')}>
          <span className="font-orbitron font-bold text-xl text-ether-text tracking-wide">ETHER IA</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="font-orbitron text-sm font-medium text-ether-text hover:text-ether-secondary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contacto-cta')}
            className="bg-ether-secondary hover:bg-ether-secondaryHover text-ether-dark font-orbitron font-bold text-sm px-6 py-2 rounded-lg transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
          >
            Contactar
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-ether-text p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-ether-dark/95 backdrop-blur-xl border-t border-ether-border p-6 flex flex-col gap-6 md:hidden shadow-xl animate-slide-down">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-left font-orbitron text-base text-ether-text hover:text-ether-secondary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contacto-cta')}
            className="w-full bg-ether-secondary text-ether-dark font-orbitron font-bold py-3 rounded-lg mt-2"
          >
            Contactar
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;