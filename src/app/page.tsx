'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  Copy,
  Check,
  Sparkles,
  Layers,
  Search,
  Compass,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2,
  Cpu,
  CheckCircle2,
} from 'lucide-react';

export default function Home() {
  const [copiedInstall, setCopiedInstall] = useState<boolean>(false);
  const installCommand = 'npm install daftar-wilayah-indonesia';

  const copyInstall = () => {
    navigator.clipboard.writeText(installCommand);
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  const featureCards = [
    {
      title: 'Demo Wilayah',
      subtitle: 'Cascading Dropdown',
      desc: 'Simulasi pemilihan wilayah bertingkat (NTB ➔ Lombok Tengah ➔ Praya ➔ Jago) dengan live output data JSON.',
      href: '/demo/dropdown',
      icon: Layers,
      color: 'from-emerald-500 to-teal-600',
      badge: 'Interactive Demo',
    },
    {
      title: 'Pencarian Cerdas',
      subtitle: 'Global Search',
      desc: 'Cari nama daerah dari 83.000+ data secara instan, case-insensitive, dan dilengkapi filter tingkat wilayah.',
      href: '/demo/search',
      icon: Search,
      color: 'from-blue-500 to-indigo-600',
      badge: 'Super Cepat',
    },
    {
      title: 'Cek Kode & Breadcrumb',
      subtitle: 'Hierarchy Inspector',
      desc: 'Ketahui detail hierarki lengkap (desa, kecamatan, kabupaten, provinsi) cukup dari satu kode wilayah.',
      href: '/demo/hierarchy',
      icon: Compass,
      color: 'from-purple-500 to-violet-600',
      badge: 'getDetailWilayah()',
    },
    {
      title: 'Dokumentasi & API',
      subtitle: 'Developer Reference',
      desc: 'Panduan fungsi, type definitions TypeScript, dan contoh integrasi untuk Next.js, React, serta Express.',
      href: '/docs',
      icon: BookOpen,
      color: 'from-amber-500 to-orange-600',
      badge: 'Lengkap',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-10 pb-14 sm:pt-20 sm:pb-20 border-b border-slate-200 bg-gradient-to-b from-white via-emerald-50/20 to-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] sm:text-xs font-bold mb-5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Versi 5.0.1 Resmi Dirilis • Full TypeScript • 38 Provinsi</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
              Data Wilayah Indonesia untuk{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Modern Web & Node.js
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-2">
              Library data administratif resmi Republik Indonesia (Kemendagri) paling mutakhir,
              ringan, super cepat (O(1)), dan siap pakai untuk TypeScript/JavaScript.
            </p>

            {/* Install Box & CTA */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
              <div className="flex items-center bg-slate-900 text-slate-100 font-mono text-xs sm:text-sm px-3.5 py-2.5 sm:py-3 rounded-xl shadow-md border border-slate-800 w-full justify-between gap-3">
                <span className="text-emerald-400 select-none">$</span>
                <span className="select-all truncate">{installCommand}</span>
                <button
                  onClick={copyInstall}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white p-1.5 rounded-lg transition flex-shrink-0"
                  title="Salin Perintah"
                >
                  {copiedInstall ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <Link
                href="/demo/dropdown"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition w-full sm:w-auto whitespace-nowrap"
              >
                <span>Coba Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stat Cards Mobile Friendly Grid */}
            <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl mx-auto">
              {[
                { label: 'Provinsi', value: '38', note: 'Lengkap DOB Papua' },
                { label: 'Kabupaten & Kota', value: '514', note: 'Standar Kemendagri' },
                { label: 'Kecamatan', value: '7.265+', note: 'Seluruh Indonesia' },
                { label: 'Desa / Kelurahan', value: '83.345+', note: 'Paling Terkini' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/90 backdrop-blur p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200/80 shadow-xs text-left sm:text-center"
                >
                  <div className="text-xl sm:text-3xl font-extrabold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-700 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 sm:mt-1">
                    {stat.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPLORE FEATURES / MULTI-PAGE NAVIGATION CARDS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[11px] sm:text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
              Pilih Demo & Dokumentasi
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Jelajahi Fitur Utama
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl mx-auto">
              Setiap fitur memiliki halaman khususnya masing-masing agar nyaman dicoba baik di HP maupun komputer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${card.color} text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-100 group-hover:bg-emerald-50 group-hover:text-emerald-700 px-2 py-0.5 rounded-full transition">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-base sm:text-lg group-hover:text-emerald-700 transition">
                      {card.title}
                    </h3>
                    <div className="text-xs font-semibold text-emerald-600 mb-2">
                      {card.subtitle}
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-emerald-700 transition">
                    <span>Buka Halaman</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* WHY THIS PACKAGE SECTION */}
        <section className="bg-white border-t border-b border-slate-200 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Kenapa Memilih daftar-wilayah-indonesia?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                Didesain khusus untuk performa tinggi, kemudahan integrasi, dan keakuratan data.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Globe2,
                  title: 'Data Resmi Kemendagri',
                  desc: 'Seluruh 38 provinsi di Indonesia (termasuk Papua Selatan, Tengah, Pegunungan, dan Barat Daya) tercakup akurat.',
                },
                {
                  icon: Zap,
                  title: 'O(1) Instant Lookup (~0.005 ms)',
                  desc: 'Pencarian O(1) dengan struktur Indexed Map dan Lazy Loading untuk data desa sehingga memori sangat hemat.',
                },
                {
                  icon: ShieldCheck,
                  title: '100% Type-Safe',
                  desc: 'TypeScript interface lengkap (Provinsi, Kabupaten, Kecamatan, Desa) langsung memberikan autocomplete di editor.',
                },
                {
                  icon: Cpu,
                  title: 'Dual Module (CJS & ESM)',
                  desc: 'Mendukung import di Next.js/Vite maupun require di Node.js CommonJS tanpa repot konfigurasi bundler.',
                },
                {
                  icon: CheckCircle2,
                  title: 'Kode Fleksibel',
                  desc: 'Bebas menggunakan kode bertitik (32.04) atau tanpa titik (3204). Sistem otomatis menormalisasi.',
                },
                {
                  icon: Layers,
                  title: 'Zero Dependencies',
                  desc: 'Tanpa dependensi runtime eksternal. Paket mandiri, ringan, aman, dan siap produksi.',
                },
              ].map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <div key={i} className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                    <ItemIcon className="w-6 h-6 text-emerald-600 mb-3" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
