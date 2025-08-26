import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Halaman Tidak Ditemukan | Lenggah",
  description:
    "Halaman yang Anda cari tidak ditemukan. Kembali ke beranda Lenggah untuk melihat furnitur dan interior design kustom terbaik.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-gray-600 mb-8">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman
            tersebut telah dipindahkan atau dihapus.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors"
          >
            Kembali ke Beranda
          </Link>

          <div className="text-sm text-gray-500">
            <p>Atau coba navigasi berikut:</p>
            <div className="mt-4 space-x-4">
              <Link
                href="/#tentang"
                className="text-amber-600 hover:text-amber-700"
              >
                Tentang Kami
              </Link>
              <Link
                href="/#layanan"
                className="text-amber-600 hover:text-amber-700"
              >
                Layanan
              </Link>
              <Link
                href="/#portfolio"
                className="text-amber-600 hover:text-amber-700"
              >
                Portfolio
              </Link>
              <Link
                href="/#kontak"
                className="text-amber-600 hover:text-amber-700"
              >
                Kontak
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
