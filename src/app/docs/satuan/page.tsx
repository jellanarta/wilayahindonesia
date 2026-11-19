import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Code2 } from 'lucide-react';

export const metadata = {
  title: 'Dokumentasi Fungsi Satuan (get*) - Wilayah Indonesia',
  description: 'Panduan fungsi getProvinsi, getKabupaten, getKecamatan, dan getDesa untuk mengambil satu objek data by kode.',
};

export default function DocsSatuanPage() {
  return (
    <article className="prose prose-slate max-w-none">
      {/* Header */}
      <div className="border-b border-slate-100 pb-5 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md uppercase tracking-wider inline-block">
            Single Lookup
          </span>
          <span className="text-xs text-slate-400 font-mono">fungsi: get*</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Fungsi Pengambil Satuan (<code>get*</code>)
        </h1>
        <p className="text-sm text-slate-500 m-0">
          Mengambil satu objek wilayah spesifik secara langsung berdasarkan kodenya (O(1) instant lookup).
        </p>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 mb-6">
        Jika Anda sudah memiliki kode wilayah dan hanya ingin mengambil nama atau detail dari 1 wilayah tersebut tanpa memuat array besar, gunakan rangkaian fungsi berikut:
      </p>

      {/* Grid fungsi get */}
      <div className="space-y-4 not-prose mb-8">
        {/* getProvinsi */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono font-bold text-slate-900 text-xs">getProvinsi(kode)</span>
            <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
              Return: Provinsi | undefined
            </span>
          </div>
          <p className="text-xs text-slate-500 mb-2">Mencari 1 data provinsi berdasarkan kode 2 digit.</p>
          <pre className="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono">
{`import { getProvinsi } from 'daftar-wilayah-indonesia';

const prov = getProvinsi('32');
console.log(prov); // { kode: '32', nama: 'Jawa Barat' }`}
          </pre>
        </div>

        {/* getKabupaten */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono font-bold text-slate-900 text-xs">getKabupaten(kode)</span>
            <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
              Return: Kabupaten | undefined
            </span>
          </div>
          <p className="text-xs text-slate-500 mb-2">Menerima kode 4 digit dengan atau tanpa titik.</p>
          <pre className="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono">
{`import { getKabupaten } from 'daftar-wilayah-indonesia';

const kab = getKabupaten('3204'); // atau '32.04'
console.log(kab?.nama); // "Kabupaten Bandung"`}
          </pre>
        </div>

        {/* getKecamatan */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono font-bold text-slate-900 text-xs">getKecamatan(kode)</span>
            <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
              Return: Kecamatan | undefined
            </span>
          </div>
          <p className="text-xs text-slate-500 mb-2">Menerima kode 6 digit dengan atau tanpa titik.</p>
          <pre className="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono">
{`import { getKecamatan } from 'daftar-wilayah-indonesia';

const kec = getKecamatan('320405'); // atau '32.04.05'
console.log(kec?.nama); // "Cileunyi"`}
          </pre>
        </div>

        {/* getDesa */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono font-bold text-slate-900 text-xs">getDesa(kode)</span>
            <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
              Return: Desa | undefined
            </span>
          </div>
          <p className="text-xs text-slate-500 mb-2">Menerima kode 10 digit dengan atau tanpa titik.</p>
          <pre className="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono">
{`import { getDesa } from 'daftar-wilayah-indonesia';

const des = getDesa('3204052001'); // atau '32.04.05.2001'
console.log(des?.nama); // "Cileunyi Kulon"`}
          </pre>
        </div>
      </div>

      {/* Navigasi Prev Next */}
      <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between not-prose">
        <Link
          href="/docs/search"
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Fungsi Pencarian</span>
        </Link>
        <Link
          href="/demo/dropdown"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-xs"
        >
          <span>Coba Live Demo Dropdown</span>
          <CheckCircle2 className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
