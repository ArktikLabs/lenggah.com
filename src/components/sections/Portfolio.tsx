"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { useLanguage } from '../../hooks/useLanguage';
import { portfolioItems } from '../../data/content';

type FilterType = 'all' | 'hunian' | 'komersial' | 'furnitur';

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filters = [
    { key: 'all' as FilterType, label: { id: 'Semua', en: 'All' } },
    { key: 'hunian' as FilterType, label: { id: 'Hunian', en: 'Residential' } },
    { key: 'komersial' as FilterType, label: { id: 'Komersial', en: 'Commercial' } },
    { key: 'furnitur' as FilterType, label: { id: 'Furnitur', en: 'Furniture' } },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="spacing-section bg-secondary-wood">
      <div className="spacing-container">
        <div className="text-center mb-16">
          <h2 className="text-heading-1 text-text-charcoal mb-6">
            {t({ id: "Portofolio Kami", en: "Our Portfolio" })}
          </h2>
          <p className="text-body-large text-text-charcoal/70 max-w-3xl mx-auto mb-8">
            {t({
              id: "Lihat berbagai proyek yang telah kami selesaikan dengan standar kualitas terbaik.",
              en: "See various projects we have completed with the best quality standards.",
            })}
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.key
                    ? "bg-accent-forest text-primary-ivory shadow-lg"
                    : "bg-primary-ivory text-text-charcoal hover:bg-accent-forest hover:text-primary-ivory border border-tertiary-earth/20"
                }`}
              >
                {t(filter.label)}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden group hover:-translate-y-2 transition-all duration-300 bg-primary-ivory"
            >
              <div className="relative overflow-hidden h-64">
                <Image
                  src={item.image}
                  alt={t(item.title)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-heading-4 text-text-charcoal">
                    {t(item.title)}
                  </h3>
                  <Badge variant="secondary">
                    {item.category === "hunian"
                      ? t({ id: "Hunian", en: "Residential" })
                      : item.category === "komersial"
                      ? t({ id: "Komersial", en: "Commercial" })
                      : t({ id: "Furnitur", en: "Furniture" })}
                  </Badge>
                </div>
                <div className="flex items-center text-tertiary-earth text-body-small mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {item.location}
                </div>
                <p className="text-body-small text-text-charcoal/70">
                  {t(item.materials)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-body-large text-tertiary-earth">
              {t({
                id: "Portofolio untuk kategori ini segera hadir.",
                en: "Portfolio for this category coming soon.",
              })}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
