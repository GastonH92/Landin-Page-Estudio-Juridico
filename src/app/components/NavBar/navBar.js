'use client'

import React from 'react'
import Link from 'next/link';



const Navbar = () => {
  return (
    
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
    <div className="container flex h-16 items-center justify-between ml-8">
      <div className="flex items-center gap-2">
        
        <span className="text-xl font-bold text-[#0f3b6b]">Estudio Jurídico</span>
      </div>
      <nav className="hidden md:flex gap-6">
        <Link href="#inicio" className="text-sm font-medium hover:text-[#0f3b6b]">
          Inicio
        </Link>
        <Link href="#servicios" className="text-sm font-medium hover:text-[#0f3b6b]">
          Servicios
        </Link>
        <Link href="#nosotros" className="text-sm font-medium hover:text-[#0f3b6b]">
          Nosotros
        </Link>
        <Link href="#equipo" className="text-sm font-medium hover:text-[#0f3b6b]">
          Equipo
        </Link>
        <Link href="#testimonios" className="text-sm font-medium hover:text-[#0f3b6b]">
          Testimonios
        </Link>
        <Link href="#contacto" className="text-sm font-medium hover:text-[#0f3b6b]">
          Contacto
        </Link>
      </nav>
      <Link href="#consulta" className=" hover:text-[#0a2d52] ">Consulta Gratuita</Link>
    </div>
  </nav>
  )
}

export default Navbar