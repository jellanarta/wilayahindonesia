'use client';

import React, { useState, useMemo } from 'react';
import {
  provinsi,
  kabupaten,
  kecamatan,
  desa,
} from 'daftar-wilayah-indonesia';
import { Check, Copy, RefreshCw, ChevronRight, Layers, Code, CheckCircle2 } from 'lucide-react';

export default function CascadingDemo() {
  const [selectedProv, setSelectedProv] = useState<string>('32'); // default Jawa Barat
  const [selectedKab, setSelectedKab] = useState<string>('3204'); // default Kab Bandung
  const [selectedKec, setSelectedKec] = useState<string>('320405'); // default Cileunyi
  const [selectedDesa, setSelectedDesa] = useState<string>('3204052001'); // default Cileunyi Kulon
  const [copied, setCopied] = useState<boolean>(false);
  const [mobileTab, setMobileTab] = useState<'form' | 'json'>('form');

  // Data lists
  const listProvinsi = useMemo(() => provinsi(), []);
  const listKabupaten = useMemo(
    () => (selectedProv ? kabupaten(selectedProv) : []),
    [selectedProv]
  );
  const listKecamatan = useMemo(
    () => (selectedKab ? kecamatan(selectedKab) : []),
    [selectedKab]
  );
  const listDesa = useMemo(
    () => (selectedKec ? desa(selectedKec) : []),
    [selectedKec]
  );

  // Objects
  const provObj = listProvinsi.find((p) => p.kode === selectedProv);
  const kabObj = listKabupaten.find((k) => k.kode === selectedKab);
  const kecObj = listKecamatan.find((kc) => kc.kode === selectedKec);
  const desaObj = listDesa.find((d) => d.kode === selectedDesa);

  const outputJson = {
    provinsi: provObj || null,
    kabupaten: kabObj || null,
    kecamatan: kecObj || null,
    desa: desaObj || null,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(outputJson, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setSelectedProv('');
    setSelectedKab('');
    setSelectedKec('');
    setSelectedDesa('');
  };

  return (
    <div className="space-y-6">
      {/* Mobile Switch Tabs (Hanya muncul di HP) */}
      <div className="flex lg:hidden bg-slate-200/80 p-1 rounded-xl">
        <button
          onClick={() => setMobileTab('form')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition flex items-center justify-center gap-1.5 ${
            mobileTab === 'form'
              ? 'bg-white text-emerald-800 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Form Dropdown</span>
        </button>
        <button
          onClick={() => setMobileTab('json')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition flex items-center justify-center gap-1.5 ${
            mobileTab === 'json'
              ? 'bg-white text-emerald-800 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Code className="w-3.5 h-3.5" />
          <span>Output JSON ({desaObj ? 'Lengkap' : 'Sebagian'})</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Form Section */}
        <div
          className={`lg:col-span-7 bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs ${
            mobileTab === 'form' ? 'block' : 'hidden lg:block'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                <Layers className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  Cascading Dropdown Form
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500">
                  Pilih Provinsi hingga Desa secara bertahap
                </p>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-2.5 py-1.5 rounded-lg transition"
              title="Reset Pilihan"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>

          {/* Breadcrumb Horizontal Scrollable */}
          <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-100 mb-5 overflow-x-auto">
            <div className="flex items-center gap-1.5 text-xs whitespace-nowrap min-w-max">
              <span className="font-semibold text-slate-800">Alur:</span>
              <span className={provObj ? 'text-emerald-700 font-bold' : 'text-slate-400'}>
                {provObj?.nama || 'Provinsi'}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <span className={kabObj ? 'text-emerald-700 font-bold' : 'text-slate-400'}>
                {kabObj?.nama || 'Kab/Kota'}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <span className={kecObj ? 'text-emerald-700 font-bold' : 'text-slate-400'}>
                {kecObj?.nama || 'Kecamatan'}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <span className={desaObj ? 'text-emerald-700 font-bold' : 'text-slate-400'}>
                {desaObj?.nama || 'Desa/Kelurahan'}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {/* 1. Provinsi */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                1. Provinsi ({listProvinsi.length} Provinsi)
              </label>
              <select
                value={selectedProv}
                onChange={(e) => {
                  setSelectedProv(e.target.value);
                  setSelectedKab('');
                  setSelectedKec('');
                  setSelectedDesa('');
                }}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
              >
                <option value="">-- Pilih Provinsi --</option>
                {listProvinsi.map((p) => (
                  <option key={p.kode} value={p.kode}>
                    [{p.kode}] {p.nama}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Kabupaten */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                2. Kabupaten / Kota ({listKabupaten.length} Tersedia)
              </label>
              <select
                value={selectedKab}
                disabled={!selectedProv}
                onChange={(e) => {
                  setSelectedKab(e.target.value);
                  setSelectedKec('');
                  setSelectedDesa('');
                }}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:bg-slate-100 disabled:text-slate-400 transition"
              >
                <option value="">
                  -- {selectedProv ? 'Pilih Kabupaten / Kota' : 'Pilih Provinsi Terlebih Dahulu'} --
                </option>
                {listKabupaten.map((k) => (
                  <option key={k.kode} value={k.kode}>
                    [{k.kode_kemendagri}] {k.nama}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Kecamatan */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                3. Kecamatan ({listKecamatan.length} Tersedia)
              </label>
              <select
                value={selectedKec}
                disabled={!selectedKab}
                onChange={(e) => {
                  setSelectedKec(e.target.value);
                  setSelectedDesa('');
                }}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:bg-slate-100 disabled:text-slate-400 transition"
              >
                <option value="">
                  -- {selectedKab ? 'Pilih Kecamatan' : 'Pilih Kabupaten Terlebih Dahulu'} --
                </option>
                {listKecamatan.map((kc) => (
                  <option key={kc.kode} value={kc.kode}>
                    [{kc.kode_kemendagri}] {kc.nama}
                  </option>
                ))}
              </select>
            </div>

            {/* 4. Desa */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                4. Desa / Kelurahan ({listDesa.length} Tersedia)
              </label>
              <select
                value={selectedDesa}
                disabled={!selectedKec}
                onChange={(e) => setSelectedDesa(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:bg-slate-100 disabled:text-slate-400 transition"
              >
                <option value="">
                  -- {selectedKec ? 'Pilih Desa / Kelurahan' : 'Pilih Kecamatan Terlebih Dahulu'} --
                </option>
                {listDesa.map((d) => (
                  <option key={d.kode} value={d.kode}>
                    [{d.kode_kemendagri}] {d.nama}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* JSON Output Section */}
        <div
          className={`lg:col-span-5 bg-slate-900 text-slate-200 p-4 sm:p-6 rounded-2xl shadow-xl flex flex-col h-full border border-slate-800 ${
            mobileTab === 'json' ? 'block' : 'hidden lg:block'
          }`}
        >
          <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Data JSON Aktif
              </span>
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg transition"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin JSON</span>
                </>
              )}
            </button>
          </div>

          <pre className="text-xs font-mono overflow-auto flex-1 p-3 bg-slate-950/70 rounded-xl text-emerald-400 max-h-[420px] leading-relaxed">
            {JSON.stringify(outputJson, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
