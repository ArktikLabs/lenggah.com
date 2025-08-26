"use client";
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';

export const FinalCTA: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
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
    <section className="relative py-20 overflow-hidden">
      {/* Background via next/image with gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Textured wood and greenery background"
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
          placeholder="blur"
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#6B4F3A]/90 to-[#3C6E47]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
          {t({ 
            id: 'Siap "Lenggah" di Ruang yang Nyaman?', 
            en: 'Ready to "Lenggah" in a Comfortable Space?' 
          })}
        </h2>
        
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          {t({ 
            id: 'Mulai konsultasi gratis hari ini dan wujudkan ruang impian Anda bersama tim ahli kami.', 
            en: 'Start a free consultation today and realize your dream space with our expert team.' 
          })}
        </p>

        <Button 
          size="lg"
          icon={ArrowRight}
          iconPosition="right"
          onClick={scrollToContact}
          className="bg-white text-[#6B4F3A] hover:bg-gray-100 shadow-xl"
        >
          {t({ id: 'Konsultasi Gratis', en: 'Free Consultation' })}
        </Button>

        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#3C6E47]/20 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};
