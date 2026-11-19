'use client';

import React, { useState } from 'react';
import Link from 'next/navigation';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import {
  MapPin,
  Github,
  Package,
  Layers,
  Search,
  Compass,
  BookOpen,
  Menu,
  X,
  ExternalLink,
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/demo/dropdown', label: 'Form Bertingkat', icon: Layers },
    { href: '/demo/search', label: 'Pencarian', icon: Search },
    { href: '/demo/hierarchy', label: 'Cek Kode', icon: Compass },
    { href: '/docs', label: 'Dokumentasi', icon: BookOpen },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <NextLink href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-sm shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-900 text-sm sm:text-base tracking-tight">
                Wilayah Indonesia
              </span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded-full border border-emerald-300">
                v5.0.1
              </span>
            </div>
            <span className="text-[10px] text-slate-500 hidden sm:block -mt-0.5">
              38 Provinsi • Full TypeScript
            </span>
          </div>
        </NextLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/60">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <NextLink
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${
                  active
                    ? 'bg-white text-emerald-700 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {link.icon && <link.icon className="w-3.5 h-3.5 opacity-70" />}
                <span>{link.label}</span>
              </NextLink>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href="https://www.npmjs.com/package/daftar-wilayah-indonesia"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 px-2.5 py-1.5 rounded-lg transition"
          >
            <Package className="w-3.5 h-3.5" />
            <span>NPM</span>
          </a>
          <a
            href="https://github.com/jellanarta/daftar-wilayah-indonesia"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 px-3 py-1.5 rounded-lg transition shadow-xs"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1 mb-4">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <NextLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition ${
                    active
                      ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {link.icon ? (
                      <link.icon className={`w-4 h-4 ${active ? 'text-emerald-600' : 'text-slate-400'}`} />
                    ) : (
                      <MapPin className="w-4 h-4 text-slate-400" />
                    )}
                    <span>{link.label}</span>
                  </div>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>}
                </NextLink>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
            <a
              href="https://www.npmjs.com/package/daftar-wilayah-indonesia"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2 rounded-xl bg-rose-50 text-rose-700 border border-rose-200"
            >
              <Package className="w-4 h-4" />
              <span>NPM Package</span>
            </a>
            <a
              href="https://github.com/jellanarta/daftar-wilayah-indonesia"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2 rounded-xl bg-slate-900 text-white"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
