"use client";
import React from 'react';
import { CheckCircle, Leaf, Wrench, Clock } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { useLanguage } from '../../hooks/useLanguage';

export const ValueProps: React.FC = () => {
  const { t } = useLanguage();

  const valueProps = [
    {
      icon: CheckCircle,
      title: { id: 'Kustom Penuh', en: 'Fully Custom' },
      description: { id: 'Ukuran, material, dan detail sesuai kebutuhan.', en: 'Dimensions, materials, and details tailored to your needs.' }
    },
    {
      icon: Leaf,
      title: { id: 'Material Telah Kurasi', en: 'Curated Materials' },
      description: { id: 'Kayu solid, finishing ramah lingkungan.', en: 'Solid wood, eco-friendly finishing.' }
    },
    {
      icon: Wrench,
      title: { id: 'Desain Fungsional', en: 'Functional Design' },
      description: { id: 'Indah dipandang, nyaman digunakan.', en: 'Beautiful to look at, comfortable to use.' }
    },
    {
      icon: Clock,
      title: { id: 'Produksi & Pemasangan Rapi', en: 'Neat Production & Installation' },
      description: { id: 'Tepat waktu, garansi pengerjaan.', en: 'On time, workmanship guarantee.' }
    }
  ];

  return (
    <section className="py-20 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <Card key={index} className="text-center hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#3C6E47] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#222222] mb-3">
                    {t(prop.title)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(prop.description)}
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
