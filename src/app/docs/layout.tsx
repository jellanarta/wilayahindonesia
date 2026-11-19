import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DocsSidebar from '@/components/DocsSidebar';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <Navbar />

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <DocsSidebar />
          <main className="flex-1 w-full min-w-0 bg-white p-5 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            {children}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

