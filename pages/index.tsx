import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Head>
        <title>ZimmZimm Games - Tu destino gaming</title>
        <meta name="description" content="Descubre los mejores juegos de ZimmZimm Games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 text-white">ZimmZimm Games</h1>
          <p className="text-xl text-gray-300 mb-8">Tu destino gaming definitivo</p>
          <div className="flex justify-center gap-4">
            <Link href="/demo" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
              Jugar Demo
            </Link>
            <Link href="/about" className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg transition-colors">
              Conoce más
            </Link>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Plataformas Disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2 text-white">PC</h3>
              <p className="text-gray-300">Disponible ahora</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2 text-white">PlayStation</h3>
              <p className="text-gray-300">Disponible ahora</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2 text-white">Xbox</h3>
              <p className="text-gray-300">Disponible ahora</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2 text-white">Nintendo Switch</h3>
              <p className="text-gray-300">Disponible ahora</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2 text-white">Android</h3>
              <p className="text-yellow-400">Próximamente</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2 text-white">iOS</h3>
              <p className="text-yellow-400">Próximamente</p>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="mb-16 bg-gray-800 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">¡Prueba la Demo Ahora!</h2>
            <p className="text-xl text-gray-300 mb-8">Experimenta una muestra de nuestros juegos más emocionantes</p>
            <Link href="/demo" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors inline-block">
              Ir a la Demo
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Características</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-white">Multijugador</h3>
              <p className="text-gray-300">Juega con amigos en línea</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-white">Modo Historia</h3>
              <p className="text-gray-300">Inmersivas campañas narrativas</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-white">Actualizaciones</h3>
              <p className="text-gray-300">Contenido nuevo regularmente</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 