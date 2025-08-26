import React from 'react';
import dynamic from 'next/dynamic';
import { Header } from '../src/components/layout/Header';
import { Footer } from '../src/components/layout/Footer';
import { Hero } from '../src/components/sections/Hero';
import { generateOrganizationStructuredData } from "../src/utils/structuredData";

// Dynamically load below-the-fold sections to reduce initial JS
const ValueProps = dynamic(() => import('../src/components/sections/ValueProps').then(m => m.ValueProps));
const About = dynamic(() => import('../src/components/sections/About').then(m => m.About));
const Services = dynamic(() => import('../src/components/sections/Services').then(m => m.Services));
const Portfolio = dynamic(() => import('../src/components/sections/Portfolio').then(m => m.Portfolio));
const Process = dynamic(() => import('../src/components/sections/Process').then(m => m.Process));
const Testimonials = dynamic(() => import('../src/components/sections/Testimonials').then(m => m.Testimonials));
const FAQ = dynamic(() => import('../src/components/sections/FAQ').then(m => m.FAQ));
const FinalCTA = dynamic(() => import('../src/components/sections/FinalCTA').then(m => m.FinalCTA));
const Contact = dynamic(() => import('../src/components/sections/Contact').then(m => m.Contact));

// JSON-LD structured data for SEO
const jsonLd = generateOrganizationStructuredData();

export default function Page() {
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
}
