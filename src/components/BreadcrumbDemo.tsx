'use client';

import React, { useState, useMemo } from 'react';
import { getDetailWilayah, DetailWilayah } from 'daftar-wilayah-indonesia';
import { Compass, CheckCircle2, AlertCircle, ArrowDown, MapPin, Building, Home, Globe } from 'lucide-react';

export default function BreadcrumbDemo() {
  const [inputCode, setInputCode] = useState<string>('32.04.05.2001');

  const detail: DetailWilayah | null = useMemo(() => {
    if (!inputCode.trim()) return null;
    return getDetailWilayah(inputCode);
  }, [inputCode]);

  const examples = [
    { label: 'Desa Cileunyi Kulon', code: '3204052001' },
    { label: 'Kecamatan Praya (NTB)', code: '52.02.06' },
    { label: 'Kota Bandung', code: '3273' },
    { label: 'Papua Barat Daya (Provinsi)', code: '96' },
    { label: 'Kota Mataram', code: '52.71' },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="p-2 bg-purple-50 text-purple-600 rounded-lg">
            <Compass className="w-5 h-5" />
          </span>
          <h3 className="font-bold text-slate-900 text-base">Breadcrumb Inspector (getDetailWilayah)</h3>
        </div>
        <p className="text-xs text-slate-500">
          Masukkan sembarang kode wilayah (dengan titik maupun tanpa titik). Fungsi ini akan membongkar seluruh pohon hierarkinya secara otomatis.
        </p>
      </div>

      {/* Input */}
      <div className="mb-4">
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          Masukkan Kode Wilayah:
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            placeholder="Contoh: 3204052001 atau 32.04.05.2001"
            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          />
        </div>
      </div>

      {/* Quick Picks */}
      <div className="flex items-center gap-2 mb-6 text-xs text-slate-500 flex-wrap">
        <span className="font-medium">Contoh kode:</span>
        {examples.map((ex) => (
          <button
            key={ex.code}
            onClick={() => setInputCode(ex.code)}
            className="px-2.5 py-1 bg-purple-50 hover:bg-purple-100 text-purple-700 font-medium rounded-lg border border-purple-200 transition"
          >
            {ex.label} <span className="font-mono opacity-60">({ex.code})</span>
          </button>
        ))}
      </div>

      {/* Inspector Tree */}
      {detail ? (
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <div className="flex items-center gap-2 mb-5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-bold text-slate-900">
              Wilayah Ditemukan! Tingkat:{' '}
              <span className="uppercase text-purple-700 font-semibold bg-purple-100 px-2 py-0.5 rounded text-xs border border-purple-200">
                {detail.tingkat}
              </span>
            </span>
          </div>

          <div className="space-y-3 relative before:absolute before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
            {/* 1. Provinsi */}
            {detail.provinsi && (
              <div className="relative pl-12">
                <div className="absolute left-2.5 top-2.5 w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center -translate-x-1/2 ring-4 ring-white shadow-sm">
                  <Globe className="w-3 h-3" />
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider block mb-0.5">
                    Provinsi (Level 1)
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">{detail.provinsi.nama}</span>
                    <span className="font-mono text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      Kode: {detail.provinsi.kode}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Kabupaten */}
            {detail.kabupaten && (
              <div className="relative pl-12">
                <div className="absolute left-2.5 top-2.5 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center -translate-x-1/2 ring-4 ring-white shadow-sm">
                  <Building className="w-3 h-3" />
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block mb-0.5">
                    Kabupaten / Kota (Level 2)
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">{detail.kabupaten.nama}</span>
                    <span className="font-mono text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      Kemendagri: {detail.kabupaten.kode_kemendagri}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Kecamatan */}
            {detail.kecamatan && (
              <div className="relative pl-12">
                <div className="absolute left-2.5 top-2.5 w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center -translate-x-1/2 ring-4 ring-white shadow-sm">
                  <MapPin className="w-3 h-3" />
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block mb-0.5">
                    Kecamatan (Level 3)
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">{detail.kecamatan.nama}</span>
                    <span className="font-mono text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      Kemendagri: {detail.kecamatan.kode_kemendagri}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 4. Desa */}
            {detail.desa && (
              <div className="relative pl-12">
                <div className="absolute left-2.5 top-2.5 w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center -translate-x-1/2 ring-4 ring-white shadow-sm">
                  <Home className="w-3 h-3" />
                </div>
                <div className="p-3.5 bg-white rounded-xl border-2 border-emerald-500 shadow-xs">
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-0.5">
                    Desa / Kelurahan (Level 4 Target)
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">{detail.desa.nama}</span>
                    <span className="font-mono text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      Kemendagri: {detail.desa.kode_kemendagri}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="p-6 bg-rose-50 rounded-2xl border border-rose-200 flex items-center gap-3 text-rose-700">
          <AlertCircle className="w-6 h-6 flex-shrink-0" />
          <div className="text-xs">
            <p className="font-bold">Kode wilayah "{inputCode}" tidak ditemukan!</p>
            <p className="text-rose-600 mt-0.5">
              Pastikan kode memiliki panjang 2 digit (Provinsi), 4 digit (Kabupaten), 6 digit (Kecamatan), atau 10 digit (Desa).
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
