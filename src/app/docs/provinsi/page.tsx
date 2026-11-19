import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Map, CheckCircle2, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dokumentasi provinsi() - Daftar 38 Provinsi Lengkap',
  description:
    'Panduan lengkap fungsi provinsi() untuk mendapatkan seluruh 38 provinsi di Indonesia termasuk 4 DOB Papua terbaru secara instan.',
  keywords: [
    'fungsi provinsi',
    'daftar 38 provinsi indonesia',
    'kode provinsi kemendagri',
    'dob papua',
    'api provinsi indonesia',
  ],
  alternates: {
    canonical: '/docs/provinsi',
  },
  openGraph: {
    title: 'Dokumentasi provinsi() - Daftar 38 Provinsi Lengkap',
    description:
      'Panduan lengkap fungsi provinsi() untuk mengambil seluruh 38 provinsi resmi di Indonesia dengan zero dependencies.',
    url: '/docs/provinsi',
  },
};

export default function DocsProvinsiPage() {
  return (
    <article className="prose prose-slate max-w-none">
      {/* Header */}
      <div className="border-b border-slate-100 pb-5 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md uppercase tracking-wider inline-block">
            Tingkat 1 (Provinsi)
          </span>
          <span className="text-xs text-slate-400 font-mono">fungsi: provinsi()</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Fungsi <code>provinsi()</code>
        </h1>
        <p className="text-sm text-slate-500 m-0">
          Mengambil seluruh daftar 38 provinsi di Indonesia yang resmi terdaftar di Kemendagri.
        </p>
      </div>

      {/* Ringkasan Fungsi */}
      <h2 className="text-lg font-bold text-slate-900 mt-6 mb-3">1. Spesifikasi Fungsi</h2>
      <div className="not-prose overflow-x-auto mb-6">
        <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
          <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
            <tr>
              <th className="p-3">Parameter</th>
              <th className="p-3">Tipe</th>
              <th className="p-3">Default</th>
              <th className="p-3">Wajib?</th>
              <th className="p-3">Keterangan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600 font-mono">
            <tr>
              <td className="p-3 font-semibold text-slate-800">-</td>
              <td className="p-3 text-purple-700">void</td>
              <td className="p-3">-</td>
              <td className="p-3 text-emerald-700 font-semibold font-sans">Tidak ada</td>
              <td className="p-3 font-sans text-xs">Fungsi ini tidak memerlukan argumen/parameter apapun.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tipe Data TypeScript */}
      <h2 className="text-lg font-bold text-slate-900 mt-6 mb-3">2. Tipe Data (TypeScript Interface)</h2>
      <p className="text-xs sm:text-sm text-slate-600 mb-3">
        Fungsi ini mengembalikan array bertipe <code>Provinsi[]</code>:
      </p>
      <div className="not-prose mb-6">
        <pre className="bg-slate-900 text-emerald-400 p-4 rounded-xl text-xs font-mono overflow-x-auto">
{`export interface Provinsi {
  /** Kode wilayah provinsi (2 digit), contoh: "11", "32", "96" */
  kode: string;
  /** Nama provinsi, contoh: "Aceh", "Jawa Barat", "Papua Barat Daya" */
  nama: string;
}`}
        </pre>
      </div>

      {/* Info 38 Provinsi */}
      <div className="not-prose bg-amber-50 border border-amber-200 p-4 rounded-xl mb-6 text-xs text-amber-900 leading-relaxed">
        <div className="flex items-center gap-1.5 font-bold mb-1">
          <Info className="w-4 h-4 text-amber-700" />
          <span>Informasi Pemekaran 38 Provinsi (DOB Papua):</span>
        </div>
        Di versi 5.0.1, data telah diperbarui mencakup 4 provinsi baru hasil pemekaran Papua:
        <ul className="list-disc list-inside mt-1 space-y-0.5">
          <li><strong>93</strong>: Papua Selatan</li>
          <li><strong>94</strong>: Papua Tengah</li>
          <li><strong>95</strong>: Papua Pegunungan</li>
          <li><strong>96</strong>: Papua Barat Daya</li>
        </ul>
      </div>

      {/* Step by step */}
      <h2 className="text-lg font-bold text-slate-900 mt-6 mb-3">3. Cara Penggunaan Step-by-Step</h2>
      <div className="space-y-4 not-prose mb-8">
        {/* Step 1 */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
            Langkah 1: Import Fungsi
          </div>
          <p className="text-xs text-slate-600 mb-2">
            Import fungsi <code>provinsi</code> di file komponen Anda:
          </p>
          <pre className="bg-slate-900 text-slate-200 p-3 rounded-lg text-xs font-mono">
{`import { provinsi } from 'daftar-wilayah-indonesia';`}
          </pre>
        </div>

        {/* Step 2 */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
            Langkah 2: Panggil Fungsi
          </div>
          <p className="text-xs text-slate-600 mb-2">
            Panggil fungsinya tanpa mengirimkan parameter:
          </p>
          <pre className="bg-slate-900 text-slate-200 p-3 rounded-lg text-xs font-mono">
{`const listProvinsi = provinsi();
console.log(listProvinsi.length); // 38`}
          </pre>
        </div>

        {/* Step 3 */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
            Langkah 3: Terapkan di Elemen HTML Select / Dropdown
          </div>
          <p className="text-xs text-slate-600 mb-2">
            Lakukan looping untuk menampilkan daftar ke dalam <code>&lt;select&gt;</code>:
          </p>
          <pre className="bg-slate-900 text-slate-200 p-3 rounded-lg text-xs font-mono overflow-x-auto">
{`<select onChange={(e) => setKodeProvinsi(e.target.value)}>
  <option value="">Pilih Provinsi</option>
  {listProvinsi.map((prov) => (
    <option key={prov.kode} value={prov.kode}>
      {prov.nama}
    </option>
  ))}
</select>`}
          </pre>
        </div>
      </div>

      {/* Contoh Output JSON */}
      <h2 className="text-lg font-bold text-slate-900 mt-6 mb-3">4. Contoh Hasil Respon (Output)</h2>
      <div className="not-prose mb-8">
        <pre className="bg-slate-950 text-emerald-400 p-4 rounded-xl text-xs font-mono max-h-60 overflow-y-auto leading-relaxed">
{`[
  { "kode": "11", "nama": "Aceh" },
  { "kode": "12", "nama": "Sumatera Utara" },
  { "kode": "13", "nama": "Sumatera Barat" },
  { "kode": "14", "nama": "Riau" },
  { "kode": "15", "nama": "Jambi" },
  { "kode": "16", "nama": "Sumatera Selatan" },
  { "kode": "17", "nama": "Bengkulu" },
  { "kode": "18", "nama": "Lampung" },
  { "kode": "19", "nama": "Kepulauan Bangka Belitung" },
  { "kode": "21", "nama": "Kepulauan Riau" },
  { "kode": "31", "nama": "Daerah Khusus Ibukota Jakarta" },
  { "kode": "32", "nama": "Jawa Barat" },
  { "kode": "33", "nama": "Jawa Tengah" },
  { "kode": "34", "nama": "Daerah Istimewa Yogyakarta" },
  { "kode": "35", "nama": "Jawa Timur" },
  { "kode": "36", "nama": "Banten" },
  { "kode": "51", "nama": "Bali" },
  { "kode": "52", "nama": "Nusa Tenggara Barat" },
  { "kode": "53", "nama": "Nusa Tenggara Timur" },
  { "kode": "61", "nama": "Kalimantan Barat" },
  { "kode": "62", "nama": "Kalimantan Tengah" },
  { "kode": "63", "nama": "Kalimantan Selatan" },
  { "kode": "64", "nama": "Kalimantan Timur" },
  { "kode": "65", "nama": "Kalimantan Utara" },
  { "kode": "71", "nama": "Sulawesi Utara" },
  { "kode": "72", "nama": "Sulawesi Tengah" },
  { "kode": "73", "nama": "Sulawesi Selatan" },
  { "kode": "74", "nama": "Sulawesi Tenggara" },
  { "kode": "75", "nama": "Gorontalo" },
  { "kode": "76", "nama": "Sulawesi Barat" },
  { "kode": "81", "nama": "Maluku" },
  { "kode": "82", "nama": "Maluku Utara" },
  { "kode": "91", "nama": "Papua" },
  { "kode": "92", "nama": "Papua Barat" },
  { "kode": "93", "nama": "Papua Selatan" },
  { "kode": "94", "nama": "Papua Tengah" },
  { "kode": "95", "nama": "Papua Pegunungan" },
  { "kode": "96", "nama": "Papua Barat Daya" }
]`}
        </pre>
      </div>

      {/* Navigasi Prev Next */}
      <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between not-prose">
        <Link
          href="/docs"
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Pengenalan</span>
        </Link>
        <Link
          href="/docs/kabupaten"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-xs"
        >
          <span>Bab 2: Fungsi kabupaten()</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}

