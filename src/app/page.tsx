'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import CascadingDemo from '@/components/CascadingDemo';
import SearchDemo from '@/components/SearchDemo';
import BreadcrumbDemo from '@/components/BreadcrumbDemo';
import ApiDocs from '@/components/ApiDocs';
import Footer from '@/components/Footer';
import {
  Copy,
  Check,
  MapPin,
  Sparkles,
  Zap,
  ShieldCheck,
  Layers,
  Search,
  Compass,
  ArrowRight,
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'cascading' | 'search' | 'breadcrumb'>('cascading');
  const [copiedInstall, setCopiedInstall] = useState<boolean>(false);

  const installCommand = 'npm install daftar-wilayah-indonesia';

  const copyInstall = () => {
    navigator.clipboard.writeText(installCommand);
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-slate-200 bg-gradient-to-b from-white via-emerald-50/20 to-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-6 shadow-xs animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Versi 5.0 Resmi Dirilis: Full TypeScript & 38 Provinsi</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
              Data Wilayah Indonesia Terlengkap untuk{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Modern Web & Node.js
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Solusi data administratif resmi Republik Indonesia (Kemendagri) tercepat, ramah developer,
              dilengkapi type definitions kuat, dan pencarian cerdas.
            </p>

            {/* Install Box */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="flex items-center bg-slate-900 text-slate-100 font-mono text-xs sm:text-sm px-4 py-3 rounded-xl shadow-lg border border-slate-800 w-full sm:w-auto justify-between gap-4">
                <span className="text-emerald-400 select-none">$</span>
                <span className="select-all">{installCommand}</span>
                <button
                  onClick={copyInstall}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white p-1.5 rounded-lg transition"
                  title="Salin Perintah"
                >
                  {copiedInstall ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <a
                href="#playground"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 transition w-full sm:w-auto"
              >
                <span>Coba Live Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Stat Cards */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { label: 'Provinsi', value: '38', note: 'Lengkap DOB Papua' },
                { label: 'Kabupaten & Kota', value: '514', note: 'Format Kemendagri' },
                { label: 'Kecamatan', value: '7.265+', note: 'Seluruh Indonesia' },
                { label: 'Desa / Kelurahan', value: '83.345+', note: 'Paling Mutakhir' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-sm transition"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">{stat.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLAYGROUND SECTION */}
        <section id="playground" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
              Interactive Playground
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              Uji Coba Langsung di Browser
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Semua fitur di bawah ini berjalan langsung menggunakan package{' '}
              <strong className="text-slate-700 font-semibold">daftar-wilayah-indonesia</strong>
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 bg-slate-200/70 rounded-2xl shadow-inner gap-1">
              <button
                onClick={() => setActiveTab('cascading')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                  activeTab === 'cascading'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>Cascading Dropdown</span>
              </button>
              <button
                onClick={() => setActiveTab('search')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                  activeTab === 'search'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Search className="w-4 h-4 text-emerald-600" />
                <span>Pencarian Cerdas</span>
              </button>
              <button
                onClick={() => setActiveTab('breadcrumb')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                  activeTab === 'breadcrumb'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Compass className="w-4 h-4 text-emerald-600" />
                <span>Breadcrumb Inspector</span>
              </button>
            </div>
          </div>

          {/* Active Tab Component */}
          {activeTab === 'cascading' && <CascadingDemo />}
          {activeTab === 'search' && <SearchDemo />}
          {activeTab === 'breadcrumb' && <BreadcrumbDemo />}

          {/* API DOCUMENTATION */}
          <ApiDocs />
        </section>
      </main>

      <Footer />
    </div>
  );
}
