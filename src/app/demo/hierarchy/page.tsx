import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbDemo from '@/components/BreadcrumbDemo';
import { Compass, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hierarchy Inspector - Cek Silsilah Kode Wilayah Kemendagri',
  description:
    'Bongkar pohon hierarki dan breadcrumb lengkap (Provinsi ➔ Kabupaten ➔ Kecamatan ➔ Desa) dari sembarang kode wilayah resmi.',
  keywords: [
    'cek kode wilayah kemendagri',
    'hierarchy inspector wilayah',
    'breadcrumb wilayah indonesia',
    'struktur administrasi indonesia',
    'getDetailWilayah',
  ],
  alternates: {
    canonical: '/demo/hierarchy',
  },
  openGraph: {
    title: 'Hierarchy Inspector - Cek Silsilah Kode Wilayah Kemendagri',
    description:
      'Bongkar silsilah dan pohon hierarki wilayah lengkap dari sembarang kode Kemendagri dengan getDetailWilayah().',
    url: '/demo/hierarchy',
  },
};

export default function HierarchyPage() {
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
            <div className="p-2.5 rounded-xl bg-purple-100 text-purple-700">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Breadcrumb Inspector & Cek Kode
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Ketahui nama desa, kecamatan, kabupaten, dan provinsi dari sebuah kode dengan <code>getDetailWilayah()</code>
              </p>
            </div>
          </div>
        </div>

        {/* Demo Component */}
        <BreadcrumbDemo />
      </main>

      <Footer />
    </div>
  );
}

