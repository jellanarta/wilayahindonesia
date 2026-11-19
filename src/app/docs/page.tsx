import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Terminal, Sparkles, Check, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dokumentasi & Panduan Instalasi',
  description:
    'Panduan resmi instalasi, setup awal, dan konfigurasi library daftar-wilayah-indonesia untuk TypeScript, Node.js, Next.js, dan Vite.',
  keywords: [
    'dokumentasi wilayah indonesia',
    'cara install daftar wilayah indonesia',
    'setup library wilayah indonesia',
    'panduan wilayah indonesia typescript',
  ],
  alternates: {
    canonical: '/docs',
  },
  openGraph: {
    title: 'Dokumentasi & Panduan Instalasi - Wilayah Indonesia',
    description:
      'Panduan awal cara menginstal dan menggunakan library daftar-wilayah-indonesia dengan contoh kode TypeScript dan ESM/CJS.',
    url: '/docs',
  },
};

export default function DocsIntroPage() {
  return (
    <article className="prose prose-slate max-w-none">
      {/* Title */}
      <div className="border-b border-slate-100 pb-5 mb-8">
        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md uppercase tracking-wider inline-block mb-2">
          Memulai
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Pengenalan & Panduan Instalasi
        </h1>
        <p className="text-sm text-slate-500">
          Selamat datang di dokumentasi resmi <code>daftar-wilayah-indonesia</code> v5.0.1
        </p>
      </div>

      {/* Overview Card */}
      <div className="bg-emerald-50/60 border border-emerald-200 p-4 sm:p-5 rounded-2xl mb-8">
        <div className="flex items-center gap-2 mb-2 font-bold text-emerald-900 text-sm">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>Tentang Library Ini</span>
        </div>
        <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed m-0">
          <strong>daftar-wilayah-indonesia</strong> adalah library data administratif resmi Republik Indonesia
          berdasarkan standar terbaru Kementerian Dalam Negeri (Kemendagri). Library ini dibangun dengan
          <strong> 100% TypeScript</strong>, mendukung <strong>ESM & CommonJS</strong>, dan dioptimasi
          dengan indeks hash map sehingga proses pencarian dan pemuatan berkecepatan <strong>O(1) (~0.005 ms)</strong>.
        </p>
      </div>

      {/* Ringkasan Data */}
      <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-8 mb-4">
        Cakupan Data Wilayah (Versi 5.0.1 Terkini)
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4 not-prose">
        {[
          { label: 'Provinsi', total: '38', desc: 'Termasuk 4 DOB Papua' },
          { label: 'Kabupaten/Kota', total: '514', desc: 'Format Kemendagri' },
          { label: 'Kecamatan', total: '7.265+', desc: 'Seluruh Indonesia' },
          { label: 'Desa/Kelurahan', total: '83.345+', desc: 'Paling Mutakhir' },
        ].map((item, idx) => (
          <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-xl sm:text-2xl font-black text-slate-900">{item.total}</div>
            <div className="text-xs font-bold text-slate-700">{item.label}</div>
            <div className="text-[10px] text-slate-400 mt-0.5">{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Instalasi */}
      <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-8 mb-3">
        Langkah 1: Instalasi Paket
      </h2>
      <p className="text-xs sm:text-sm text-slate-600 mb-4">
        Jalankan salah satu perintah berikut di terminal proyek Anda (Next.js, React, Node.js, Vite, dll.):
      </p>

      <div className="space-y-2 not-prose mb-8">
        {[
          { pm: 'npm', cmd: 'npm install daftar-wilayah-indonesia' },
          { pm: 'yarn', cmd: 'yarn add daftar-wilayah-indonesia' },
          { pm: 'pnpm', cmd: 'pnpm add daftar-wilayah-indonesia' },
          { pm: 'bun', cmd: 'bun add daftar-wilayah-indonesia' },
        ].map((item) => (
          <div
            key={item.pm}
            className="flex items-center justify-between p-3 bg-slate-900 text-slate-200 rounded-xl font-mono text-xs"
          >
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase font-bold text-emerald-400 w-10">
                {item.pm}
              </span>
              <span className="text-slate-300">{item.cmd}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Langkah 2: Cara Import */}
      <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-8 mb-3">
        Langkah 2: Import ke Proyek Anda
      </h2>
      <p className="text-xs sm:text-sm text-slate-600 mb-3">
        Package ini mendukung dua standar module JavaScript secara otomatis:
      </p>

      {/* Code Tabs preview */}
      <div className="not-prose space-y-4 mb-8">
        <div className="bg-slate-900 rounded-xl p-4 text-xs font-mono text-slate-200">
          <div className="text-slate-400 text-[11px] mb-2 font-sans font-bold">
            ES Module / TypeScript / Next.js / Vite
          </div>
          <pre className="text-emerald-400 m-0 overflow-x-auto">
{`import { provinsi, kabupaten, kecamatan, desa, getDetailWilayah } from 'daftar-wilayah-indonesia';`}
          </pre>
        </div>

        <div className="bg-slate-900 rounded-xl p-4 text-xs font-mono text-slate-200">
          <div className="text-slate-400 text-[11px] mb-2 font-sans font-bold">
            CommonJS / Node.js Traditional
          </div>
          <pre className="text-emerald-400 m-0 overflow-x-auto">
{`const { provinsi, kabupaten, kecamatan, desa } = require('daftar-wilayah-indonesia');`}
          </pre>
        </div>
      </div>

      {/* Navigasi ke Bab Selanjutnya */}
      <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between not-prose">
        <span className="text-xs text-slate-400">Selanjutnya:</span>
        <Link
          href="/docs/provinsi"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-xs"
        >
          <span>Bab 1: Fungsi provinsi()</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
