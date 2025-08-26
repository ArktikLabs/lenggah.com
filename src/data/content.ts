import { PortfolioItem, ServiceItem, ProcessStep, Testimonial, FAQ } from '../types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: {
      id: "Ruang Keluarga Minimalis",
      en: "Minimalist Family Room",
    },
    location: "Kelapa Gading, Jakarta Utara",
    category: "hunian",
    materials: {
      id: "Kayu jati, kain netral, storage tersembunyi",
      en: "Teak wood, neutral fabric, hidden storage",
    },
    image:
      "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "2",
    title: {
      id: "Kitchen Set Modern",
      en: "Modern Kitchen Set",
    },
    location: "Pondok Indah, Jakarta Selatan",
    category: "hunian",
    materials: {
      id: "Kayu mahoni, granit putih, hardware berkualitas",
      en: "Mahogany wood, white granite, quality hardware",
    },
    image:
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "3",
    title: {
      id: "Wardrobe Klasik",
      en: "Classic Wardrobe",
    },
    location: "Menteng, Jakarta Pusat",
    category: "furnitur",
    materials: {
      id: "Kayu trembesi, finishing natural, cermin antique",
      en: "Trembesi wood, natural finish, antique mirror",
    },
    image:
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "4",
    title: {
      id: "Café Interior",
      en: "Café Interior",
    },
    location: "Kemang, Jakarta Selatan",
    category: "komersial",
    materials: {
      id: "Kayu recycle, rotan, lighting industrial",
      en: "Recycled wood, rattan, industrial lighting",
    },
    image:
      "https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "5",
    title: {
      id: "Meja Makan Keluarga",
      en: "Family Dining Table",
    },
    location: "Bekasi, Jawa Barat",
    category: "furnitur",
    materials: {
      id: "Kayu sonokeling, finishing matte, kursi ergonomis",
      en: "Sonokeling wood, matte finish, ergonomic chairs",
    },
    image:
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "6",
    title: {
      id: "Ruang Kerja Rumahan",
      en: "Home Office Space",
    },
    location: "Tangerang, Banten",
    category: "hunian",
    materials: {
      id: "Kayu pinus, rak modular, pencahayaan LED",
      en: "Pine wood, modular shelving, LED lighting",
    },
    image:
      "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const services: ServiceItem[] = [
  {
    id: '1',
    title: {
      id: 'Desain Interior Hunian',
      en: 'Residential Interior Design'
    },
    description: {
      id: 'Apartemen, rumah, dan ruang pribadi yang nyaman dan fungsional',
      en: 'Apartments, homes, and private spaces that are comfortable and functional'
    },
    icon: 'Home'
  },
  {
    id: '2',
    title: {
      id: 'Desain & Pembuatan Furnitur Kustom',
      en: 'Custom Furniture Design & Manufacturing'
    },
    description: {
      id: 'Furnitur sesuai kebutuhan dengan material pilihan berkualitas tinggi',
      en: 'Furniture tailored to your needs with high-quality selected materials'
    },
    icon: 'Armchair'
  },
  {
    id: '3',
    title: {
      id: 'Kitchen Set & Wardrobe',
      en: 'Kitchen Set & Wardrobe'
    },
    description: {
      id: 'Solusi penyimpanan cerdas dengan desain yang selaras dengan ruang',
      en: 'Smart storage solutions with designs that harmonize with your space'
    },
    icon: 'ChefHat'
  },
  {
    id: '4',
    title: {
      id: 'Renovasi Ringan & Styling',
      en: 'Light Renovation & Styling'
    },
    description: {
      id: 'Penyegaran ruang dengan perubahan minimal namun dampak maksimal',
      en: 'Space refreshing with minimal changes but maximum impact'
    },
    icon: 'Paintbrush'
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: '1',
    title: {
      id: 'Konsultasi & Brief',
      en: 'Consultation & Brief'
    },
    description: {
      id: 'Diskusi kebutuhan, gaya, budget, dan timeline proyek Anda',
      en: 'Discuss your needs, style, budget, and project timeline'
    },
    icon: 'MessageCircle'
  },
  {
    id: '2',
    title: {
      id: 'Konsep & Moodboard',
      en: 'Concept & Moodboard'
    },
    description: {
      id: 'Pengembangan konsep desain dengan referensi visual yang jelas',
      en: 'Design concept development with clear visual references'
    },
    icon: 'Palette'
  },
  {
    id: '3',
    title: {
      id: 'Desain Teknis & RAB',
      en: 'Technical Drawings & Quotation'
    },
    description: {
      id: 'Gambar kerja detail dan rincian anggaran biaya yang transparan',
      en: 'Detailed working drawings and transparent cost breakdown'
    },
    icon: 'Ruler'
  },
  {
    id: '4',
    title: {
      id: 'Produksi',
      en: 'Production'
    },
    description: {
      id: 'Proses pembuatan dengan kontrol kualitas ketat dan update berkala',
      en: 'Manufacturing process with strict quality control and regular updates'
    },
    icon: 'Hammer'
  },
  {
    id: '5',
    title: {
      id: 'Pemasangan & Garansi',
      en: 'Installation & Warranty'
    },
    description: {
      id: 'Instalasi profesional dengan garansi kualitas pengerjaan',
      en: 'Professional installation with workmanship quality guarantee'
    },
    icon: 'CheckCircle'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sari Wulandari",
    location: "Jakarta Selatan",
    quote: {
      id: "Tim Lenggah benar-benar memahami konsep ruang yang nyaman. Kitchen set kami tidak hanya indah tapi juga sangat fungsional untuk kebutuhan keluarga.",
      en: "The Lenggah team truly understands the concept of comfortable space. Our kitchen set is not only beautiful but also very functional for family needs.",
    },
    rating: 5,
  },
  {
    id: "2",
    name: "Budi Santoso",
    location: "Jakarta Timur",
    quote: {
      id: "Kualitas furnitur custom dari Lenggah luar biasa. Material kayu pilihan dan finishing yang rapi, benar-benar investment jangka panjang.",
      en: "The quality of custom furniture from Lenggah is extraordinary. Selected wood materials and neat finishing, truly a long-term investment.",
    },
    rating: 5,
  },
  {
    id: "3",
    name: "Maya Indira",
    location: "Tangerang",
    quote: {
      id: "Proses dari konsultasi hingga pemasangan sangat profesional. Tim selalu responsif dan hasil akhir melebihi ekspektasi kami.",
      en: "The process from consultation to installation is very professional. The team is always responsive and the final result exceeded our expectations.",
    },
    rating: 5,
  },
];

export const faqs: FAQ[] = [
  {
    id: "1",
    question: {
      id: "Berapa estimasi waktu produksi furnitur custom?",
      en: "What is the estimated production time for custom furniture?",
    },
    answer: {
      id: "Waktu produksi bervariasi tergantung kompleksitas dan ukuran proyek, umumnya 2-6 minggu setelah desain final disetujui. Kami akan memberikan timeline yang jelas di awal proyek.",
      en: "Production time varies depending on complexity and project size, typically 2-6 weeks after final design approval. We will provide a clear timeline at the beginning of the project.",
    },
  },
  {
    id: "2",
    question: {
      id: "Bahan kayu apa saja yang tersedia?",
      en: "What wood materials are available?",
    },
    answer: {
      id: "Kami menyediakan berbagai kayu berkualitas seperti jati, mahoni, trembesi, sonokeling, dan pinus. Semua kayu telah melalui proses pengeringan yang tepat dan finishing ramah lingkungan.",
      en: "We provide various quality woods such as teak, mahogany, trembesi, sonokeling, and pine. All wood has gone through proper drying processes and eco-friendly finishing.",
    },
  },
  {
    id: "3",
    question: {
      id: "Apakah melayani proyek di luar Jakarta?",
      en: "Do you serve projects outside Jakarta?",
    },
    answer: {
      id: "Ya, kami melayani area Jakarta dan sekitarnya termasuk Bogor, Depok, Tangerang, dan Bekasi (Jabodetabek). Untuk area lain, silakan konsultasikan terlebih dahulu untuk memastikan kelayakan dan biaya tambahan yang diperlukan.",
      en: "Yes, we serve Jakarta and surrounding areas including Bogor, Depok, Tangerang, and Bekasi (Jabodetabek). For other areas, please consult first to ensure feasibility and additional costs required.",
    },
  },
  {
    id: "4",
    question: {
      id: "Bagaimana sistem pembayaran?",
      en: "How is the payment system?",
    },
    answer: {
      id: "Kami menerapkan sistem pembayaran bertahap: 50% DP setelah kontrak, 30% saat produksi dimulai, dan 20% setelah pemasangan selesai. Pembayaran dapat melalui transfer bank atau cash.",
      en: "We apply a staged payment system: 50% down payment after contract, 30% when production starts, and 20% after installation is complete. Payment can be via bank transfer or cash.",
    },
  },
  {
    id: "5",
    question: {
      id: "Apakah ada garansi untuk produk dan jasa?",
      en: "Is there a warranty for products and services?",
    },
    answer: {
      id: "Ya, kami memberikan garansi 1 tahun untuk kualitas pengerjaan dan konstruksi. Garansi tidak termasuk kerusakan akibat pemakaian normal atau perawatan yang tidak tepat.",
      en: "Yes, we provide a 1-year warranty for workmanship quality and construction. Warranty does not include damage due to normal use or improper maintenance.",
    },
  },
];