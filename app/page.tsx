"use client";

import React, { useEffect } from 'react';
import { Header } from '../src/components/layout/Header';
import { Footer } from '../src/components/layout/Footer';
import { Hero } from '../src/components/sections/Hero';
import { ValueProps } from '../src/components/sections/ValueProps';
import { About } from '../src/components/sections/About';
import { Services } from '../src/components/sections/Services';
import { Portfolio } from '../src/components/sections/Portfolio';
import { Process } from '../src/components/sections/Process';
import { Testimonials } from '../src/components/sections/Testimonials';
import { FAQ } from '../src/components/sections/FAQ';
import { FinalCTA } from '../src/components/sections/FinalCTA';
import { Contact } from '../src/components/sections/Contact';
import { useLanguage } from '../src/hooks/useLanguage';

export default function Page() {
  const { language } = useLanguage();

  useEffect(() => {
    const titles = {
      id: 'Lenggah — Furnitur & Desain Interior Kustom yang Nyaman dan Tahan Lama',
      en: 'Lenggah — Custom Furniture & Interior Design for Comfort and Durability',
    } as const;

    const descriptions = {
      id: 'Studio Lenggah menghadirkan furnitur & interior kustom berfokus pada kenyamanan. Dari konsep hingga pemasangan, material terkurasi & garansi.',
      en: 'Lenggah Studio creates custom furniture & interiors focused on comfort. From concept to installation, curated materials & warranty.',
    } as const;

    document.title = titles[language];

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[language]);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = descriptions[language];
      document.head.appendChild(meta);
    }

    const ogTags = [
      { property: 'og:title', content: titles[language] },
      { property: 'og:description', content: descriptions[language] },
      { property: 'og:image', content: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Lenggah' },
    ];

    ogTags.forEach(({ property, content }) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Lenggah',
      description: descriptions[language],
      url: window.location.origin,
      logo: `${window.location.origin}/logo.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+62812-3456-7890',
        contactType: 'customer service',
        availableLanguage: ['id', 'en'],
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'ID',
        addressRegion: 'DI Yogyakarta',
      },
      sameAs: [
        'https://instagram.com/lenggah',
        'https://facebook.com/lenggah',
      ],
    } as const;

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, [language]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

