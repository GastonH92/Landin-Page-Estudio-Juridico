'use client';

import { useState } from "react";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#0f3b6b] flex items-center gap-1">
            <LiaBalanceScaleSolid className="text-4xl" />
            Estudio Jurídico
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#inicio" className="text-sm font-medium hover:text-[#0f3b6b]">Inicio</Link>
          <Link href="#servicios" className="text-sm font-medium hover:text-[#0f3b6b]">Servicios</Link>
          <Link href="#nosotros" className="text-sm font-medium hover:text-[#0f3b6b]">Nosotros</Link>
          <Link href="#equipo" className="text-sm font-medium hover:text-[#0f3b6b]">Equipo</Link>
          <Link href="#testimonios" className="text-sm font-medium hover:text-[#0f3b6b]">Testimonios</Link>
          <Link href="#contacto" className="text-sm font-medium hover:text-[#0f3b6b]">Contacto</Link>
        </div>

        {/* Botón principal */}
        <div className="hidden md:block">
          <Link
            href="#consulta"
            className="px-4 py-2 text-white bg-[#0f3b6b] rounded-full font-semibold shadow hover:bg-[#0a2d52] transition-colors duration-300"
          >
            Consulta Gratuita
          </Link>
        </div>

        {/* Menú móvil */}
        <button
          className="md:hidden text-2xl text-[#0f3b6b]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">
          <Link href="#inicio" className="block text-sm font-medium hover:text-[#0f3b6b]">Inicio</Link>
          <Link href="#servicios" className="block text-sm font-medium hover:text-[#0f3b6b]">Servicios</Link>
          <Link href="#nosotros" className="block text-sm font-medium hover:text-[#0f3b6b]">Nosotros</Link>
          <Link href="#equipo" className="block text-sm font-medium hover:text-[#0f3b6b]">Equipo</Link>
          <Link href="#testimonios" className="block text-sm font-medium hover:text-[#0f3b6b]">Testimonios</Link>
          <Link href="#contacto" className="block text-sm font-medium hover:text-[#0f3b6b]">Contacto</Link>
          <Link
            href="#consulta"
            className="block w-full text-center px-4 py-2 bg-[#0f3b6b] text-white rounded-full font-semibold hover:bg-[#0a2d52] transition-colors duration-300"
          >
            Consulta Gratuita
          </Link>
        </div>
      )}
    </nav>
  );
}
