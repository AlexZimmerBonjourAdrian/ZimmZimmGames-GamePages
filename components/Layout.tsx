import React from 'react';
import type { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title = 'ZimmZimm Games' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="ZimmZimm Games - Your gaming destination" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </>
  );
} 