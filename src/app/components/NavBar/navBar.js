'use client';

import { useState } from "react";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinkClass = "group relative inline-block text-sm font-medium text-[#0f3b6b] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#0f3b6b] after:transition-all after:duration-300 hover:after:w-full";

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
          {["inicio", "servicios", "nosotros", "equipo", "testimonios", "Calculadora", "contacto"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={`#${item}`} className={navLinkClass}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Botón principal */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="hidden md:block"
        >
          <Link
            href="#consulta"
            className="px-4 py-2 text-white bg-[#0f3b6b] rounded-full font-semibold shadow hover:bg-[#0a2d52] transition-colors duration-300"
          >
            Consulta Gratuita
          </Link>
        </motion.div>

        {/* Botón menú móvil */}
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
          {["inicio", "servicios", "nosotros", "equipo", "testimonios", "contacto"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="block text-sm font-medium hover:text-[#0f3b6b]"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
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
