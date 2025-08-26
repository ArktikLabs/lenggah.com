import {
  PortfolioItem,
  ServiceItem,
  ProcessStep,
  Testimonial,
  FAQ,
} from "../types";

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
    id: "1",
    title: {
      id: "Desain Interior Hunian yang Menenangkan",
      en: "Residential Interior that Brings Peace",
    },
    description: {
      id: "Rumah yang benar-benar terasa seperti rumah—tempat tubuh dan pikiran Anda bisa beristirahat",
      en: "Homes that truly feel like home—where your body and mind can rest",
    },
    icon: "Home",
  },
  {
    id: "2",
    title: {
      id: "Furnitur Kustom yang Mencerminkan Anda",
      en: "Custom Furniture that Reflects You",
    },
    description: {
      id: "Setiap kurva dan tekstur dirancang khusus untuk gaya hidup dan kepribadian unik Anda",
      en: "Every curve and texture designed specifically for your unique lifestyle and personality",
    },
    icon: "Armchair",
  },
  {
    id: "3",
    title: {
      id: "Kitchen Set & Wardrobe Impian",
      en: "Dream Kitchen Set & Wardrobe",
    },
    description: {
      id: "Ruang masak yang menginspirasi kreativitas dan penyimpanan yang membuat hidup lebih teratur",
      en: "Cooking spaces that inspire creativity and storage that makes life more organized",
    },
    icon: "ChefHat",
  },
  {
    id: "4",
    title: {
      id: "Transformasi Ruang Tanpa Renovasi Besar",
      en: "Space Transformation Without Major Renovation",
    },
    description: {
      id: "Perubahan dramatis dengan sentuhan yang tepat—hemat biaya, dampak maksimal",
      en: "Dramatic changes with the right touch—cost-effective, maximum impact",
    },
    icon: "Paintbrush",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "1",
    title: {
      id: "Konsultasi Mendalam & Pemahaman Visi",
      en: "In-Depth Consultation & Vision Understanding",
    },
    description: {
      id: "Kami dengarkan impian Anda dengan seksama—gaya hidup, preferensi, dan anggaran yang realistis",
      en: "We listen to your dreams carefully—lifestyle, preferences, and realistic budget",
    },
    icon: "MessageCircle",
  },
  {
    id: "2",
    title: {
      id: "Konsep Kreatif & Visualisasi Nyata",
      en: "Creative Concept & Real Visualization",
    },
    description: {
      id: "Ide Anda menjadi gambaran visual yang jelas—Anda bisa merasakan hasilnya sebelum dibuat",
      en: "Your ideas become clear visual representations—you can feel the result before it's made",
    },
    icon: "Palette",
  },
  {
    id: "3",
    title: {
      id: "Desain Teknis & Transparansi Biaya",
      en: "Technical Design & Cost Transparency",
    },
    description: {
      id: "Gambar kerja detail dan breakdown biaya yang jujur—tidak ada biaya tersembunyi",
      en: "Detailed working drawings and honest cost breakdown—no hidden fees",
    },
    icon: "Ruler",
  },
  {
    id: "4",
    title: {
      id: "Produksi dengan Standar Kualitas Tinggi",
      en: "Production with High Quality Standards",
    },
    description: {
      id: "Proses pembuatan yang teliti dengan update progress rutin—Anda selalu tahu perkembangannya",
      en: "Meticulous manufacturing process with routine progress updates—you always know the development",
    },
    icon: "Hammer",
  },
  {
    id: "5",
    title: {
      id: "Pemasangan Sempurna & Jaminan Kepuasan",
      en: "Perfect Installation & Satisfaction Guarantee",
    },
    description: {
      id: "Instalasi yang rapi dan garansi 1 tahun—Anda puas atau kami perbaiki",
      en: "Neat installation and 1-year warranty—you're satisfied or we fix it",
    },
    icon: "CheckCircle",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sari Wulandari",
    location: "Jakarta Selatan",
    quote: {
      id: "Tim Lenggah benar-benar memahami apa yang kami inginkan. Kitchen set kami tidak hanya cantik, tapi juga sangat fungsional—memasak jadi lebih menyenangkan dan keluarga semakin sering berkumpul.",
      en: "The Lenggah team truly understands what we wanted. Our kitchen set is not only beautiful but also very functional—cooking has become more enjoyable and the family gathers more often.",
    },
    rating: 5,
  },
  {
    id: "2",
    name: "Budi Santoso",
    location: "Jakarta Timur",
    quote: {
      id: "Investasi terbaik yang pernah kami lakukan! Kualitas furnitur dari Lenggah luar biasa—material kayu pilihan, finishing rapi, dan sudah 2 tahun masih seperti baru. Anak-anak juga suka dengan wardrobe barunya.",
      en: "The best investment we've ever made! The quality of Lenggah furniture is extraordinary—selected wood materials, neat finishing, and after 2 years it still looks new. The kids also love their new wardrobe.",
    },
    rating: 5,
  },
  {
    id: "3",
    name: "Maya Indira",
    location: "Tangerang",
    quote: {
      id: "Dari awal konsultasi hingga instalasi, semuanya sangat profesional dan komunikatif. Yang paling kami suka, mereka selalu update progress dan hasil akhirnya bahkan melebihi ekspektasi. Rumah jadi terasa lebih nyaman!",
      en: "From initial consultation to installation, everything was very professional and communicative. What we love most is that they always update progress and the final result even exceeded expectations. The house feels so much more comfortable!",
    },
    rating: 5,
  },
];

export const faqs: FAQ[] = [
  {
    id: "1",
    question: {
      id: "Berapa lama waktu yang dibutuhkan untuk furnitur custom saya jadi?",
      en: "How long does it take for my custom furniture to be completed?",
    },
    answer: {
      id: "Waktu produksi umumnya 2-6 minggu tergantung kompleksitas dan ukuran proyek. Kami akan memberikan timeline yang pasti sejak awal dan selalu update progress secara rutin, jadi Anda tidak perlu khawatir dengan ketidakpastian.",
      en: "Production time is typically 2-6 weeks depending on complexity and project size. We will provide a definite timeline from the start and always update progress regularly, so you don't have to worry about uncertainty.",
    },
  },
  {
    id: "2",
    question: {
      id: "Kayu apa saja yang tersedia dan bagaimana kualitasnya?",
      en: "What wood types are available and how is the quality?",
    },
    answer: {
      id: "Kami hanya menggunakan kayu berkualitas premium seperti jati, mahoni, trembesi, sonokeling, dan pinus yang sudah melalui proses pengeringan dan seleksi ketat. Semua kayu telah dirawat dengan finishing ramah lingkungan untuk memastikan daya tahan puluhan tahun.",
      en: "We only use premium quality woods such as teak, mahogany, trembesi, sonokeling, and pine that have gone through strict drying and selection processes. All wood has been treated with eco-friendly finishing to ensure decades of durability.",
    },
  },
  {
    id: "3",
    question: {
      id: "Apakah bisa melayani di luar Jakarta? Bagaimana dengan ongkos kirim?",
      en: "Can you serve areas outside Jakarta? How about shipping costs?",
    },
    answer: {
      id: "Ya, kami melayani seluruh Jabodetabek dengan gratis ongkir untuk pembelian minimal 20 juta. Untuk area lain di Indonesia, silakan konsultasi dulu untuk memastikan kelayakan dan transparansi biaya tambahan yang diperlukan.",
      en: "Yes, we serve the entire Jabodetabek area with free shipping for minimum purchases of 20 million. For other areas in Indonesia, please consult first to ensure feasibility and transparency of additional costs required.",
    },
  },
  {
    id: "4",
    question: {
      id: "Bagaimana sistem pembayaran? Apakah bisa dicicil?",
      en: "How is the payment system? Can it be paid in installments?",
    },
    answer: {
      id: "Sistem pembayaran sangat fleksibel: 50% DP setelah kontrak, 30% saat produksi dimulai, dan 20% setelah instalasi selesai. Kami juga menerima pembayaran melalui transfer bank, tunai, bahkan kartu kredit untuk kemudahan Anda.",
      en: "The payment system is very flexible: 50% down payment after contract, 30% when production starts, and 20% after installation is complete. We also accept payment via bank transfer, cash, even credit cards for your convenience.",
    },
  },
  {
    id: "5",
    question: {
      id: "Apa yang terjadi jika ada masalah setelah pemasangan?",
      en: "What happens if there are problems after installation?",
    },
    answer: {
      id: "Kami memberikan garansi penuh 1 tahun untuk kualitas pengerjaan dan konstruksi. Jika ada masalah, cukup hubungi kami dan team akan datang untuk perbaikan gratis. Kepuasan Anda adalah prioritas utama kami.",
      en: "We provide a full 1-year warranty for workmanship quality and construction. If there are any problems, just contact us and our team will come for free repairs. Your satisfaction is our top priority.",
    },
  },
];

export const heroData = {
  title: {
    id: "Rancang Furnitur & Interior yang Mengajak Anda",
    en: "Craft Furniture & Interiors That Invite You to",
  },
  subtitle: {
    id: '"Lenggah"',
    en: '"Lenggah" (Sit)',
  },
  description: {
    id: "Rasakan kenyamanan yang sesungguhnya, estetika yang tahan waktu. Setiap detail dirancang khusus untuk gaya hidup Anda—dari konsep hingga pemasangan sempurna.",
    en: "Experience true comfort, timeless aesthetics. Every detail is custom-designed for your lifestyle—from concept to perfect installation.",
  },
  badge: {
    id: "Kustom • Fungsional • Tahan Lama",
    en: "Custom • Functional • Durable",
  },
  philosophy: {
    id: 'Dalam bahasa Jawa, lenggah berarti "duduk". Kami merancang agar tubuh, pikiran, dan ruang dapat "lenggah"—tenang, nyaman, dan berkelanjutan.',
    en: 'In Javanese, lenggah means "to sit". We design so body, mind, and space can "lenggah"—calm, comfortable, and enduring.',
  },
  cta: {
    primary: {
      id: "Mulai Konsultasi Gratis",
      en: "Start Free Consultation",
    },
    secondary: {
      id: "Lihat Portofolio",
      en: "View Portfolio",
    },
  },
};

export const aboutData = {
  title: {
    id: "Menghadirkan Rumah Impian dalam Setiap Detail",
    en: "Bringing Dream Homes to Life in Every Detail",
  },
  subtitle: {
    id: "Setiap ruang memiliki cerita. Kami membantu Anda menceritakannya.",
    en: "Every space has a story. We help you tell yours.",
  },
  description: {
    id: [
      "Sejak 2019, Lenggah telah menjadi partner terpercaya bagi lebih dari 150 keluarga dalam mewujudkan rumah impian mereka. Kami memahami bahwa rumah bukan sekadar tempat tinggal—rumah adalah cerminan kepribadian, tempat bercerita, dan ruang untuk menciptakan kenangan indah.",
      "Dengan tim designer berpengalaman dan craftsman yang ahli, kami menciptakan furnitur custom yang tidak hanya memukau secara visual, tetapi juga mencerminkan gaya hidup unik setiap klien. Setiap project adalah kolaborasi—kami mendengarkan visi Anda dan menghadirkannya dengan kualitas yang melampaui ekspektasi.",
      'Kepercayaan Anda adalah aset terbesar kami. Dengan komitmen pada kualitas, ketepatan waktu, dan transparansi, kami bangga menjadi bagian dari perjalanan menciptakan rumah yang benar-benar terasa seperti "home".',
    ],
    en: [
      "Since 2019, Lenggah has been a trusted partner for over 150 families in realizing their dream homes. We understand that a home is not just a place to live—home is a reflection of personality, a place to tell stories, and a space to create beautiful memories.",
      "With our team of experienced designers and skilled craftsmen, we create custom furniture that is not only visually stunning but also reflects each client's unique lifestyle. Every project is a collaboration—we listen to your vision and bring it to life with quality that exceeds expectations.",
      'Your trust is our greatest asset. With our commitment to quality, punctuality, and transparency, we are proud to be part of the journey to create a home that truly feels like "home".',
    ],
  },
  stats: [
    {
      number: "150+",
      label: {
        id: "Klien Bahagia",
        en: "Happy Clients",
      },
    },
    {
      number: "5",
      label: {
        id: "Tahun Pengalaman",
        en: "Years Experience",
      },
    },
    {
      number: "300+",
      label: {
        id: "Project Selesai",
        en: "Projects Completed",
      },
    },
    {
      number: "99%",
      label: {
        id: "Tingkat Kepuasan",
        en: "Satisfaction Rate",
      },
    },
  ],
};
