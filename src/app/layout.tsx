import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import TopProgressBar from '@/components/TopProgressBar';

export const metadata: Metadata = {
  metadataBase: new URL('https://wilayahindonesia.vercel.app'),
  title: {
    default: 'Wilayah Indonesia - Data 38 Provinsi, 514 Kab/Kota, 7.265+ Kec, 83.345+ Desa',
    template: '%s | Wilayah Indonesia',
  },
  description:
    'Library data wilayah administratif Indonesia terlengkap dan terkini (38 Provinsi, 514 Kab/Kota, 7.265+ Kecamatan, 83.345+ Desa) sesuai standar Kemendagri dengan dukungan penuh TypeScript, CJS & ESM.',
  applicationName: 'Wilayah Indonesia',
  keywords: [
    'wilayah indonesia',
    'daftar wilayah indonesia',
    'data wilayah kemendagri',
    'provinsi indonesia',
    'kabupaten kota indonesia',
    'kecamatan indonesia',
    'kelurahan desa indonesia',
    'kode wilayah kemendagri',
    'api wilayah indonesia',
    'npm wilayah indonesia',
    'typescript wilayah indonesia',
    'form bertingkat wilayah',
    'cascading dropdown indonesia',
  ],
  authors: [{ name: 'Jellan Arta', url: 'https://github.com/jellanarta' }],
  creator: 'Jellan Arta',
  publisher: 'Jellan Arta',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://wilayahindonesia.vercel.app',
    siteName: 'Wilayah Indonesia',
    title: 'Wilayah Indonesia - Dokumentasi & Interactive Playground',
    description:
      'Library data wilayah administratif Indonesia terlengkap dan tercepat (38 Provinsi, 514 Kab/Kota, 7.265+ Kecamatan, 83.345+ Desa). Zero dependencies, full TypeScript.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wilayah Indonesia - Dokumentasi & Interactive Playground',
    description:
      'Library data wilayah administratif Indonesia terlengkap dan tercepat (38 Provinsi, 514 Kab/Kota, 7.265+ Kecamatan, 83.345+ Desa).',
    creator: '@jellanarta',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
