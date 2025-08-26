import { PortfolioItem } from "../types";

// Portfolio structured data generator
export const generatePortfolioStructuredData = (
  portfolioItems: PortfolioItem[],
  language: 'id' | 'en' = 'id'
) => {
  const isEnglish = language === 'en';
  
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: isEnglish ? "Lenggah Portfolio" : "Portfolio Lenggah",
    description: isEnglish 
      ? "Collection of Lenggah's custom furniture and interior design projects"
      : "Koleksi proyek furnitur dan interior design kustom Lenggah",
    numberOfItems: portfolioItems.length,
    itemListElement: portfolioItems.map((item, index) => ({
      "@type": "CreativeWork",
      position: index + 1,
      name: isEnglish ? item.title.en : item.title.id,
      description: `${isEnglish ? item.title.en : item.title.id} - ${isEnglish ? item.materials.en : item.materials.id}`,
      image: item.image,
      creator: {
        "@type": "Organization",
        name: "Lenggah Studio",
      },
      locationCreated: {
        "@type": "Place",
        name: item.location,
      },
    })),
  };
};

// Service structured data generator
export const generateServiceStructuredData = (language: 'id' | 'en' = 'id') => {
  const isEnglish = language === 'en';
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEnglish ? "Custom Furniture & Interior Design" : "Furnitur & Desain Interior Kustom",
    description: isEnglish
      ? "Complete custom furniture and interior design services from concept to installation"
      : "Layanan lengkap furnitur dan desain interior kustom dari konsep hingga pemasangan",
    provider: {
      "@type": "Organization",
      name: "Lenggah Studio",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta Timur",
        addressCountry: "ID",
      },
    },
    serviceType: [
      "Custom Furniture Design",
      "Interior Design Consultation",
      "Kitchen Set Custom",
      "Wardrobe Design",
      "Living Room Furniture",
      "Bedroom Furniture",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Lenggah",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Konsultasi Desain",
            description: "Konsultasi gratis dengan desainer berpengalaman",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desain 3D",
            description:
              "Visualisasi 3D untuk membantu Anda melihat hasil akhir",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Produksi & Pemasangan",
            description:
              "Produksi dengan material berkualitas dan pemasangan profesional",
          },
        },
      ],
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Indonesia",
      },
      {
        "@type": "Place",
        name: "Jakarta",
      },
      {
        "@type": "Place",
        name: "Surabaya",
      },
      {
        "@type": "Place",
        name: "Bandung",
      },
      {
        "@type": "Place",
        name: "Medan",
      },
      {
        "@type": "Place",
        name: "Semarang",
      },
      {
        "@type": "Place",
        name: "Makassar",
      },
      {
        "@type": "Place",
        name: "Yogyakarta",
      },
      {
        "@type": "Place",
        name: "Denpasar",
      },
    ],
  };
};

// FAQ structured data generator
export const generateFAQStructuredData = (
  faqs: Array<{ question: { id: string; en: string }; answer: { id: string; en: string } }>,
  language: 'id' | 'en' = 'id'
) => {
  const isEnglish = language === 'en';
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: isEnglish ? faq.question.en : faq.question.id,
      acceptedAnswer: {
        "@type": "Answer",
        text: isEnglish ? faq.answer.en : faq.answer.id,
      },
    })),
  };
};

// Organization structured data with enhanced business info
export const generateOrganizationStructuredData = (language: 'id' | 'en' = 'id') => {
  const isEnglish = language === 'en';
  
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lenggah",
    alternateName: isEnglish
      ? "Lenggah Custom Furniture"
      : "Lenggah Furnitur Kustom",
    description: isEnglish
      ? "Premium custom furniture and interior design services in Jakarta, Indonesia"
      : "Layanan furnitur kustom dan desain interior premium di Jakarta, Indonesia",
    url: "https://lenggah.com",
    logo: "https://lenggah.com/logo.png",
    sameAs: ["https://instagram.com/lenggah", "https://facebook.com/lenggah"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Munggang Gg. H. Guntong RT 10/RW 4, Kel. Balekambang",
      addressLocality: "Jakarta Timur",
      addressRegion: "DKI Jakarta",
      postalCode: "13530",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62 813-8628-8099",
      contactType: isEnglish ? "customer service" : "layanan pelanggan",
      availableLanguage: ["Indonesian", "English"],
    },
    foundingDate: "2020",
    numberOfEmployees: "10-50",
    priceRange: "$$-$$$",
    areaServed: {
      "@type": "Place",
      name: isEnglish
        ? "Jakarta and surrounding areas"
        : "Jakarta dan sekitarnya",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: isEnglish
            ? "Custom Furniture Design"
            : "Desain Furnitur Kustom",
          description: isEnglish
            ? "Bespoke furniture crafted to your exact specifications"
            : "Furnitur khusus yang dibuat sesuai spesifikasi Anda",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: isEnglish ? "Interior Design" : "Desain Interior",
          description: isEnglish
            ? "Complete interior design solutions for homes and offices"
            : "Solusi desain interior lengkap untuk rumah dan kantor",
        },
      },
    ],
  };
};
