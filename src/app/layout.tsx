import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import TopProgressBar from '@/components/TopProgressBar';

export const metadata: Metadata = {
  title: 'Daftar Wilayah Indonesia - Dokumentasi & Interactive Playground',
  description:
    'Library data wilayah administratif Indonesia terlengkap dan terkini (38 Provinsi, 514 Kab/Kota, 7.265+ Kecamatan, 83.345+ Desa) untuk JavaScript & TypeScript.',
  keywords: [
    'wilayah indonesia',
    'daftar wilayah indonesia',
    'provinsi',
    'kabupaten',
    'kecamatan',
    'desa',
    'kemendagri',
    'npm',
    'typescript',
  ],
  authors: [{ name: 'Jellan Arta' }],
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🇮🇩</text></svg>',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased selection:bg-emerald-500 selection:text-white">
        <Suspense fallback={null}>
          <TopProgressBar />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
