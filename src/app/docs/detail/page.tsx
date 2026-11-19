import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Dokumentasi getDetailWilayah() - Wilayah Indonesia',
  description: 'Panduan fungsi getDetailWilayah() untuk mendapatkan hierarki dan breadcrumb lengkap dari kode wilayah.',
};

export default function DocsDetailPage() {
  return (
    <article className="prose prose-slate max-w-none">
      {/* Header */}
      <div className="border-b border-slate-100 pb-5 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-md uppercase tracking-wider inline-block">
            Hierarchy & Breadcrumb
          </span>
          <span className="text-xs text-slate-400 font-mono">fungsi: getDetailWilayah(kode)</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Fungsi <code>getDetailWilayah()</code>
        </h1>
        <p className="text-sm text-slate-500 m-0">
          Mendapatkan pohon hierarki lengkap (Desa ➔ Kecamatan ➔ Kabupaten ➔ Provinsi) hanya dari satu kode wilayah.
        </p>
      </div>

      {/* Keuntungan Fitur Ini */}
      <div className="not-prose bg-purple-50/70 border border-purple-200 p-4 rounded-xl mb-6">
        <div className="flex items-center gap-1.5 font-bold text-purple-900 text-xs mb-1">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span>Solusi Ideal untuk Database Alamat & Checkout E-commerce:</span>
        </div>
        <p className="text-xs text-purple-950 leading-relaxed m-0">
          Dalam database aplikasi, biasanya Anda hanya perlu menyimpan 1 kolom kode desa pengguna (misal: <code>"3204052001"</code>).
          Ketika ingin menampilkan alamat lengkap di invoice atau profil (contoh: <em>"Cileunyi Kulon, Kec. Cileunyi, Kab. Bandung, Jawa Barat"</em>),
          Anda cukup memanggil <code>getDetailWilayah("3204052001")</code> tanpa perlu melakukan join database yang rumit.
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
              <th className="p-3">Panjang Digit</th>
              <th className="p-3">Tingkat yang Dideteksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600 font-mono">
            <tr>
              <td className="p-3 font-semibold text-slate-800" rowSpan={4}>kode</td>
              <td className="p-3 text-purple-700" rowSpan={4}>string</td>
              <td className="p-3 text-emerald-700 font-sans font-semibold" rowSpan={4}>Wajib</td>
              <td className="p-3">2 digit (misal: "32")</td>
              <td className="p-3 font-sans text-xs">Otomatis terdeteksi sebagai <strong>Provinsi</strong></td>
            </tr>
            <tr>
              <td className="p-3">4 digit (misal: "3204" atau "32.04")</td>
              <td className="p-3 font-sans text-xs">Otomatis terdeteksi sebagai <strong>Kabupaten/Kota</strong></td>
            </tr>
            <tr>
              <td className="p-3">6 digit (misal: "320405" atau "32.04.05")</td>
              <td className="p-3 font-sans text-xs">Otomatis terdeteksi sebagai <strong>Kecamatan</strong></td>
            </tr>
            <tr>
              <td className="p-3">10 digit (misal: "3204052001" atau "32.04.05.2001")</td>
              <td className="p-3 font-sans text-xs">Otomatis terdeteksi sebagai <strong>Desa/Kelurahan</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tipe Data */}
      <h2 className="text-lg font-bold text-slate-900 mt-6 mb-3">2. Tipe Data (TypeScript Interface)</h2>
      <div className="not-prose mb-8">
        <pre className="bg-slate-900 text-emerald-400 p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed">
{`export interface DetailWilayah {
  /** Tingkat wilayah yang dicari */
  tingkat: 'provinsi' | 'kabupaten' | 'kecamatan' | 'desa';
  /** Kode wilayah tanpa titik */
  kode: string;
  /** Kode resmi Kemendagri dengan titik */
  kode_kemendagri: string;
  /** Nama wilayah terkait */
  nama: string;
  /** Info provinsi induk */
  provinsi?: Provinsi;
  /** Info kabupaten induk (jika tingkat >= kabupaten) */
  kabupaten?: Kabupaten;
  /** Info kecamatan induk (jika tingkat >= kecamatan) */
  kecamatan?: Kecamatan;
  /** Info desa (jika tingkat == desa) */
  desa?: Desa;
}`}
        </pre>
      </div>

      {/* Contoh Step-by-Step */}
      <h2 className="text-lg font-bold text-slate-900 mt-6 mb-3">3. Contoh Kode Pemanggilan</h2>
      <div className="not-prose mb-8">
        <pre className="bg-slate-900 text-slate-200 p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed">
{`import { getDetailWilayah } from 'daftar-wilayah-indonesia';

// Membongkar silsilah dari kode desa:
const detail = getDetailWilayah('3204052001');

if (detail) {
  console.log(detail.tingkat);          // "desa"
  console.log(detail.nama);             // "Cileunyi Kulon"
  console.log(detail.kecamatan?.nama);  // "Cileunyi"
  console.log(detail.kabupaten?.nama);  // "Kabupaten Bandung"
  console.log(detail.provinsi?.nama);   // "Jawa Barat"
  
  // Format teks lengkap untuk alamat pengiriman:
  const alamatLengkap = \`\${detail.nama}, Kec. \${detail.kecamatan?.nama}, \${detail.kabupaten?.nama}, \${detail.provinsi?.nama}\`;
  console.log(alamatLengkap);
  // "Cileunyi Kulon, Kec. Cileunyi, Kabupaten Bandung, Jawa Barat"
}`}
        </pre>
      </div>

      {/* Contoh Output JSON */}
      <h2 className="text-lg font-bold text-slate-900 mt-6 mb-3">4. Contoh Hasil Respon Objek</h2>
      <div className="not-prose mb-8">
        <pre className="bg-slate-950 text-emerald-400 p-4 rounded-xl text-xs font-mono overflow-y-auto max-h-72 leading-relaxed">
{`{
  "tingkat": "desa",
  "kode": "3204052001",
  "kode_kemendagri": "32.04.05.2001",
  "nama": "Cileunyi Kulon",
  "provinsi": {
    "kode": "32",
    "nama": "Jawa Barat"
  },
  "kabupaten": {
    "kode": "3204",
    "kode_kemendagri": "32.04",
    "kode_provinsi": "32",
    "nama": "Kabupaten Bandung",
    "tipe": "Kabupaten"
  },
  "kecamatan": {
    "kode": "320405",
    "kode_kemendagri": "32.04.05",
    "kode_kabupaten": "3204",
    "kode_provinsi": "32",
    "nama": "Cileunyi"
  },
  "desa": {
    "kode": "3204052001",
    "kode_kemendagri": "32.04.05.2001",
    "kode_kecamatan": "320405",
    "kode_kabupaten": "3204",
    "kode_provinsi": "32",
    "nama": "Cileunyi Kulon"
  }
}`}
        </pre>
      </div>

      {/* Navigasi Prev Next */}
      <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between not-prose">
        <Link
          href="/docs/desa"
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Fungsi desa()</span>
        </Link>
        <Link
          href="/docs/search"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-xs"
        >
          <span>Pencarian (cari*)</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
