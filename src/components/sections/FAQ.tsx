"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { faqs } from '../../data/content';

export const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="py-20 bg-[#F5EFE6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#222222] mb-6 font-serif">
            {t({ id: 'Pertanyaan yang Sering Diajukan', en: 'Frequently Asked Questions' })}
          </h2>
          <p className="text-xl text-gray-600">
            {t({
              id: 'Temukan jawaban untuk pertanyaan umum seputar layanan kami.',
              en: 'Find answers to common questions about our services.'
            })}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openItems.has(faq.id);
            
            return (
              <div key={faq.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-[#222222] pr-4">
                    {t(faq.question)}
                  </h3>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#6B4F3A] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#6B4F3A] flex-shrink-0" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-5 border-t border-gray-100">
                    <div className="pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {t(faq.answer)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
