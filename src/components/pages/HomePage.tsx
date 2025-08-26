import React from 'react';
import dynamic from 'next/dynamic';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Hero } from '../sections/Hero';
import { generateOrganizationStructuredData } from "../../utils/structuredData";

// Dynamically load below-the-fold sections to reduce initial JS
const ValueProps = dynamic(() => import('../sections/ValueProps').then(m => m.ValueProps));
const About = dynamic(() => import('../sections/About').then(m => m.About));
const Services = dynamic(() => import('../sections/Services').then(m => m.Services));
const Portfolio = dynamic(() => import('../sections/Portfolio').then(m => m.Portfolio));
const Process = dynamic(() => import('../sections/Process').then(m => m.Process));
const Testimonials = dynamic(() => import('../sections/Testimonials').then(m => m.Testimonials));
const FAQ = dynamic(() => import('../sections/FAQ').then(m => m.FAQ));
const FinalCTA = dynamic(() => import('../sections/FinalCTA').then(m => m.FinalCTA));
const Contact = dynamic(() => import('../sections/Contact').then(m => m.Contact));

interface HomePageProps {
  locale?: 'id' | 'en';
}

export const HomePage: React.FC<HomePageProps> = ({ locale = 'id' }) => {
  // For static generation, we use the locale prop
  // The language context will take over on client-side
  const currentLanguage = locale;
  
  // JSON-LD structured data for SEO
  const jsonLd = generateOrganizationStructuredData(currentLanguage);

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen">
        <Header />
        <main role="main">
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
    </>
  );
};
