import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL("https://lenggah.com"),
  title: {
    default: "Lenggah — Custom Furniture & Interior Design that's Comfortable and Durable",
    template: "%s | Lenggah",
  },
  description:
    "Lenggah Studio creates custom furniture & interiors focused on comfort. From concept to installation, curated materials & warranty included.",
  keywords: [
    "custom furniture",
    "interior design",
    "kitchen set",
    "custom wardrobe",
    "furniture jakarta",
    "interior design jakarta",
    "custom furniture maker",
    "bespoke furniture",
    "furniture maker jakarta",
    "interior designer jakarta",
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
    locale: "en_US",
    url: "https://lenggah.com/en",
    siteName: "Lenggah",
    title: "Lenggah — Custom Furniture & Interior Design that's Comfortable and Durable",
    description:
      "Lenggah Studio creates custom furniture & interiors focused on comfort. From concept to installation, curated materials & warranty included.",
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
    title: "Lenggah — Custom Furniture & Interior Design that's Comfortable and Durable",
    description:
      "Lenggah Studio creates custom furniture & interiors focused on comfort. From concept to installation, curated materials & warranty included.",
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
  icons: [
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  ],
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://lenggah.com/en",
    languages: {
      'id': 'https://lenggah.com',
      'en': 'https://lenggah.com/en',
    },
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
