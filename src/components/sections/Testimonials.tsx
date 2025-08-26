"use client";
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { useLanguage } from '../../hooks/useLanguage';
import { testimonials } from '../../data/content';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="spacing-section bg-white">
      <div className="spacing-container">
        <div className="text-center mb-16">
          <h2 className="text-heading-1 text-text-charcoal mb-6">
            {t({ id: "Testimoni Klien", en: "Client Testimonials" })}
          </h2>
          <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
            {t({
              id: "Kepercayaan dan kepuasan klien adalah prioritas utama kami.",
              en: "Client trust and satisfaction are our top priorities.",
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative group hover:-translate-y-2 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Quote className="w-8 h-8 text-[#6B4F3A]" />
                </div>

                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <blockquote className="text-body-small text-gray-700 mb-6 italic">
                  "{t(testimonial.quote)}"
                </blockquote>

                <div className="border-t border-gray-100 pt-4">
                  <div className="text-heading-4 text-text-charcoal">
                    {testimonial.name}
                  </div>
                  <div className="text-body-small text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
