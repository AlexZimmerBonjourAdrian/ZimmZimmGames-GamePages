import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Demo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Head>
        <title>Demo - ZimmZimm Games</title>
        <meta name="description" content="Prueba nuestros juegos en la demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-6 text-white">Demo de Juegos</h1>
          <p className="text-xl text-gray-300">Experimenta una muestra de nuestros juegos más emocionantes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-3xl font-bold mb-4 text-white">Juego 1</h2>
            <p className="text-gray-300 mb-4">Descripción breve del primer juego y sus características principales.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Jugar Demo
            </button>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-3xl font-bold mb-4 text-white">Juego 2</h2>
            <p className="text-gray-300 mb-4">Descripción breve del segundo juego y sus características principales.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Jugar Demo
            </button>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
} 