import React from 'react';
import { Heart, Github, Package } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p className="flex items-center gap-1">
          Dibuat dengan <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> oleh{' '}
          <a
            href="https://github.com/jellanarta"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-slate-800 hover:text-emerald-600 underline underline-offset-2"
          >
            Jellan Arta
          </a>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.npmjs.com/package/daftar-wilayah-indonesia"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-800 transition flex items-center gap-1"
          >
            <Package className="w-3.5 h-3.5" /> NPM Package
          </a>
          <span>•</span>
          <a
            href="https://github.com/jellanarta/daftar-wilayah-indonesia"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-800 transition flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" /> Source Code
          </a>
          <span>•</span>
          <span>MIT License</span>
        </div>
      </div>
    </footer>
  );
}

