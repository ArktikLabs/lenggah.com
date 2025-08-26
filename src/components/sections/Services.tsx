"use client";
import React from 'react';
import * as Icons from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { useLanguage } from '../../hooks/useLanguage';
import { services } from '../../data/content';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-secondary-wood">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-charcoal mb-6 font-serif">
            {t({ id: "Layanan Kami", en: "Our Services" })}
          </h2>
          <p className="text-xl text-text-charcoal/70 max-w-3xl mx-auto">
            {t({
              id: "Dari konsep hingga realisasi, kami menyediakan layanan lengkap untuk kebutuhan furnitur dan interior Anda.",
              en: "From concept to realization, we provide complete services for your furniture and interior needs.",
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = Icons[
              service.icon as keyof typeof Icons
            ] as React.ComponentType<any>;

            return (
              <Card
                key={service.id}
                className="text-center group hover:-translate-y-2 transition-all duration-300 bg-primary-ivory border-tertiary-earth/20"
              >
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-forest to-accent-forest/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-primary-ivory" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-charcoal mb-4 leading-tight">
                    {t(service.title)}
                  </h3>
                  <p className="text-text-charcoal/70 leading-relaxed">
                    {t(service.description)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
