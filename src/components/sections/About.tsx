"use client";
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../hooks/useLanguage';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#222222] mb-8 font-serif">
              {t({ id: 'Tentang Lenggah', en: 'About Lenggah' })}
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                {t({
                  id: 'Lenggah adalah studio furnitur & interior yang berangkat dari filosofi duduk—menciptakan ruang yang menenangkan, mendukung aktivitas, dan awet digunakan.',
                  en: 'Lenggah is a furniture & interior studio that stems from the philosophy of sitting—creating spaces that are calming, support activities, and are durable to use.'
                })}
              </p>
              <p>
                {t({
                  id: 'Dengan fokus pada material alami pilihan dan desain yang mengutamakan fungsi, kami menghadirkan solusi interior yang tidak hanya indah dipandang, tetapi juga nyaman untuk dihuni sehari-hari.',
                  en: 'With a focus on selected natural materials and design that prioritizes function, we present interior solutions that are not only beautiful to look at, but also comfortable for daily living.'
                })}
              </p>
              <p>
                {t({
                  id: 'Setiap proyek kami tangani dengan perhatian detail yang tinggi, mulai dari pemilihan kayu, proses produksi, hingga finishing yang ramah lingkungan.',
                  en: 'We handle every project with high attention to detail, from wood selection, production process, to eco-friendly finishing.'
                })}
              </p>
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B4F3A]/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#3C6E47] rounded-2xl opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#F5EFE6] rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
