"use client";
import React from 'react';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useLanguage } from '../../hooks/useLanguage';
import { heroData } from "../../data/content";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
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
      <div className="relative z-10 spacing-container text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <Badge variant="secondary">{t(heroData.badge)}</Badge>
          </div>

          {/* Headline */}
          <h1 className="text-display text-white mb-6">
            {t(heroData.title)}
            <span className="block text-primary-ivory mt-2">
              {t(heroData.subtitle)}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-body-large text-gray-200 mb-10 max-w-3xl mx-auto">
            {t(heroData.description)}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => scrollToSection("#contact")}
              className="w-full sm:w-auto"
            >
              {t(heroData.cta.primary)}
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={Play}
              onClick={() => scrollToSection("#portfolio")}
              className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-text-charcoal"
            >
              {t(heroData.cta.secondary)}
            </Button>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-16 p-6 bg-white/10 backdrop-blur-sm rounded-2xl max-w-2xl mx-auto">
          <p className="text-body-large text-white">{t(heroData.philosophy)}</p>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="mt-12 hidden md:flex justify-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
