'use client';

import React, { useState, useMemo } from 'react';
import {
  provinsi,
  kabupaten,
  kecamatan,
  desa,
} from 'daftar-wilayah-indonesia';
import CustomSelect, { SelectOption } from './CustomSelect';
import { Check, Copy, RefreshCw, ChevronRight, Layers, Code } from 'lucide-react';

export default function CascadingDemo() {
  const [selectedProv, setSelectedProv] = useState<string>('52'); // default NTB
  const [selectedKab, setSelectedKab] = useState<string>('5202'); // default Lombok Tengah
  const [selectedKec, setSelectedKec] = useState<string>('520201'); // default Praya
  const [selectedDesa, setSelectedDesa] = useState<string>('5202012013'); // default Jago
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

  // Map to SelectOption
  const provOptions: SelectOption[] = useMemo(
    () =>
      listProvinsi.map((p) => ({
        kode: p.kode,
        nama: p.nama,
        badge: p.kode,
      })),
    [listProvinsi]
  );

  const kabOptions: SelectOption[] = useMemo(
    () =>
      listKabupaten.map((k) => ({
        kode: k.kode,
        nama: k.nama,
        badge: k.kode_kemendagri,
      })),
    [listKabupaten]
  );

  const kecOptions: SelectOption[] = useMemo(
    () =>
      listKecamatan.map((kc) => ({
        kode: kc.kode,
        nama: kc.nama,
        badge: kc.kode_kemendagri,
      })),
    [listKecamatan]
  );

  const desaOptions: SelectOption[] = useMemo(
    () =>
      listDesa.map((d) => ({
        kode: d.kode,
        nama: d.nama,
        badge: d.kode_kemendagri,
      })),
    [listDesa]
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
      {/* Mobile Switch Tabs */}
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
                  Custom Searchable Dropdown
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500">
                  Ketik langsung di dalam dropdown untuk mencari data dengan cepat
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
            <CustomSelect
              label="1. Provinsi"
              options={provOptions}
              value={selectedProv}
              placeholder="Pilih Provinsi..."
              onChange={(val) => {
                setSelectedProv(val);
                setSelectedKab('');
                setSelectedKec('');
                setSelectedDesa('');
              }}
            />

            {/* 2. Kabupaten */}
            <CustomSelect
              label="2. Kabupaten / Kota"
              options={kabOptions}
              value={selectedKab}
              disabled={!selectedProv}
              placeholder="Pilih Kabupaten / Kota..."
              disabledPlaceholder="Pilih Provinsi terlebih dahulu..."
              onChange={(val) => {
                setSelectedKab(val);
                setSelectedKec('');
                setSelectedDesa('');
              }}
            />

            {/* 3. Kecamatan */}
            <CustomSelect
              label="3. Kecamatan"
              options={kecOptions}
              value={selectedKec}
              disabled={!selectedKab}
              placeholder="Pilih Kecamatan..."
              disabledPlaceholder="Pilih Kabupaten terlebih dahulu..."
              onChange={(val) => {
                setSelectedKec(val);
                setSelectedDesa('');
              }}
            />

            {/* 4. Desa */}
            <CustomSelect
              label="4. Desa / Kelurahan"
              options={desaOptions}
              value={selectedDesa}
              disabled={!selectedKec}
              placeholder="Pilih Desa / Kelurahan..."
              disabledPlaceholder="Pilih Kecamatan terlebih dahulu..."
              onChange={(val) => setSelectedDesa(val)}
            />
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
