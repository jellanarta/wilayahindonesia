'use client';

import React, { useState } from 'react';
import { Code2, Copy, Check, FileText } from 'lucide-react';

export default function ApiDocs() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const methods = [
    {
      id: 'provinsi',
      name: 'provinsi()',
      desc: 'Mengambil seluruh 38 data provinsi di Indonesia.',
      returnType: 'Provinsi[]',
      example: `import { provinsi } from 'daftar-wilayah-indonesia';

const data = provinsi();
console.log(data);
// Output:
// [
//   { kode: '11', nama: 'Aceh' },
//   { kode: '32', nama: 'Jawa Barat' },
//   ...
//   { kode: '96', nama: 'Papua Barat Daya' }
// ]`,
    },
    {
      id: 'kabupaten',
      name: 'kabupaten(kode_provinsi?)',
      desc: 'Mengambil daftar kabupaten/kota. Jika kode provinsi diisi, mengambil kabupaten di provinsi tersebut. Jika dikosongkan, mengambil seluruh 514 kabupaten di Indonesia.',
      returnType: 'Kabupaten[]',
      example: `import { kabupaten } from 'daftar-wilayah-indonesia';

// Ambil kabupaten di Jawa Barat (32)
const kabJabar = kabupaten('32');

// Ambil seluruh 514 kabupaten di Indonesia
const semuaKab = kabupaten();`,
    },
    {
      id: 'kecamatan',
      name: 'kecamatan(kode_kabupaten?)',
      desc: 'Mengambil daftar kecamatan. Menerima format titik (32.04) maupun tanpa titik (3204).',
      returnType: 'Kecamatan[]',
      example: `import { kecamatan } from 'daftar-wilayah-indonesia';

// Kedua format ini valid dan menghasilkan output yang sama:
const kec1 = kecamatan('3204');
const kec2 = kecamatan('32.04');`,
    },
    {
      id: 'desa',
      name: 'desa(kode_kecamatan?)',
      desc: 'Mengambil daftar desa/kelurahan di suatu kecamatan. Menerima format titik (32.04.05) maupun tanpa titik (320405).',
      returnType: 'Desa[]',
      example: `import { desa } from 'daftar-wilayah-indonesia';

const listDesa = desa('320405'); // atau '32.04.05'
console.log(listDesa);`,
    },
    {
      id: 'getDetailWilayah',
      name: 'getDetailWilayah(kode)',
      desc: 'Membongkar seluruh silsilah/hierarki wilayah dari sembarang kode (provinsi, kabupaten, kecamatan, atau desa).',
      returnType: 'DetailWilayah | null',
      example: `import { getDetailWilayah } from 'daftar-wilayah-indonesia';

const info = getDetailWilayah('3204052001');

console.log(info?.tingkat);          // 'desa'
console.log(info?.desa?.nama);       // 'Cileunyi Kulon'
console.log(info?.kecamatan?.nama);  // 'Cileunyi'
console.log(info?.kabupaten?.nama);  // 'Kabupaten Bandung'
console.log(info?.provinsi?.nama);   // 'Jawa Barat'`,
    },
    {
      id: 'cariWilayah',
      name: 'cariWilayah(keyword, options?)',
      desc: 'Pencarian multi-level berdasarkan nama wilayah secara cerdas, cepat, dan case-insensitive.',
      returnType: 'HasilCariWilayah[]',
      example: `import { cariWilayah } from 'daftar-wilayah-indonesia';

// Cari di semua level
const hasil = cariWilayah('Bandung', { limit: 10 });

// Cari khusus level kabupaten
const hasilKab = cariWilayah('Bandung', { tingkat: 'kabupaten' });`,
    },
  ];

  return (
    <div id="dokumentasi" className="mt-16 pt-8 border-t border-slate-200">
      <div className="mb-8">
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
          API Reference
        </span>
        <h2 className="text-2xl font-bold text-slate-900 mt-2">Dokumentasi Fungsi Lengkap</h2>
        <p className="text-sm text-slate-500 mt-1">
          Daftar fungsi yang tersedia dalam package <code className="text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded">daftar-wilayah-indonesia</code>
        </p>
      </div>

      <div className="space-y-6">
        {methods.map((method) => (
          <div
            key={method.id}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-emerald-600" />
                <h3 className="font-mono font-bold text-slate-900 text-base">{method.name}</h3>
              </div>
              <span className="font-mono text-xs font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200 self-start sm:self-auto">
                Return: {method.returnType}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-4">{method.desc}</p>

            {/* Code snippet */}
            <div className="relative group">
              <pre className="text-xs font-mono bg-slate-900 text-slate-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
                {method.example}
              </pre>
              <button
                onClick={() => copyToClipboard(method.example, method.id)}
                className="absolute right-3 top-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white p-1.5 rounded-lg opacity-80 group-hover:opacity-100 transition"
                title="Salin Kode"
              >
                {copiedKey === method.id ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

