"use client";
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../hooks/useLanguage';
import { aboutData } from "../../data/content";

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="spacing-section bg-primary-ivory">
      <div className="spacing-container">
        <div className="text-center mb-16">
          <h2 className="text-heading-1 text-text-charcoal mb-6">
            {t(aboutData.title)}
          </h2>
          <p className="text-body-large text-text-charcoal/70 max-w-3xl mx-auto">
            {t(aboutData.subtitle)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-6 text-body-large text-text-charcoal/80">
              {aboutData.description.id.map((paragraph, index) => (
                <p key={index}>
                  {t({
                    id: paragraph,
                    en: aboutData.description.en[index],
                  })}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {aboutData.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-accent-forest mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-text-charcoal/70">
                    {t(stat.label)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl h-96">
              <Image
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Lenggah Workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority={false}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-charcoal/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-forest rounded-2xl opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-wood rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
