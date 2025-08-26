"use client";
import React from 'react';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useLanguage } from '../../hooks/useLanguage';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image via next/image for better LCP */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Warm interior furniture background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <Badge variant="secondary">
              {t({ 
                id: 'Kustom • Fungsional • Tahan Lama', 
                en: 'Custom • Functional • Durable' 
              })}
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-serif">
            {t({ 
              id: 'Rancang Furnitur & Interior yang Mengajak Anda', 
              en: 'Craft Furniture & Interiors That Invite You to' 
            })}
            <span className="block text-[#F5EFE6] mt-2">
              {t({ id: '"Lenggah"', en: '"Lenggah" (Sit)' })}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t({ 
              id: 'Kenyamanan yang terasa, estetika yang bertahan. Kustom dari ide hingga pemasangan.', 
              en: 'Comfort you can feel, aesthetics that last. Custom from concept to installation.' 
            })}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => scrollToSection('#contact')}
              className="w-full sm:w-auto"
            >
              {t({ id: 'Mulai Konsultasi', en: 'Start Consultation' })}
            </Button>
            <Button 
              variant="outline"
              size="lg"
              icon={Play}
              onClick={() => scrollToSection('#portfolio')}
              className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-[#6B4F3A]"
            >
              {t({ id: 'Lihat Portofolio', en: 'View Portfolio' })}
            </Button>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-16 p-6 bg-white/10 backdrop-blur-sm rounded-2xl max-w-2xl mx-auto">
          <p className="text-white text-lg leading-relaxed">
            {t({
              id: 'Dalam bahasa Jawa, lenggah berarti "duduk". Kami merancang agar tubuh, pikiran, dan ruang dapat "lenggah"—tenang, nyaman, dan berkelanjutan.',
              en: 'In Javanese, lenggah means "to sit". We design so body, mind, and space can "lenggah"—calm, comfortable, and enduring.'
            })}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
