import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Search, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dokumentasi Fungsi Pencarian (cari*) - Cari Wilayah Cerdas',
  description:
    'Panduan lengkap fungsi pencarian teks cerdas: cariWilayah(), cariProvinsi(), cariKabupaten(), cariKecamatan(), dan cariDesa().',
  keywords: [
    'cariWilayah',
    'cariProvinsi',
    'cariKabupaten',
    'cariKecamatan',
    'cariDesa',
    'pencarian wilayah case insensitive',
  ],
  alternates: {
    canonical: '/docs/search',
  },
  openGraph: {
    title: 'Dokumentasi Fungsi Pencarian (cari*) - Cari Wilayah Cerdas',
    description:
      'Panduan fungsi cariWilayah, cariProvinsi, cariKabupaten, cariKecamatan, dan cariDesa.',
    url: '/docs/search',
  },
};

export default function DocsSearchPage() {
  return (
    <article className="prose prose-slate max-w-none">
      {/* Header */}
      <div className="border-b border-slate-100 pb-5 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md uppercase tracking-wider inline-block">
            Fitur Pencarian Cerdas
          </span>
          <span className="text-xs text-slate-400 font-mono">fungsi: cari*</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Rangkaian Fungsi Pencarian (<code>cari*</code>)
        </h1>
        <p className="text-sm text-slate-500 m-0">
          Mencari nama wilayah dari 83.000+ data secara instan, case-insensitive, baik secara global maupun spesifik di tingkat tertentu.
        </p>
      </div>

      {/* 1. cariWilayah (Global Search) */}
      <h2 className="text-lg font-bold text-slate-900 mt-6 mb-3">1. <code>cariWilayah(keyword, options?)</code></h2>
      <p className="text-xs sm:text-sm text-slate-600 mb-3">
        Mencari teks nama wilayah di <strong>seluruh tingkat sekaligus</strong> (Provinsi, Kabupaten, Kecamatan, Desa).
      </p>

      <div className="not-prose mb-6">
        <pre className="bg-slate-900 text-slate-200 p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed">
{`import { cariWilayah } from 'daftar-wilayah-indonesia';

// Pencarian global dengan batas 10 hasil:
const hasil = cariWilayah('Bandung', { limit: 10 });
console.log(hasil);

// Pencarian khusus di tingkat kabupaten dan kecamatan saja:
const hasilFilter = cariWilayah('Bandung', { 
  tingkat: ['kabupaten', 'kecamatan'],
  limit: 5 
});`}
        </pre>
      </div>

      {/* 2. cariProvinsi */}
      <h2 className="text-lg font-bold text-slate-900 mt-8 mb-3">2. <code>cariProvinsi(keyword)</code></h2>
      <p className="text-xs sm:text-sm text-slate-600 mb-3">
        Mencari nama provinsi (misal: "jawa", "papua", "kalimantan"):
      </p>
      <div className="not-prose mb-6">
        <pre className="bg-slate-900 text-emerald-400 p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed">
{`import { cariProvinsi } from 'daftar-wilayah-indonesia';

const hasil = cariProvinsi('papua');
// Mengembalikan 6 provinsi di pulau Papua (Papua, Papua Barat, Papua Selatan, dll.)`}
        </pre>
      </div>

      {/* 3. cariKabupaten */}
      <h2 className="text-lg font-bold text-slate-900 mt-8 mb-3">3. <code>cariKabupaten(keyword, kode_provinsi?)</code></h2>
      <p className="text-xs sm:text-sm text-slate-600 mb-3">
        Mencari nama kabupaten atau kota. Opsional dapat dibatasi dalam provinsi tertentu:
      </p>
      <div className="not-prose mb-6">
        <pre className="bg-slate-900 text-slate-200 p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed">
{`import { cariKabupaten } from 'daftar-wilayah-indonesia';

// Cari di seluruh Indonesia:
const kabSemua = cariKabupaten('bogor'); 
// [Kabupaten Bogor, Kota Bogor]

// Cari khusus di Provinsi Jawa Barat saja ('32'):
const kabJabar = cariKabupaten('bogor', '32');`}
        </pre>
      </div>

      {/* 4. cariKecamatan */}
      <h2 className="text-lg font-bold text-slate-900 mt-8 mb-3">4. <code>cariKecamatan(keyword, kode_kabupaten?)</code></h2>
      <p className="text-xs sm:text-sm text-slate-600 mb-3">
        Mencari nama kecamatan:
      </p>
      <div className="not-prose mb-6">
        <pre className="bg-slate-900 text-slate-200 p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed">
{`import { cariKecamatan } from 'daftar-wilayah-indonesia';

const hasil = cariKecamatan('praya');
// [Praya Barat, Praya Barat Daya, Praya Timur, Praya, Praya Tengah]`}
        </pre>
      </div>

      {/* 5. cariDesa */}
      <h2 className="text-lg font-bold text-slate-900 mt-8 mb-3">5. <code>cariDesa(keyword, kode_kecamatan?, limit?)</code></h2>
      <p className="text-xs sm:text-sm text-slate-600 mb-3">
        Mencari nama desa/kelurahan dengan batas default 100 hasil:
      </p>
      <div className="not-prose mb-8">
        <pre className="bg-slate-900 text-slate-200 p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed">
{`import { cariDesa } from 'daftar-wilayah-indonesia';

// Cari desa bernama 'Cileunyi' maksimal 10 data:
const hasil = cariDesa('cileunyi', undefined, 10);`}
        </pre>
      </div>

      {/* Navigasi Prev Next */}
      <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between not-prose">
        <Link
          href="/docs/detail"
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>getDetailWilayah()</span>
        </Link>
        <Link
          href="/docs/satuan"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-xs"
        >
          <span>Fungsi get* Satuan</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}

