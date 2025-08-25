"use client";
import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import { useLanguage } from '../../hooks/useLanguage';

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  budget: string;
  message: string;
  honeypot: string; // Anti-spam field
}

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    location: '',
    budget: '',
    message: '',
    honeypot: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const budgetOptions = [
    { value: '', label: { id: 'Pilih range anggaran', en: 'Select budget range' } },
    { value: 'under-10', label: { id: 'Di bawah 10 juta', en: 'Under 10 million' } },
    { value: '10-25', label: { id: '10 - 25 juta', en: '10 - 25 million' } },
    { value: '25-50', label: { id: '25 - 50 juta', en: '25 - 50 million' } },
    { value: '50-100', label: { id: '50 - 100 juta', en: '50 - 100 million' } },
    { value: 'above-100', label: { id: 'Di atas 100 juta', en: 'Above 100 million' } },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Anti-spam check
    if (formData.honeypot) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send to your backend or form service
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        budget: '',
        message: '',
        honeypot: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappLink = `https://wa.me/6281234567890?text=${encodeURIComponent(
    t({
      id: 'Halo, saya tertarik dengan layanan Lenggah. Mohon informasi lebih lanjut.',
      en: 'Hello, I am interested in Lenggah services. Please provide more information.'
    })
  )}`;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#222222] mb-6 font-serif">
            {t({ id: 'Hubungi Kami', en: 'Contact Us' })}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t({
              id: 'Siap memulai proyek impian Anda? Hubungi kami untuk konsultasi gratis.',
              en: 'Ready to start your dream project? Contact us for a free consultation.'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#6B4F3A] rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#222222]">WhatsApp</h3>
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3C6E47] hover:underline"
                    >
                      +62 812-3456-7890
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#6B4F3A] rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#222222]">Email</h3>
                    <a 
                      href="mailto:info@lenggah.com"
                      className="text-[#3C6E47] hover:underline"
                    >
                      info@lenggah.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#6B4F3A] rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#222222]">
                      {t({ id: 'Jam Operasional', en: 'Operating Hours' })}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t({ id: 'Senin - Sabtu: 08.00 - 17.00', en: 'Monday - Saturday: 08.00 - 17.00' })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#6B4F3A] rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#222222]">
                      {t({ id: 'Area Layanan', en: 'Service Area' })}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t({ id: 'DIY & Jawa Tengah', en: 'DIY & Central Java' })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Anti-spam honeypot field */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#222222] mb-2">
                        {t({ id: 'Nama Lengkap', en: 'Full Name' })} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B4F3A] focus:border-transparent transition-colors"
                        placeholder={t({ id: 'Masukkan nama lengkap', en: 'Enter full name' })}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#222222] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B4F3A] focus:border-transparent transition-colors"
                        placeholder={t({ id: 'Masukkan email', en: 'Enter email' })}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#222222] mb-2">
                        {t({ id: 'Telepon/WhatsApp', en: 'Phone/WhatsApp' })} *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B4F3A] focus:border-transparent transition-colors"
                        placeholder={t({ id: 'Masukkan nomor telepon', en: 'Enter phone number' })}
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-[#222222] mb-2">
                        {t({ id: 'Lokasi Proyek', en: 'Project Location' })} *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B4F3A] focus:border-transparent transition-colors"
                        placeholder={t({ id: 'Kota/Kabupaten', en: 'City/Regency' })}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-[#222222] mb-2">
                      {t({ id: 'Anggaran (Opsional)', en: 'Budget (Optional)' })}
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B4F3A] focus:border-transparent transition-colors"
                    >
                      {budgetOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {t(option.label)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#222222] mb-2">
                      {t({ id: 'Pesan', en: 'Message' })} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B4F3A] focus:border-transparent transition-colors resize-vertical"
                      placeholder={t({ 
                        id: 'Ceritakan tentang proyek yang Anda inginkan...', 
                        en: 'Tell us about your desired project...' 
                      })}
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <Button
                      type="submit"
                      size="lg"
                      icon={Send}
                      iconPosition="right"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting 
                        ? t({ id: 'Mengirim...', en: 'Sending...' })
                        : t({ id: 'Kirim Pesan', en: 'Send Message' })
                      }
                    </Button>

                    {submitStatus === 'success' && (
                      <p className="text-[#3C6E47] text-sm">
                        {t({ 
                          id: 'Pesan berhasil dikirim! Kami akan segera menghubungi Anda.', 
                          en: 'Message sent successfully! We will contact you soon.' 
                        })}
                      </p>
                    )}

                    {submitStatus === 'error' && (
                      <p className="text-red-500 text-sm">
                        {t({ 
                          id: 'Terjadi kesalahan. Silakan coba lagi.', 
                          en: 'An error occurred. Please try again.' 
                        })}
                      </p>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
