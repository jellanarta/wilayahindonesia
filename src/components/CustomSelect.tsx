'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ChevronDown, Check, Search, X } from 'lucide-react';

export interface SelectOption {
  kode: string;
  nama: string;
  badge?: string;
  sub?: string;
}

interface CustomSelectProps {
  label: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  disabledPlaceholder?: string;
}

export default function CustomSelect({
  label,
  options,
  value,
  onChange,
  disabled = false,
  placeholder = 'Pilih opsi...',
  disabledPlaceholder = 'Pilih tingkat sebelumnya terlebih dahulu...',
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Ambil opsi yang saat ini terpilih
  const selectedOption = useMemo(
    () => options.find((opt) => opt.kode === value),
    [options, value]
  );

  // Filter opsi berdasarkan pencarian lokal di dalam dropdown
  const filteredOptions = useMemo(() => {
    if (!searchQuery.trim()) return options;
    const q = searchQuery.toLowerCase().trim();
    return options.filter(
      (opt) =>
        opt.nama.toLowerCase().includes(q) ||
        opt.kode.toLowerCase().includes(q) ||
        (opt.badge && opt.badge.toLowerCase().includes(q))
    );
  }, [options, searchQuery]);

  // Handle click outside untuk menutup dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Auto-focus ke input pencarian
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Reset search query saat dropdown ditutup
  const handleToggle = () => {
    if (disabled) return;
    if (!isOpen) {
      setSearchQuery('');
    }
    setIsOpen(!isOpen);
  };

  const handleSelect = (code: string) => {
    onChange(code);
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange('');
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* Label */}
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          {label}
        </label>
        {options.length > 0 && !disabled && (
          <span className="text-[11px] font-mono text-slate-400">
            {options.length} pilihan
          </span>
        )}
      </div>

      {/* Trigger Button */}
      <button
        type="button"
        disabled={disabled}
        onClick={handleToggle}
        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-left text-sm transition shadow-2xs ${
          disabled
            ? 'bg-slate-100/80 border-slate-200 text-slate-400 cursor-not-allowed'
            : isOpen
            ? 'bg-white border-emerald-500 ring-2 ring-emerald-500/20 text-slate-900'
            : 'bg-white border-slate-300 hover:border-slate-400 text-slate-900'
        }`}
      >
        <div className="flex items-center gap-2 min-w-0 flex-1 mr-2">
          {selectedOption ? (
            <>
              <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded flex-shrink-0">
                {selectedOption.badge || selectedOption.kode}
              </span>
              <span className="truncate font-semibold text-slate-900">
                {selectedOption.nama}
              </span>
            </>
          ) : (
            <span className="text-slate-400 truncate">
              {disabled ? disabledPlaceholder : placeholder}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          {selectedOption && !disabled && (
            <span
              onClick={handleClear}
              className="p-1 hover:bg-slate-100 rounded-md text-slate-400 hover:text-slate-600 transition"
              title="Hapus Pilihan"
            >
              <X className="w-3.5 h-3.5" />
            </span>
          )}
          <ChevronDown
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-emerald-600' : ''
            }`}
          />
        </div>
      </button>

      {/* Dropdown Popover */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          {/* Search Box inside dropdown */}
          <div className="p-2.5 border-b border-slate-100 bg-slate-50/50">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Cari di antara ${options.length} ${label}...`}
                className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* List of Options */}
          <div className="max-h-60 overflow-y-auto p-1.5 divide-y divide-slate-50">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => {
                const isSelected = opt.kode === value;
                return (
                  <button
                    type="button"
                    key={opt.kode}
                    onClick={() => handleSelect(opt.kode)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition text-left ${
                      isSelected
                        ? 'bg-emerald-50 text-emerald-950 font-bold'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0 mr-2">
                      <span
                        className={`font-mono text-[10px] px-1.5 py-0.5 rounded border flex-shrink-0 ${
                          isSelected
                            ? 'bg-emerald-200/60 border-emerald-300 text-emerald-900 font-bold'
                            : 'bg-slate-100 border-slate-200 text-slate-500'
                        }`}
                      >
                        {opt.badge || opt.kode}
                      </span>
                      <span className="truncate">{opt.nama}</span>
                    </div>

                    {isSelected && (
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    )}
                  </button>
                );
              })
            ) : (
              <div className="py-6 text-center text-xs text-slate-400">
                Tidak ada hasil yang cocok dengan "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
