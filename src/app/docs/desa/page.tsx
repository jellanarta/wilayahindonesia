import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Home, Zap, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dokumentasi desa() - 83.345+ Desa dan Kelurahan',
  description:
    'Panduan lengkap fungsi desa() dengan arsitektur lazy loading memori efisien untuk mengambil daftar desa/kelurahan per kecamatan.',
  keywords: [
    'fungsi desa kelurahan',
    '83345 desa indonesia',
    'lazy loading data desa',
    'kode kelurahan kemendagri',
  ],
  alternates: {
    canonical: '/docs/desa',
  },
  openGraph: {
    title: 'Dokumentasi desa() - 83.345+ Desa dan Kelurahan',
    description:
      'Panduan lengkap cara menggunakan fungsi desa() untuk mendapatkan data desa dan kelurahan di Indonesia.',
    url: '/docs/desa',
  },
};

export default function DocsDesaPage() {
  return (
    <article className="prose prose-slate max-w-none">
      {/* Header */}
      <div className="border-b border-slate-100 pb-5 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md uppercase tracking-wider inline-block">
            Tingkat 4 (Desa & Kelurahan)
          </span>
          <span className="text-xs text-slate-400 font-mono">fungsi: desa(kode_kecamatan?)</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Fungsi <code>desa()</code>
        </h1>
        <p className="text-sm text-slate-500 m-0">
          Mengambil daftar desa dan kelurahan resmi di Indonesia. Mendukung format kode titik maupun tanpa titik.
        </p>
      </div>

      {/* Tabel Parameter */}
      <h2 className="text-lg font-bold text-slate-900 mt-6 mb-3">1. Spesifikasi Parameter</h2>
      <div className="not-prose overflow-x-auto mb-6">
        <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
          <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
            <tr>
              <th className="p-3">Parameter</th>
              <th className="p-3">Tipe</th>
              <th className="p-3">Wajib?</th>
              <th className="p-3">Contoh Nilai</th>
              <th className="p-3">Keterangan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600 font-mono">
            <tr>
              <td className="p-3 font-semibold text-slate-800">kode_kecamatan</td>
              <td className="p-3 text-purple-700">string | undefined</td>
              <td className="p-3 text-amber-700 font-sans font-semibold">Opsional</td>
              <td className="p-3 text-emerald-700">"320405" atau "32.04.05"</td>
              <td className="p-3 font-sans text-xs">
                Kode 6 digit kecamatan induk. Bisa dengan titik maupun tanpa titik.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Fitur Arsitektur Performa */}
      <div className="not-prose bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-4 rounded-xl mb-6">
        <div className="flex items-center gap-1.5 font-bold text-emerald-900 text-xs mb-1">
          <Zap className="w-4 h-4 text-emerald-600" />
          <span>Arsitektur Super Cepat & Hemat Memori (Lazy Initialization):</span>
        </div>
        <p className="text-xs text-emerald-950 leading-relaxed m-0">
          Indonesia memiliki lebih dari <strong>83.345 desa/kelurahan</strong>. Di versi 5.0.1, data desa menggunakan teknik
          <strong> Lazy Loading</strong>. Jika aplikasi Anda hanya butuh data Provinsi dan Kabupaten, data desa sama sekali tidak akan memakan memori RAM (0 MB).
          Saat fungsi <code>desa(...)</code> pertama kali dipanggil, index hash map dibuat seketika dan query berikutnya O(1) instan (hanya <strong>~0.005 milidetik</strong>).
        </p>
      </div>

      {/* Perilaku Pemanggilan */}
      <h2 className="text-lg font-bold text-slate-900 mt-6 mb-3">2. Perilaku Pemanggilan (Behavior)</h2>
      <div className="space-y-3 not-prose mb-8">
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="text-xs font-bold text-slate-900 mb-1">
            Kasus A: Dengan Parameter Kode Kecamatan (Paling Umum)
          </div>
          <p className="text-xs text-slate-600 mb-2">
            Mengembalikan seluruh desa/kelurahan di kecamatan tersebut (rata-rata 6-20 desa).
          </p>
          <pre className="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono">
{`// Kedua penulisan ini bekerja sama baiknya:
const desa1 = desa('320405');   // Tanpa titik
const desa2 = desa('32.04.05'); // Format titik Kemendagri

console.log(desa1.length); // 6 desa di Kec. Cileunyi`}
          </pre>
        </div>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="text-xs font-bold text-slate-900 mb-1">
            Kasus B: Tanpa Parameter
          </div>
          <p className="text-xs text-slate-600 mb-2">
            Jika dipanggil tanpa argumen, fungsi akan mengembalikan <strong>seluruh 83.345+ desa</strong> di Indonesia.
          </p>
          <pre className="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono">
{`const semuaDesa = desa();
console.log(semuaDesa.length); // 83345`}
          </pre>
        </div>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="text-xs font-bold text-slate-900 mb-1">
            Kasus C: Kode Tidak Ditemukan
          </div>
          <p className="text-xs text-slate-600 mb-2">
            Jika kode tidak terdaftar, fungsi dengan aman mengembalikan array kosong <code>[]</code>.
          </p>
          <pre className="bg-slate-900 text-slate-300 p-3 rounded-lg text-xs font-mono">
{`const hasil = desa('999999');
console.log(hasil); // []`}
          </pre>
        </div>
      </div>

      {/* Tipe Data */}
      <h2 className="text-lg font-bold text-slate-900 mt-6 mb-3">3. Tipe Data (TypeScript Interface)</h2>
      <div className="not-prose mb-8">
        <pre className="bg-slate-900 text-emerald-400 p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed">
{`export interface Desa {
  /** Kode desa tanpa titik (10 digit), contoh: "3204052001" */
  kode: string;
  /** Kode resmi Kemendagri dengan titik, contoh: "32.04.05.2001" */
  kode_kemendagri: string;
  /** Kode kecamatan induk (6 digit), contoh: "320405" */
  kode_kecamatan: string;
  /** Kode kabupaten/kota induk (4 digit), contoh: "3204" */
  kode_kabupaten: string;
  /** Kode provinsi induk (2 digit), contoh: "32" */
  kode_provinsi: string;
  /** Nama desa atau kelurahan, contoh: "Cileunyi Kulon" */
  nama: string;
}`}
        </pre>
      </div>

      {/* Contoh Output JSON */}
      <h2 className="text-lg font-bold text-slate-900 mt-6 mb-3">4. Contoh Hasil Respon <code>desa('320405')</code></h2>
      <div className="not-prose mb-8">
        <pre className="bg-slate-950 text-emerald-400 p-4 rounded-xl text-xs font-mono overflow-y-auto max-h-64 leading-relaxed">
{`[
  {
    "kode": "3204052001",
    "kode_kemendagri": "32.04.05.2001",
    "kode_kecamatan": "320405",
    "kode_kabupaten": "3204",
    "kode_provinsi": "32",
    "nama": "Cileunyi Kulon"
  },
  {
    "kode": "3204052002",
    "kode_kemendagri": "32.04.05.2002",
    "kode_kecamatan": "320405",
    "kode_kabupaten": "3204",
    "kode_provinsi": "32",
    "nama": "Cileunyi Wetan"
  },
  {
    "kode": "3204052003",
    "kode_kemendagri": "32.04.05.2003",
    "kode_kecamatan": "320405",
    "kode_kabupaten": "3204",
    "kode_provinsi": "32",
    "nama": "Cibiru Hilir"
  },
  {
    "kode": "3204052004",
    "kode_kemendagri": "32.04.05.2004",
    "kode_kecamatan": "320405",
    "kode_kabupaten": "3204",
    "kode_provinsi": "32",
    "nama": "Cibiru Wetan"
  },
  {
    "kode": "3204052005",
    "kode_kemendagri": "32.04.05.2005",
    "kode_kecamatan": "320405",
    "kode_kabupaten": "3204",
    "kode_provinsi": "32",
    "nama": "Cinunuk"
  },
  {
    "kode": "3204052006",
    "kode_kemendagri": "32.04.05.2006",
    "kode_kecamatan": "320405",
    "kode_kabupaten": "3204",
    "kode_provinsi": "32",
    "nama": "Cimekar"
  }
]`}
        </pre>
      </div>

      {/* Navigasi Prev Next */}
      <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between not-prose">
        <Link
          href="/docs/kecamatan"
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Fungsi kecamatan()</span>
        </Link>
        <Link
          href="/docs/detail"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-xs"
        >
          <span>getDetailWilayah()</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}

