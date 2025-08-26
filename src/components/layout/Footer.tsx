"use client";
import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
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
    <footer className="bg-text-charcoal text-primary-ivory py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-serif mb-4">Lenggah</h3>
            <p className="text-primary-ivory/80 leading-relaxed mb-6">
              {t({
                id: "Studio furnitur & interior yang menghadirkan kenyamanan dalam setiap detail.",
                en: "Furniture & interior studio that brings comfort in every detail.",
              })}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-accent-forest rounded-full flex items-center justify-center hover:bg-accent-forest/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-accent-forest rounded-full flex items-center justify-center hover:bg-accent-forest/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t({ id: "Navigasi", en: "Navigation" })}
            </h4>
            <ul className="space-y-2">
              {[
                { name: { id: "Tentang", en: "About" }, href: "#about" },
                { name: { id: "Layanan", en: "Services" }, href: "#services" },
                {
                  name: { id: "Portofolio", en: "Portfolio" },
                  href: "#portfolio",
                },
                {
                  name: { id: "Testimoni", en: "Testimonials" },
                  href: "#testimonials",
                },
              ].map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-primary-ivory/80 hover:text-primary-ivory transition-colors"
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
              {t({ id: "Layanan", en: "Services" })}
            </h4>
            <ul className="space-y-2 text-primary-ivory/80">
              <li>{t({ id: "Desain Interior", en: "Interior Design" })}</li>
              <li>{t({ id: "Furnitur Kustom", en: "Custom Furniture" })}</li>
              <li>{t({ id: "Kitchen Set", en: "Kitchen Set" })}</li>
              <li>{t({ id: "Renovasi", en: "Renovation" })}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t({ id: "Kontak", en: "Contact" })}
            </h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/6281386288099"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary-ivory transition-colors group"
              >
                <Phone className="w-5 h-5 mr-3 text-accent-forest group-hover:text-accent-forest/80" />
                <span className="text-primary-ivory/80 group-hover:text-primary-ivory">
                  +62 813-8628-8099
                </span>
              </a>
              <a
                href="mailto:hello@lenggah.com"
                className="flex items-center hover:text-primary-ivory transition-colors group"
              >
                <Mail className="w-5 h-5 mr-3 text-accent-forest group-hover:text-accent-forest/80" />
                <span className="text-primary-ivory/80 group-hover:text-primary-ivory">
                  hello@lenggah.com
                </span>
              </a>
              <a
                href="https://maps.google.com/?q=-6.2791259,106.849637"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:text-primary-ivory transition-colors group"
              >
                <MapPin className="w-5 h-5 mr-3 text-accent-forest mt-0.5 group-hover:text-accent-forest/80" />
                <div className="text-primary-ivory/80 group-hover:text-primary-ivory">
                  <div className="font-medium">
                    {t({ id: "Workshop", en: "Workshop" })}
                  </div>
                  <div className="text-sm leading-relaxed">
                    Jl. Munggang Gg. H. Guntong
                    <br />
                    RT 10/RW 4, Kel. Balekambang
                    <br />
                    Jakarta Timur 13530
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-tertiary-earth/30 mt-12 pt-8 text-center">
          <p className="text-primary-ivory/80">
            © {currentYear} Lenggah.{" "}
            {t({
              id: "Seluruh hak cipta dilindungi.",
              en: "All rights reserved.",
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};
