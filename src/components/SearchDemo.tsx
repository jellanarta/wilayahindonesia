'use client';

import React, { useState, useMemo } from 'react';
import { cariWilayah, HasilCariWilayah, TingkatWilayah } from 'daftar-wilayah-indonesia';
import { Search, MapPin, Tag, Building2, Landmark, Home, ExternalLink } from 'lucide-react';

export default function SearchDemo() {
  const [keyword, setKeyword] = useState<string>('Bandung');
  const [selectedTingkat, setSelectedTingkat] = useState<string>('semua');
  const [limit, setLimit] = useState<number>(30);

  const results: HasilCariWilayah[] = useMemo(() => {
    if (!keyword.trim()) return [];
    const options: { tingkat?: TingkatWilayah | TingkatWilayah[]; limit?: number } = {
      limit: limit,
    };
    if (selectedTingkat !== 'semua') {
      options.tingkat = selectedTingkat as TingkatWilayah;
    }
    return cariWilayah(keyword, options);
  }, [keyword, selectedTingkat, limit]);

  const getBadgeColor = (tingkat: TingkatWilayah) => {
    switch (tingkat) {
      case 'provinsi':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'kabupaten':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'kecamatan':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'desa':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getIcon = (tingkat: TingkatWilayah) => {
    switch (tingkat) {
      case 'provinsi':
        return <Landmark className="w-4 h-4" />;
      case 'kabupaten':
        return <Building2 className="w-4 h-4" />;
      case 'kecamatan':
        return <Tag className="w-4 h-4" />;
      case 'desa':
        return <Home className="w-4 h-4" />;
      default:
        return <MapPin className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="font-bold text-slate-900 text-base">Pencarian Cerdas (Global Fuzzy Search)</h3>
          <p className="text-xs text-slate-500">
            Cari nama wilayah dari 83.000+ data secara instan dan case-insensitive
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl">
          {[
            { id: 'semua', label: 'Semua' },
            { id: 'provinsi', label: 'Provinsi' },
            { id: 'kabupaten', label: 'Kabupaten/Kota' },
            { id: 'kecamatan', label: 'Kecamatan' },
            { id: 'desa', label: 'Desa' },
          ].map((pill) => (
            <button
              key={pill.id}
              onClick={() => setSelectedTingkat(pill.id)}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition ${
                selectedTingkat === pill.id
                  ? 'bg-white text-emerald-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Box */}
      <div className="relative mb-6">
        <Search className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Ketik nama kota, kecamatan, atau desa (contoh: Bandung, Praya, Papua, Sleman)..."
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
        />
        {keyword && (
          <button
            onClick={() => setKeyword('')}
            className="absolute right-3.5 top-3 text-xs bg-slate-200 hover:bg-slate-300 text-slate-600 px-2 py-1 rounded-md transition"
          >
            Clear
          </button>
        )}
      </div>

      {/* Quick Suggestions */}
      <div className="flex items-center gap-2 mb-6 text-xs text-slate-500 flex-wrap">
        <span className="font-medium">Coba cari:</span>
        {['Bandung', 'Lombok', 'Praya', 'Papua', 'Sleman', 'Denpasar', 'Surabaya', 'Semarang'].map(
          (sug) => (
            <button
              key={sug}
              onClick={() => setKeyword(sug)}
              className="px-2 py-0.5 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 rounded-md border border-slate-200 transition"
            >
              {sug}
            </button>
          )
        )}
      </div>

      {/* Result Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-3 mb-4">
        <span>
          Menemukan <strong className="text-slate-900 font-semibold">{results.length}</strong> hasil pencarian untuk "{keyword}"
        </span>
        <div className="flex items-center gap-1.5">
          <span>Batas tampilan:</span>
          <select
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            className="border border-slate-200 rounded px-1.5 py-0.5 text-xs bg-white text-slate-800"
          >
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>

      {/* Results Grid */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[480px] overflow-y-auto pr-1">
          {results.map((item, idx) => (
            <div
              key={`${item.kode}-${idx}`}
              className="p-3.5 rounded-xl border border-slate-200 hover:border-emerald-400 bg-white hover:bg-emerald-50/20 hover:shadow-sm transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md border uppercase tracking-wider ${getBadgeColor(
                      item.tingkat
                    )}`}
                  >
                    {getIcon(item.tingkat)}
                    {item.tingkat}
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                    {item.kode_kemendagri}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{item.nama}</h4>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                Kode Bersih: <span className="font-mono text-slate-700 font-medium">{item.kode}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200">
          <MapPin className="w-8 h-8 text-slate-300 mx-auto mb-2" />
          <p className="text-sm font-medium text-slate-600">Tidak ada wilayah yang cocok dengan "{keyword}"</p>
          <p className="text-xs text-slate-400 mt-1">Coba gunakan kata kunci nama lain atau ubah filter tingkat</p>
        </div>
      )}
    </div>
  );
}
