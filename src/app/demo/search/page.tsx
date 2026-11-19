import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchDemo from '@/components/SearchDemo';
import { Search, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Demo Pencarian Wilayah - Wilayah Indonesia',
  description: 'Cari wilayah dari 83.000+ data Indonesia secara instan dan case-insensitive.',
};

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Title */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 mb-3"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Beranda</span>
          </Link>
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700">
              <Search className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Pencarian Wilayah Cerdas
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Cari nama kota, kecamatan, atau desa dengan cepat menggunakan fungsi <code>cariWilayah()</code>
              </p>
            </div>
          </div>
        </div>

        {/* Demo Component */}
        <SearchDemo />
      </main>

      <Footer />
    </div>
  );
}
