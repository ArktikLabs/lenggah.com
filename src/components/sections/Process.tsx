"use client";
import React from 'react';
import * as Icons from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { useLanguage } from '../../hooks/useLanguage';
import { processSteps } from '../../data/content';

export const Process: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-20 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#222222] mb-6 font-serif">
            {t({ id: 'Proses Kerja Kami', en: 'Our Work Process' })}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t({
              id: 'Lima langkah terstruktur untuk memastikan hasil yang sesuai dengan harapan Anda.',
              en: 'Five structured steps to ensure results that meet your expectations.'
            })}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#6B4F3A] rounded-full opacity-20"></div>

          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const Icon = Icons[step.icon as keyof typeof Icons] as React.ComponentType<any>;
              const isEven = index % 2 === 0;

              return (
                <div key={step.id} className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <Card className="group hover:-translate-y-2 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-[#6B4F3A] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="w-8 h-8 bg-[#3C6E47] rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-[#222222] mb-3">
                          {t(step.title)}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {t(step.description)}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline node */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-6 h-6 bg-[#6B4F3A] rounded-full border-4 border-[#F5EFE6] shadow-lg"></div>
                  </div>

                  <div className="hidden lg:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
