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
      title: {
        id: "Kustom Sesuai Kepribadian Anda",
        en: "Custom to Match Your Personality",
      },
      description: {
        id: "Setiap detail disesuaikan dengan gaya hidup dan kebutuhan unik keluarga Anda.",
        en: "Every detail is tailored to your unique lifestyle and family needs.",
      },
    },
    {
      icon: Leaf,
      title: {
        id: "Material Premium Ramah Lingkungan",
        en: "Premium Eco-Friendly Materials",
      },
      description: {
        id: "Kayu solid berkualitas tinggi dengan finishing yang aman untuk keluarga dan lingkungan.",
        en: "High-quality solid wood with finishing that's safe for family and environment.",
      },
    },
    {
      icon: Wrench,
      title: {
        id: "Desain yang Berfungsi dengan Indah",
        en: "Beautifully Functional Design",
      },
      description: {
        id: "Tidak hanya cantik dipandang, tetapi juga meningkatkan kenyamanan hidup sehari-hari.",
        en: "Not only beautiful to look at, but also enhances daily life comfort.",
      },
    },
    {
      icon: Clock,
      title: {
        id: "Proses Transparan & Tepat Waktu",
        en: "Transparent & Timely Process",
      },
      description: {
        id: "Komitmen waktu yang jelas, update progress rutin, dan garansi kepuasan pelanggan.",
        en: "Clear time commitment, routine progress updates, and customer satisfaction guarantee.",
      },
    },
  ];

  return (
    <section className="spacing-section bg-primary-ivory">
      <div className="spacing-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <Card
                key={index}
                className="text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent-forest rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-heading-4 text-text-charcoal mb-3">
                    {t(prop.title)}
                  </h3>
                  <p className="text-body-small text-gray-600">
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
