import { PortfolioItem } from "../types";

// Portfolio structured data generator
export const generatePortfolioStructuredData = (
  portfolioItems: PortfolioItem[]
) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portfolio Lenggah",
    description: "Koleksi proyek furnitur dan interior design kustom Lenggah",
    numberOfItems: portfolioItems.length,
    itemListElement: portfolioItems.map((item, index) => ({
      "@type": "CreativeWork",
      position: index + 1,
      name: item.title.id,
      description: `${item.title.id} - ${item.materials.id}`,
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
export const generateServiceStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Furnitur & Desain Interior Kustom",
    description:
      "Layanan lengkap furnitur dan desain interior kustom dari konsep hingga pemasangan",
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
  faqs: Array<{ question: { id: string }; answer: { id: string } }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question.id,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.id,
      },
    })),
  };
};

// Organization structured data with enhanced business info
export const generateOrganizationStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lenggah",
    alternateName: "Lenggah Studio",
    description:
      "Studio Lenggah menghadirkan furnitur & interior kustom berfokus pada kenyamanan. Dari konsep hingga pemasangan, material terkurasi & garansi.",
    url: "https://lenggah.com",
    logo: "https://lenggah.com/favicon.svg",
    image:
      "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200",
    telephone: "+62 813-8628-8099",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Munggang Gg. H. Guntong RT 10/RW 4, Kel. Balekambang",
      addressLocality: "Kramat Jati",
      addressRegion: "Jakarta Timur",
      postalCode: "13530",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-6.2791259",
      longitude: "106.849637",
    },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62 813-8628-8099",
      contactType: "customer service",
      availableLanguage: ["Indonesian", "English"],
    },
    serviceType: [
      "Custom Furniture",
      "Interior Design",
      "Kitchen Set",
      "Wardrobe",
      "Living Room Furniture",
    ],
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
      {
        "@type": "Place",
        name: "Batam",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Furniture & Interior Design Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Custom Furniture",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Kitchen Set Custom",
                category: "Furniture",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Wardrobe Custom",
                category: "Furniture",
              },
            },
          ],
        },
      ],
    },
  };
};
