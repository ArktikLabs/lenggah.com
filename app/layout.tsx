import './globals.css';
import React from 'react';
import { Inter, Playfair_Display } from 'next/font/google';

export const metadata = {
  title: 'Lenggah — Furnitur & Desain Interior Kustom yang Nyaman dan Tahan Lama',
  description:
    'Studio Lenggah menghadirkan furnitur & interior kustom berfokus pada kenyamanan. Dari konsep hingga pemasangan, material terkurasi & garansi.',
  openGraph: {
    type: 'website',
    siteName: 'Lenggah',
    title: 'Lenggah — Furnitur & Desain Interior Kustom yang Nyaman dan Tahan Lama',
    description:
      'Studio Lenggah menghadirkan furnitur & interior kustom berfokus pada kenyamanan. Dari konsep hingga pemasangan, material terkurasi & garansi.',
    images: [
      {
        url: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Lenggah — Custom Furniture & Interior Design',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
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
      <body className={`${inter.variable} ${playfair.variable} antialiased font-sans`}>{children}</body>
    </html>
  );
}
