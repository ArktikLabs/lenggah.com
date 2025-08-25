"use client";
import React from 'react';
import { Instagram, Facebook, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

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
  };

  return (
    <footer className="bg-[#222222] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-serif mb-4">Lenggah</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t({
                id: 'Studio furnitur & interior yang menghadirkan kenyamanan dalam setiap detail.',
                en: 'Furniture & interior studio that brings comfort in every detail.'
              })}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#6B4F3A] rounded-full flex items-center justify-center hover:bg-[#5a3e2c] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#6B4F3A] rounded-full flex items-center justify-center hover:bg-[#5a3e2c] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t({ id: 'Navigasi', en: 'Navigation' })}
            </h4>
            <ul className="space-y-2">
              {[
                { name: { id: 'Tentang', en: 'About' }, href: '#about' },
                { name: { id: 'Layanan', en: 'Services' }, href: '#services' },
                { name: { id: 'Portofolio', en: 'Portfolio' }, href: '#portfolio' },
                { name: { id: 'Testimoni', en: 'Testimonials' }, href: '#testimonials' },
              ].map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t(item.name)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t({ id: 'Layanan', en: 'Services' })}
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>{t({ id: 'Desain Interior', en: 'Interior Design' })}</li>
              <li>{t({ id: 'Furnitur Kustom', en: 'Custom Furniture' })}</li>
              <li>{t({ id: 'Kitchen Set', en: 'Kitchen Set' })}</li>
              <li>{t({ id: 'Renovasi', en: 'Renovation' })}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t({ id: 'Kontak', en: 'Contact' })}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#3C6E47]" />
                <span className="text-gray-300">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#3C6E47]" />
                <span className="text-gray-300">info@lenggah.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} Lenggah. {t({ id: 'Seluruh hak cipta dilindungi.', en: 'All rights reserved.' })}
          </p>
        </div>
      </div>
    </footer>
  );
};
