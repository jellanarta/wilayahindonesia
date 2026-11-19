'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen,
  Map,
  Building,
  Tag,
  Home,
  Compass,
  Search,
  CheckCircle,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';

export interface DocsMenuItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  note?: string;
}

export interface DocsMenuGroup {
  group: string;
  items: DocsMenuItem[];
}

export const docsMenu: DocsMenuGroup[] = [
  {
    group: 'Memulai',
    items: [
      { href: '/docs', label: 'Pengenalan & Instalasi', icon: BookOpen, note: 'Intro' },
    ],
  },
  {
    group: 'Fungsi Wilayah Utama',
    items: [
      { href: '/docs/provinsi', label: '1. provinsi()', icon: Map, note: '38 Provinsi' },
      { href: '/docs/kabupaten', label: '2. kabupaten()', icon: Building, note: '514 Kab/Kota' },
      { href: '/docs/kecamatan', label: '3. kecamatan()', icon: Tag, note: '7.265+ Kec' },
      { href: '/docs/desa', label: '4. desa()', icon: Home, note: '83.345+ Desa' },
    ],
  },
  {
    group: 'Fungsi Lanjutan & Pencarian',
    items: [
      { href: '/docs/detail', label: 'getDetailWilayah()', icon: Compass, note: 'Breadcrumb' },
      { href: '/docs/search', label: 'Pencarian (cari*)', icon: Search, note: 'Fuzzy Search' },
      { href: '/docs/satuan', label: 'Ambil Satuan (get*)', icon: CheckCircle, note: 'Lookup Kode' },
    ],
  },
];

export default function DocsSidebar() {
  const pathname = usePathname();
  const [mobileDocsOpen, setMobileDocsOpen] = useState(false);

  return (
    <>
      {/* Mobile Docs Navigation Trigger Button */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setMobileDocsOpen(!mobileDocsOpen)}
          className="w-full flex items-center justify-between p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs text-xs font-bold text-slate-800"
        >
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>Pilih Bab Dokumentasi</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-700">
            <span>Menu Bab</span>
            <ChevronRight className={`w-4 h-4 transition-transform ${mobileDocsOpen ? 'rotate-90' : ''}`} />
          </div>
        </button>

        {mobileDocsOpen && (
          <div className="mt-2 bg-white border border-slate-200 rounded-2xl p-4 shadow-lg space-y-4">
            {docsMenu.map((group, gIdx) => (
              <div key={gIdx}>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  {group.group}
                </div>
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const active = pathname === item.href;
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileDocsOpen(false)}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition ${
                          active
                            ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Icon className={`w-3.5 h-3.5 ${active ? 'text-emerald-600' : 'text-slate-400'}`} />
                          <span>{item.label}</span>
                        </div>
                        {item.note && (
                          <span className="text-[10px] text-slate-400 font-normal">{item.note}</span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-24 space-y-6 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          {docsMenu.map((group, gIdx) => (
            <div key={gIdx}>
              <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-2 px-2">
                {group.group}
              </div>
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const active = pathname === item.href;
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs transition ${
                        active
                          ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 shadow-2xs'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${active ? 'text-emerald-600' : 'text-slate-400'}`} />
                        <span>{item.label}</span>
                      </div>
                      {item.note && (
                        <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                          active ? 'bg-emerald-100 text-emerald-800 font-semibold' : 'text-slate-400'
                        }`}>
                          {item.note}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
