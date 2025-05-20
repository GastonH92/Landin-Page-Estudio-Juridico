import React from 'react'
import Services from './Services'
import { MdOutlineLocalPhone , MdMailOutline } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";



const Header = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-1">

      {/* Hero */}
      <section id="inicio" className="relative bg-[#0f3b6b] text-white">
        <div className="container mx-auto flex flex-col items-center justify-center px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Soluciones Legales Efectivas
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Nuestro equipo de abogados expertos está comprometido a brindar asesoramiento legal de calidad y
            soluciones personalizadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="border border-white text-white px-6 py-2 rounded hover:bg-white/10 transition">
              Nuestros Servicios
            </button>
            <button className="border border-white text-white px-6 py-2 rounded hover:bg-white/10 transition">
              Contactar Ahora
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Info */}
      <section className="bg-white py-6 border-b">
        <div className="container mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          <div className="flex items-center gap-4">
            <MdOutlineLocalPhone className="text-2xl text-primary" />
            <div>
              <p className="text-sm font-medium">Llámenos</p>
              <p className="text-sm text-muted-foreground">+54 11 1234-5678</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MdMailOutline className="text-2xl text-primary" />
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground">info@estudiojuridico.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaRegClock className="text-2xl text-primary" />
            <div>
              <p className="text-sm font-medium">Horario de Atención</p>
              <p className="text-sm text-muted-foreground">Lun - Vie: 9:00 - 18:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <Services />

    </main>
  </div>
);
}

export default Header