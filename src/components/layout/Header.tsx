"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';
import { useScrollSpy } from '../../hooks/useScrollSpy';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  
  const sectionIds = ['hero', 'about', 'services', 'portfolio', 'process', 'testimonials', 'faq', 'contact'];
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: { id: 'Tentang', en: 'About' }, href: '#about' },
    { name: { id: 'Layanan', en: 'Services' }, href: '#services' },
    { name: { id: 'Portofolio', en: 'Portfolio' }, href: '#portfolio' },
    { name: { id: 'Proses', en: 'Process' }, href: '#process' },
    { name: { id: 'Testimoni', en: 'Testimonials' }, href: '#testimonials' },
    { name: { id: 'FAQ', en: 'FAQ' }, href: '#faq' },
    { name: { id: 'Kontak', en: 'Contact' }, href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#6B4F3A] font-serif">
              Lenggah
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#6B4F3A] ${
                  activeSection === item.href.substring(1)
                    ? 'text-[#6B4F3A] border-b-2 border-[#6B4F3A] pb-1'
                    : isScrolled ? 'text-[#222222]' : 'text-white'
                }`}
              >
                {t(item.name)}
              </button>
            ))}
          </nav>

          {/* Language Toggle & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 hover:text-[#6B4F3A] ${
                isScrolled ? 'text-[#222222]' : 'text-white'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span className={language === 'id' ? 'font-bold' : ''}>ID</span>
              <span>|</span>
              <span className={language === 'en' ? 'font-bold' : ''}>EN</span>
            </button>
            <Button 
              size="sm"
              onClick={() => scrollToSection('#contact')}
            >
              {t({ id: 'Konsultasi Gratis', en: 'Free Consultation' })}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-200 ${
              isScrolled ? 'text-[#222222] hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t">
            <nav className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-[#222222] hover:text-[#6B4F3A] font-medium"
                >
                  {t(item.name)}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1 text-sm font-medium text-[#222222] hover:text-[#6B4F3A]"
                >
                  <Globe className="w-4 h-4" />
                  <span className={language === 'id' ? 'font-bold' : ''}>ID</span>
                  <span>|</span>
                  <span className={language === 'en' ? 'font-bold' : ''}>EN</span>
                </button>
                <Button 
                  size="sm"
                  onClick={() => scrollToSection('#contact')}
                >
                  {t({ id: 'Konsultasi Gratis', en: 'Free Consultation' })}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
