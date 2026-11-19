import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Building, Info, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'Dokumentasi kabupaten() - Wilayah Indonesia',
  description: 'Panduan lengkap cara menggunakan fungsi kabupaten() dengan atau tanpa parameter kode provinsi.',
};

export default function DocsKabupatenPage() {
  return (
    <article className="prose prose-slate max-w-none">
      {/* Header */}
      <div className="border-b border-slate-100 pb-5 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md uppercase tracking-wider inline-block">
            Tingkat 2 (Kabupaten & Kota)
          </span>
          <span className="text-xs text-slate-400 font-mono">fungsi: kabupaten(kode_provinsi?)</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Fungsi <code>kabupaten()</code>
        </h1>
        <p className="text-sm text-slate-500 m-0">
          Mengambil daftar kabupaten dan kota di Indonesia. Dapat difilter berdasarkan provinsi tertentu atau menampilkan seluruh 514 kabupaten/kota se-Indonesia.
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
              <td className="p-3 font-semibold text-slate-800">kode_provinsi</td>
              <td className="p-3 text-purple-700">string | undefined</td>
              <td className="p-3 text-amber-700 font-sans font-semibold">Opsional</td>
              <td className="p-3 text-emerald-700">"32", "52", "11"</td>
              <td className="p-3 font-sans text-xs">
                Kode 2 digit provinsi induk. Jika dikosongkan, akan mengembalikan seluruh kabupaten di Indonesia.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Penjelasan Perilaku (Behavior) */}
      <h2 className="text-lg font-bold text-slate-900 mt-6 mb-3">2. Perilaku Pemanggilan (Behavior)</h2>
      <div className="space-y-3 not-prose mb-8">
        {/* Kasus A */}
        <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl">
          <div className="text-xs font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Kasus A: Dengan Parameter Kode Provinsi (Umum untuk Form Alamat)</span>
          </div>
          <p className="text-xs text-slate-600 mb-2">
            Jika Anda mengirimkan kode provinsi (misal: <code>'32'</code> untuk Jawa Barat), fungsi hanya akan mengembalikan kabupaten/kota yang ada di provinsi tersebut (27 kabupaten/kota).
          </p>
          <pre className="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono">
{`const kabJabar = kabupaten('32');
console.log(kabJabar.length); // 27`}
          </pre>
        </div>

        {/* Kasus B */}
        <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-xl">
          <div className="text-xs font-bold text-blue-900 mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span>Kasus B: Tanpa Parameter (Dikosongkan)</span>
          </div>
          <p className="text-xs text-slate-600 mb-2">
            Jika dipanggil tanpa argumen apapun, fungsi akan mengembalikan <strong>seluruh 514 kabupaten dan kota</strong> di Indonesia. Berguna untuk fitur pencarian global atau select kota universal.
          </p>
          <pre className="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono">
{`const semuaKabupaten = kabupaten();
console.log(semuaKabupaten.length); // 514`}
          </pre>
        </div>

        {/* Kasus C */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="text-xs font-bold text-slate-800 mb-1 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <span>Kasus C: Kode Provinsi Salah / Tidak Ditemukan</span>
          </div>
          <p className="text-xs text-slate-600 mb-2">
            Jika Anda mengirim kode yang tidak ada (misal: <code>'9999'</code>), fungsi akan dengan aman mengembalikan <strong>array kosong <code>[]</code></strong> (tidak error dan tidak mengembalikan seluruh data).
          </p>
          <pre className="bg-slate-900 text-slate-300 p-3 rounded-lg text-xs font-mono">
{`const hasil = kabupaten('9999');
console.log(hasil); // []`}
          </pre>
        </div>
      </div>

      {/* Tipe Data */}
      <h2 className="text-lg font-bold text-slate-900 mt-6 mb-3">3. Tipe Data (TypeScript Interface)</h2>
      <div className="not-prose mb-8">
        <pre className="bg-slate-900 text-emerald-400 p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed">
{`export interface Kabupaten {
  /** Kode kabupaten tanpa titik (4 digit), contoh: "3204" */
  kode: string;
  /** Kode resmi Kemendagri dengan titik, contoh: "32.04" */
  kode_kemendagri: string;
  /** Kode provinsi induk (2 digit), contoh: "32" */
  kode_provinsi: string;
  /** Nama daerah, contoh: "Kabupaten Bandung" atau "Kota Bandung" */
  nama: string;
  /** Tipe daerah administratif */
  tipe: 'Kabupaten' | 'Kota';
}`}
        </pre>
      </div>

      {/* Contoh Step-by-Step Cascading */}
      <h2 className="text-lg font-bold text-slate-900 mt-6 mb-3">4. Contoh Penggunaan di React / Next.js</h2>
      <p className="text-xs sm:text-sm text-slate-600 mb-3">
        Berikut contoh menghubungkan dropdown provinsi dengan dropdown kabupaten:
      </p>
      <div className="not-prose mb-8">
        <pre className="bg-slate-900 text-slate-200 p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed">
{`import { useState } from 'react';
import { provinsi, kabupaten } from 'daftar-wilayah-indonesia';

export default function ContohPilihKota() {
  const [kodeProv, setKodeProv] = useState('');
  const [kodeKab, setKodeKab] = useState('');

  const listProvinsi = provinsi();
  // Kabupaten akan otomatis reaktif saat provinsi dipilih
  const listKabupaten = kodeProv ? kabupaten(kodeProv) : [];

  return (
    <div className="space-y-3">
      {/* 1. Pilih Provinsi */}
      <select value={kodeProv} onChange={(e) => {
        setKodeProv(e.target.value);
        setKodeKab(''); // reset kabupaten saat provinsi berubah
      }}>
        <option value="">Pilih Provinsi</option>
        {listProvinsi.map((p) => (
          <option key={p.kode} value={p.kode}>{p.nama}</option>
        ))}
      </select>

      {/* 2. Pilih Kabupaten */}
      <select
        value={kodeKab}
        disabled={!kodeProv}
        onChange={(e) => setKodeKab(e.target.value)}
      >
        <option value="">Pilih Kabupaten / Kota</option>
        {listKabupaten.map((k) => (
          <option key={k.kode} value={k.kode}>
            [{k.tipe}] {k.nama}
          </option>
        ))}
      </select>
    </div>
  );
}`}
        </pre>
      </div>

      {/* Contoh Output JSON */}
      <h2 className="text-lg font-bold text-slate-900 mt-6 mb-3">5. Contoh Hasil Respon <code>kabupaten('52')</code> (NTB)</h2>
      <div className="not-prose mb-8">
        <pre className="bg-slate-950 text-emerald-400 p-4 rounded-xl text-xs font-mono overflow-y-auto max-h-64 leading-relaxed">
{`[
  {
    "kode": "5201",
    "kode_kemendagri": "52.01",
    "kode_provinsi": "52",
    "nama": "Kabupaten Lombok Barat",
    "tipe": "Kabupaten"
  },
  {
    "kode": "5202",
    "kode_kemendagri": "52.02",
    "kode_provinsi": "52",
    "nama": "Kabupaten Lombok Tengah",
    "tipe": "Kabupaten"
  },
  {
    "kode": "5203",
    "kode_kemendagri": "52.03",
    "kode_provinsi": "52",
    "nama": "Kabupaten Lombok Timur",
    "tipe": "Kabupaten"
  },
  {
    "kode": "5271",
    "kode_kemendagri": "52.71",
    "kode_provinsi": "52",
    "nama": "Kota Mataram",
    "tipe": "Kota"
  },
  {
    "kode": "5272",
    "kode_kemendagri": "52.72",
    "kode_provinsi": "52",
    "nama": "Kota Bima",
    "tipe": "Kota"
  }
]`}
        </pre>
      </div>

      {/* Navigasi Prev Next */}
      <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between not-prose">
        <Link
          href="/docs/provinsi"
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Fungsi provinsi()</span>
        </Link>
        <Link
          href="/docs/kecamatan"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-xs"
        >
          <span>Bab 3: Fungsi kecamatan()</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
