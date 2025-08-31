"use client";
import React, { useState } from "react";
import { Phone, Mail, Clock, Send, Building2 } from "lucide-react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { useLanguage } from "../../hooks/useLanguage";

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
    name: "",
    email: "",
    phone: "",
    location: "",
    budget: "",
    message: "",
    honeypot: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Function to detect mobile devices
  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  const budgetOptions = [
    {
      value: "",
      label: { id: "Pilih range anggaran", en: "Select budget range" },
    },
    {
      value: "under-10",
      label: { id: "Di bawah 10 juta", en: "Under 10 million" },
    },
    { value: "10-25", label: { id: "10 - 25 juta", en: "10 - 25 million" } },
    { value: "25-50", label: { id: "25 - 50 juta", en: "25 - 50 million" } },
    { value: "50-100", label: { id: "50 - 100 juta", en: "50 - 100 million" } },
    {
      value: "above-100",
      label: { id: "Di atas 100 juta", en: "Above 100 million" },
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam check
    if (formData.honeypot) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create message content
      const budgetLabel = budgetOptions.find(
        (option) => option.value === formData.budget
      )?.label;
      const messageContent = `
${t({ id: "Nama", en: "Name" })}: ${formData.name}
${t({ id: "Email", en: "Email" })}: ${formData.email}
${t({ id: "Telepon", en: "Phone" })}: ${formData.phone}
${t({ id: "Lokasi", en: "Location" })}: ${formData.location}
${t({ id: "Budget", en: "Budget" })}: ${budgetLabel ? t(budgetLabel) : ""}
${t({ id: "Pesan", en: "Message" })}:
${formData.message}
      `.trim();

      if (isMobileDevice()) {
        // Mobile: Open WhatsApp
        const whatsappMessage = `${t({
          id: "Halo, saya tertarik dengan layanan Lenggah. Berikut detail saya:",
          en: "Hello, I'm interested in Lenggah services. Here are my details:",
        })}

${messageContent}`;

        const whatsappUrl = `https://wa.me/6281386288099?text=${encodeURIComponent(
          whatsappMessage
        )}`;
        window.open(whatsappUrl, "_blank");
      } else {
        // Desktop: Open email client
        const emailSubject = t({
          id: "Konsultasi Furnitur Custom - Lenggah",
          en: "Custom Furniture Consultation - Lenggah",
        });

        const emailBody = `${t({
          id: "Halo tim Lenggah,\n\nSaya tertarik dengan layanan furnitur custom Anda. Berikut detail saya:",
          en: "Hello Lenggah team,\n\nI'm interested in your custom furniture services. Here are my details:",
        })}

${messageContent}

${t({
  id: "Mohon informasi lebih lanjut mengenai layanan yang sesuai dengan kebutuhan saya.\n\nTerima kasih.",
  en: "Please provide more information about services that match my needs.\n\nThank you.",
})}`;

        const mailtoUrl = `mailto:hello@lenggah.com?subject=${encodeURIComponent(
          emailSubject
        )}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoUrl;
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        budget: "",
        message: "",
        honeypot: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappLink = `https://wa.me/6281386288099?text=${encodeURIComponent(
    t({
      id: "Halo, saya tertarik dengan layanan Lenggah. Mohon informasi lebih lanjut.",
      en: "Hello, I am interested in Lenggah services. Please provide more information.",
    })
  )}`;

  return (
    <section id="contact" className="spacing-section bg-primary-ivory">
      <div className="spacing-container">
        <div className="text-center mb-16">
          <h2 className="text-heading-1 text-text-charcoal mb-6">
            {t({
              id: "Mari Mulai Konsultasi Gratis",
              en: "Let's Start Your Free Consultation",
            })}
          </h2>
          <p className="text-body-large text-text-charcoal/70 max-w-3xl mx-auto">
            {t({
              id: "Ceritakan impian ruang Anda kepada kami. Tim ahli Lenggah siap membantu mewujudkannya dengan kualitas terbaik dan harga yang transparan.",
              en: "Tell us about your space dreams. Lenggah's expert team is ready to help make it happen with the best quality and transparent pricing.",
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-forest rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-primary-ivory" />
                  </div>
                  <div>
                    <h3 className="text-heading-4 text-text-charcoal">
                      WhatsApp
                    </h3>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-forest hover:underline"
                    >
                      +62 813-8628-8099
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-forest rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-primary-ivory" />
                  </div>
                  <div>
                    <h3 className="text-heading-4 text-text-charcoal">Email</h3>
                    <a
                      href="mailto:hello@lenggah.com"
                      className="text-accent-forest hover:underline"
                    >
                      hello@lenggah.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <a
                  href="https://maps.google.com/?q=-6.2791259,106.849637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:bg-secondary-wood/10 rounded-lg p-2 -m-2 transition-colors group"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-accent-forest rounded-lg flex items-center justify-center mr-4 group-hover:bg-accent-forest/80 transition-colors">
                      <Building2 className="w-6 h-6 text-primary-ivory" />
                    </div>
                    <div>
                      <h3 className="text-heading-4 text-text-charcoal group-hover:text-accent-forest transition-colors">
                        {t({ id: "Workshop", en: "Workshop" })}
                      </h3>
                      <div className="text-body-small text-text-charcoal/70 group-hover:text-text-charcoal transition-colors">
                        <p>Jl. Munggang Gg. H. Guntong</p>
                        <p>RT 10/RW 4, Kel. Balekambang</p>
                        <p>Jakarta Timur 13530</p>
                      </div>
                      <p className="text-body-small text-accent-forest mt-1 group-hover:underline">
                        {t({
                          id: "Kunjungi dengan janji temu",
                          en: "Visit by appointment",
                        })}
                      </p>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-forest rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-primary-ivory" />
                  </div>
                  <div>
                    <h3 className="text-heading-4 text-text-charcoal">
                      {t({ id: "Jam Operasional", en: "Operating Hours" })}
                    </h3>
                    <p className="text-body-small text-text-charcoal/70">
                      {t({
                        id: "Senin - Sabtu: 08.00 - 17.00",
                        en: "Monday - Saturday: 08.00 - 17.00",
                      })}
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
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text-charcoal mb-2"
                      >
                        {t({ id: "Nama Lengkap", en: "Full Name" })} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-tertiary-earth/30 rounded-lg focus:ring-2 focus:ring-accent-forest focus:border-transparent transition-colors bg-secondary-wood/30"
                        placeholder={t({
                          id: "Masukkan nama lengkap",
                          en: "Enter full name",
                        })}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text-charcoal mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-tertiary-earth/30 rounded-lg focus:ring-2 focus:ring-accent-forest focus:border-transparent transition-colors bg-secondary-wood/30"
                        placeholder={t({
                          id: "Masukkan email",
                          en: "Enter email",
                        })}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#222222] mb-2"
                      >
                        {t({ id: "Telepon/WhatsApp", en: "Phone/WhatsApp" })} *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B4F3A] focus:border-transparent transition-colors"
                        placeholder={t({
                          id: "Masukkan nomor telepon",
                          en: "Enter phone number",
                        })}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="location"
                        className="block text-sm font-medium text-[#222222] mb-2"
                      >
                        {t({ id: "Lokasi Proyek", en: "Project Location" })} *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B4F3A] focus:border-transparent transition-colors"
                        placeholder={t({
                          id: "Kota/Kabupaten",
                          en: "City/Regency",
                        })}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-[#222222] mb-2"
                    >
                      {t({
                        id: "Anggaran (Opsional)",
                        en: "Budget (Optional)",
                      })}
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
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#222222] mb-2"
                    >
                      {t({ id: "Pesan", en: "Message" })} *
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
                        id: "Ceritakan tentang proyek yang Anda inginkan...",
                        en: "Tell us about your desired project...",
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
                        ? t({ id: "Mengirim...", en: "Sending..." })
                        : t({ id: "Kirim Pesan", en: "Send Message" })}
                    </Button>

                    {submitStatus === "success" && (
                      <p className="text-[#3C6E47] text-sm">
                        {t({
                          id: "Pesan berhasil dikirim! Kami akan segera menghubungi Anda.",
                          en: "Message sent successfully! We will contact you soon.",
                        })}
                      </p>
                    )}

                    {submitStatus === "error" && (
                      <p className="text-red-500 text-sm">
                        {t({
                          id: "Terjadi kesalahan. Silakan coba lagi.",
                          en: "An error occurred. Please try again.",
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
