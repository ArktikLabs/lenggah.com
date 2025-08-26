import './globals.css';
import React from 'react';
import { Inter, Playfair_Display } from 'next/font/google';
import { Providers } from "./providers";

export const metadata = {
  metadataBase: new URL("https://lenggah.com"),
  title: {
    default:
      "Lenggah — Furnitur & Desain Interior Kustom yang Nyaman dan Tahan Lama",
    template: "%s | Lenggah",
  },
  description:
    "Studio Lenggah menghadirkan furnitur & interior kustom berfokus pada kenyamanan. Dari konsep hingga pemasangan, material terkurasi & garansi.",
  keywords: [
    "furnitur kustom",
    "desain interior",
    "kitchen set",
    "wardrobe custom",
    "furnitur yogyakarta",
    "interior design yogyakarta",
    "custom furniture",
    "mebel custom",
    "furniture maker yogyakarta",
    "interior designer yogyakarta",
  ],
  authors: [{ name: "Lenggah Studio" }],
  creator: "Lenggah Studio",
  publisher: "Lenggah Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://lenggah.com",
    siteName: "Lenggah",
    title:
      "Lenggah — Furnitur & Desain Interior Kustom yang Nyaman dan Tahan Lama",
    description:
      "Studio Lenggah menghadirkan furnitur & interior kustom berfokus pada kenyamanan. Dari konsep hingga pemasangan, material terkurasi & garansi.",
    images: [
      {
        url: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Lenggah — Custom Furniture & Interior Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Lenggah — Furnitur & Desain Interior Kustom yang Nyaman dan Tahan Lama",
    description:
      "Studio Lenggah menghadirkan furnitur & interior kustom berfokus pada kenyamanan. Dari konsep hingga pemasangan, material terkurasi & garansi.",
    images: [
      "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://lenggah.com",
    languages: {
      'id': 'https://lenggah.com',
      'en': 'https://lenggah.com/en',
    },
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
