import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Tag, Check, Info, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Dokumentasi kecamatan() - Wilayah Indonesia',
  description: 'Panduan lengkap cara menggunakan fungsi kecamatan() dengan format kode dengan titik atau tanpa titik.',
};

export default function DocsKecamatanPage() {
  return (
    <article className="prose prose-slate max-w-none">
      {/* Header */}
      <div className="border-b border-slate-100 pb-5 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md uppercase tracking-wider inline-block">
            Tingkat 3 (Kecamatan)
          </span>
          <span className="text-xs text-slate-400 font-mono">fungsi: kecamatan(kode_kabupaten?)</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Fungsi <code>kecamatan()</code>
        </h1>
        <p className="text-sm text-slate-500 m-0">
          Mengambil daftar kecamatan di suatu kabupaten/kota. Mendukung format kode bertitik (standar Kemendagri) maupun kode bersih tanpa titik.
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
              <th className="p-3">Format yang Diterima</th>
              <th className="p-3">Keterangan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600 font-mono">
            <tr>
              <td className="p-3 font-semibold text-slate-800">kode_kabupaten</td>
              <td className="p-3 text-purple-700">string | undefined</td>
              <td className="p-3 text-amber-700 font-sans font-semibold">Opsional</td>
              <td className="p-3 text-emerald-700">"3204" atau "32.04"</td>
              <td className="p-3 font-sans text-xs">
                Kode 4 digit kabupaten/kota induk. Otomatis menerima baik format dengan titik maupun tanpa titik.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Fitur Fleksibilitas Titik */}
      <div className="not-prose bg-emerald-50/80 border border-emerald-200 p-4 rounded-xl mb-6">
        <div className="flex items-center gap-1.5 font-bold text-emerald-900 text-xs mb-1">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>Fleksibilitas Kode (Titik vs Tanpa Titik):</span>
        </div>
        <p className="text-xs text-emerald-950 leading-relaxed m-0">
          Anda tidak perlu pusing memikirkan apakah kode dari API/form memiliki titik atau tidak. Kedua pemanggilan di bawah ini <strong>100% valid dan menghasilkan data yang identik</strong>:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 font-mono text-xs">
          <div className="bg-slate-900 text-slate-200 p-2.5 rounded-lg">
            <code>kecamatan('3204'); // Tanpa titik</code>
          </div>
          <div className="bg-slate-900 text-slate-200 p-2.5 rounded-lg">
            <code>kecamatan('32.04'); // Standar titik Kemendagri</code>
          </div>
        </div>
      </div>

      {/* Perilaku Pemanggilan */}
      <h2 className="text-lg font-bold text-slate-900 mt-6 mb-3">2. Perilaku Pemanggilan (Behavior)</h2>
      <div className="space-y-3 not-prose mb-8">
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="text-xs font-bold text-slate-900 mb-1">
            Kasus A: Dengan Parameter Kode Kabupaten (Filter Per Kota)
          </div>
          <p className="text-xs text-slate-600 mb-2">
            Mengembalikan seluruh kecamatan di kabupaten tersebut (contoh: Kabupaten Bandung memiliki 31 kecamatan).
          </p>
          <pre className="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono">
{`const listKec = kecamatan('3204');
console.log(listKec.length); // 31 kecamatan`}
          </pre>
        </div>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="text-xs font-bold text-slate-900 mb-1">
            Kasus B: Tanpa Parameter (Semua Kecamatan se-Indonesia)
          </div>
          <p className="text-xs text-slate-600 mb-2">
            Jika parameter dikosongkan, fungsi akan mengembalikan <strong>seluruh 7.265+ kecamatan</strong> yang ada di Indonesia.
          </p>
          <pre className="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono">
{`const semuaKecamatan = kecamatan();
console.log(semuaKecamatan.length); // 7265+`}
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
{`const hasil = kecamatan('0000');
console.log(hasil); // []`}
          </pre>
        </div>
      </div>

      {/* Tipe Data */}
      <h2 className="text-lg font-bold text-slate-900 mt-6 mb-3">3. Tipe Data (TypeScript Interface)</h2>
      <div className="not-prose mb-8">
        <pre className="bg-slate-900 text-emerald-400 p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed">
{`export interface Kecamatan {
  /** Kode kecamatan tanpa titik (6 digit), contoh: "320405" */
  kode: string;
  /** Kode resmi Kemendagri dengan titik, contoh: "32.04.05" */
  kode_kemendagri: string;
  /** Kode kabupaten/kota induk (4 digit), contoh: "3204" */
  kode_kabupaten: string;
  /** Kode provinsi induk (2 digit), contoh: "32" */
  kode_provinsi: string;
  /** Nama kecamatan, contoh: "Cileunyi" */
  nama: string;
}`}
        </pre>
      </div>

      {/* Contoh Output JSON */}
      <h2 className="text-lg font-bold text-slate-900 mt-6 mb-3">4. Contoh Hasil Respon <code>kecamatan('3204')</code></h2>
      <div className="not-prose mb-8">
        <pre className="bg-slate-950 text-emerald-400 p-4 rounded-xl text-xs font-mono overflow-y-auto max-h-64 leading-relaxed">
{`[
  {
    "kode": "320405",
    "kode_kemendagri": "32.04.05",
    "kode_kabupaten": "3204",
    "kode_provinsi": "32",
    "nama": "Cileunyi"
  },
  {
    "kode": "320407",
    "kode_kemendagri": "32.04.07",
    "kode_kabupaten": "3204",
    "kode_provinsi": "32",
    "nama": "Cilengkrang"
  },
  {
    "kode": "320408",
    "kode_kemendagri": "32.04.08",
    "kode_kabupaten": "3204",
    "kode_provinsi": "32",
    "nama": "Bojongsoang"
  }
]`}
        </pre>
      </div>

      {/* Navigasi Prev Next */}
      <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between not-prose">
        <Link
          href="/docs/kabupaten"
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Fungsi kabupaten()</span>
        </Link>
        <Link
          href="/docs/desa"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-xs"
        >
          <span>Bab 4: Fungsi desa()</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
