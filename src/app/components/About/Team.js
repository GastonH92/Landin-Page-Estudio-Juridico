'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // tiempo entre la aparición de cada card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Team = () => {
  const abogados = [
    {
      nombre: "Dr. Carlos Rodríguez",
      rol: "Socio Fundador",
      descripcion:
        "Especialista en Derecho Corporativo con más de 25 años de experiencia asesorando a empresas nacionales e internacionales.",
      imagen: "/placeholder.svg?height=400&width=400",
    },
    {
      nombre: "Dra. Laura Martínez",
      rol: "Socia",
      descripcion:
        "Especialista en Derecho Laboral y de la Seguridad Social, con amplia experiencia en negociaciones colectivas y conflictos laborales.",
      imagen: "/placeholder.svg?height=400&width=400",
    },
    {
      nombre: "Dr. Miguel Sánchez",
      rol: "Asociado Senior",
      descripcion:
        "Especialista en Litigios y Derecho Procesal, con una destacada trayectoria en la representación de clientes ante tribunales.",
      imagen: "/placeholder.svg?height=400&width=400",
    },
  ];

  return (
    <section id="equipo" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0f3b6b]">Nuestro Equipo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contamos con un equipo de profesionales especializados en diferentes áreas del derecho para brindarle el
            mejor asesoramiento.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {abogados.map((abogado, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow"
            >
              <Image
                src={abogado.imagen}
                alt={abogado.nombre}
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{abogado.nombre}</h3>
                <p className="text-[#0f3b6b] font-medium mb-3">{abogado.rol}</p>
                <p className="text-muted-foreground mb-4">{abogado.descripcion}</p>
                <Link
                  href="#"
                  className="text-[#0f3b6b] font-medium flex items-center gap-1 hover:underline"
                >
                  Ver perfil
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
