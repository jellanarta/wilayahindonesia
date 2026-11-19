'use client';

import React from 'react';
import { MapPin, Github, Package, ExternalLink, Terminal } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 text-lg">daftar-wilayah-indonesia</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full border border-emerald-300">
                v5.0.1
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              Data Resmi Kemendagri • 38 Provinsi • TypeScript
            </p>
          </div>
        </div>

        <nav className="flex items-center gap-2 sm:gap-4">
          <a
            href="#playground"
            className="text-sm font-medium text-slate-600 hover:text-emerald-600 px-3 py-1.5 transition"
          >
            Live Demo
          </a>
          <a
            href="#dokumentasi"
            className="text-sm font-medium text-slate-600 hover:text-emerald-600 px-3 py-1.5 transition hidden sm:inline-block"
          >
            Dokumentasi
          </a>
          <a
            href="https://www.npmjs.com/package/daftar-wilayah-indonesia"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 px-3 py-1.5 rounded-lg transition"
          >
            <Package className="w-4 h-4" />
            <span>NPM</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
          <a
            href="https://github.com/jellanarta/daftar-wilayah-indonesia"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 px-3 py-1.5 rounded-lg transition shadow-sm"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
