// SEO configuration for the Lenggah website
export const seoConfig = {
  siteUrl: "https://lenggah.com",

  // Function to generate OG image URL
  getOgImageUrl: (lang: "id" | "en" = "id") =>
    `https://lenggah.com/og/og-${lang}.jpg`,

  // Bilingual content
  content: {
    id: {
      defaultTitle:
        "Lenggah — Furnitur & Desain Interior Kustom yang Nyaman dan Tahan Lama",
      titleTemplate: "%s | Lenggah",
      defaultDescription:
        "Studio Lenggah menghadirkan furnitur & interior kustom berfokus pada kenyamanan. Dari konsep hingga pemasangan, material terkurasi & garansi.",
      locale: "id_ID",

      // Keywords for better SEO (Indonesian)
      keywords: [
        "furnitur kustom indonesia",
        "desain interior indonesia",
        "kitchen set custom",
        "wardrobe custom",
        "mebel custom indonesia",
        "interior design indonesia",
        "furniture maker indonesia",
        "furnitur kustom jakarta",
        "desain interior jakarta",
        "furnitur kayu",
        "kitchen set minimalis",
        "lemari custom",
        "desain interior rumah",
        "furnitur rumah custom",
        "interior designer",
        "furniture design",
        "mebel berkualitas",
        "furniture online indonesia",
        "furnitur jakarta",
        "interior design surabaya",
        "furniture bandung",
        "custom furniture medan",
        "mebel semarang",
        "furnitur makassar",
        "interior design yogyakarta",
        "furniture solo",
        "mebel denpasar",
        "furnitur batam",
        "furnitur kramat jati",
        "konsultasi interior design",
        "jasa pembuatan furniture",
        "tukang kayu jakarta timur",
        "workshop furniture",
        "furniture workshop yogyakarta",
      ],

      // Page-specific SEO data (Indonesian)
      pages: {
        home: {
          title:
            "Lenggah — Furnitur & Desain Interior Kustom Seluruh Indonesia",
          description:
            "Studio Lenggah melayani seluruh Indonesia dengan furnitur & interior kustom berkualitas. Dari konsep hingga pemasangan dengan material terkurasi & garansi.",
        },
        about: {
          title:
            "Tentang Lenggah — Studio Furnitur & Interior Design Indonesia",
          description:
            "Kenali lebih dekat Studio Lenggah, tim profesional yang melayani seluruh Indonesia dalam menciptakan furnitur dan interior design kustom berkualitas tinggi.",
        },
        services: {
          title:
            "Layanan — Custom Furniture & Interior Design Seluruh Indonesia",
          description:
            "Layanan nasional Lenggah: konsultasi gratis, desain 3D, custom furniture, kitchen set, wardrobe, dan interior design dengan pengiriman ke seluruh Indonesia.",
        },
        portfolio: {
          title:
            "Portfolio — Proyek Furnitur & Interior Design Terbaik Indonesia",
          description:
            "Lihat koleksi proyek terbaik Lenggah di seluruh Indonesia: ruang keluarga, kitchen set, wardrobe, dan interior design untuk hunian maupun komersial.",
        },
        contact: {
          title: "Kontak — Hubungi Lenggah untuk Konsultasi Gratis",
          description:
            "Konsultasi gratis dengan tim Lenggah. Hubungi kami untuk mewujudkan furnitur dan interior design impian Anda. Melayani seluruh Indonesia.",
        },
      },
    },

    en: {
      defaultTitle:
        "Lenggah — Custom Furniture & Interior Design that's Comfortable and Durable",
      titleTemplate: "%s | Lenggah",
      defaultDescription:
        "Lenggah Studio creates custom furniture & interiors focused on comfort. From concept to installation, curated materials & warranty included.",
      locale: "en_US",

      // Keywords for better SEO (English)
      keywords: [
        "custom furniture indonesia",
        "interior design indonesia",
        "custom kitchen set",
        "custom wardrobe",
        "bespoke furniture indonesia",
        "furniture maker jakarta",
        "interior designer jakarta",
        "custom furniture jakarta",
        "furniture design indonesia",
        "solid wood furniture",
        "minimalist kitchen set",
        "custom cabinet",
        "home interior design",
        "custom home furniture",
        "professional interior designer",
        "furniture craftsmanship",
        "quality furniture indonesia",
        "online furniture indonesia",
        "jakarta furniture",
        "surabaya interior design",
        "bandung furniture",
        "medan custom furniture",
        "semarang furniture",
        "makassar furniture",
        "yogyakarta interior design",
        "solo furniture",
        "denpasar furniture",
        "batam furniture",
        "furniture workshop",
        "interior design consultation",
        "custom furniture service",
        "furniture manufacturing",
        "woodworking jakarta",
        "furniture showroom",
      ],

      // Page-specific SEO data (English)
      pages: {
        home: {
          title:
            "Lenggah — Custom Furniture & Interior Design Across Indonesia",
          description:
            "Lenggah Studio serves all of Indonesia with quality custom furniture & interiors. From concept to installation with curated materials & warranty.",
        },
        about: {
          title:
            "About Lenggah — Indonesia's Furniture & Interior Design Studio",
          description:
            "Get to know Lenggah Studio, a professional team serving all of Indonesia in creating high-quality custom furniture and interior design.",
        },
        services: {
          title:
            "Services — Custom Furniture & Interior Design Across Indonesia",
          description:
            "Lenggah's nationwide services: free consultation, 3D design, custom furniture, kitchen sets, wardrobes, and interior design with delivery across Indonesia.",
        },
        portfolio: {
          title:
            "Portfolio — Indonesia's Best Furniture & Interior Design Projects",
          description:
            "View Lenggah's best project collection across Indonesia: living rooms, kitchen sets, wardrobes, and interior design for residential and commercial spaces.",
        },
        contact: {
          title: "Contact — Reach Lenggah for Free Consultation",
          description:
            "Free consultation with Lenggah's team. Contact us to realize your dream furniture and interior design. Serving all of Indonesia.",
        },
      },
    },
  },

  // Social media links
  social: {
    instagram: "https://instagram.com/lenggah",
    facebook: "https://facebook.com/lenggah",
    whatsapp: "https://wa.me/6281386288099",
    email: "hello@lenggah.com",
  },

  // Business information
  business: {
    name: "Lenggah",
    fullName: "Lenggah Studio",
    description: {
      id: "Studio Lenggah menghadirkan furnitur & interior kustom berfokus pada kenyamanan. Dari konsep hingga pemasangan, material terkurasi & garansi.",
      en: "Lenggah Studio creates custom furniture & interiors focused on comfort. From concept to installation, curated materials & warranty included.",
    },
    phone: "+62 813-8628-8099",
    email: "hello@lenggah.com",
    address: {
      street: "Jl. Munggang Gg. H. Guntong RT 10/RW 4, Kel. Balekambang",
      city: "Jakarta Timur",
      region: "DKI Jakarta",
      postalCode: "13530",
      country: "Indonesia",
      countryCode: "ID",
    },
    geo: {
      latitude: -6.2791259,
      longitude: 106.849637,
    },
    foundingYear: 2020,
    serviceAreas: [
      "Seluruh Indonesia",
      "Jakarta",
      "Surabaya",
      "Bandung",
      "Medan",
      "Semarang",
      "Makassar",
      "Palembang",
      "Tangerang",
      "Depok",
      "Bekasi",
      "Bogor",
      "Batam",
      "Pekanbaru",
      "Bandar Lampung",
      "Malang",
      "Yogyakarta",
      "Solo",
      "Denpasar",
      "Samarinda",
    ],
  },

  // Image settings
  images: {
    defaultOg: "/images/hero-1648776.jpg",
    logo: "/favicon.svg",
    appleTouchIcon: "/apple-touch-icon.png",
  },
};

// Helper function to get SEO content by language
export const getSEOContent = (language: 'id' | 'en' = 'id') => {
  return seoConfig.content[language];
};

export default seoConfig;
