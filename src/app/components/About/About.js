'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Team from '@/app/components/About/Team';
import Testimonios from './testimonios';
import { motion, useInView } from 'framer-motion';

const FadeInSection = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="nosotros" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <FadeInSection delay={0} className="">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Oficina del Estudio Jurídico"
              width={800}
              height={600}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </FadeInSection>

          {/* Texto */}
          <FadeInSection delay={0.2} className="">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0f3b6b]">Sobre Nuestro Estudio</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Con más de 20 años de experiencia, nuestro estudio jurídico se ha consolidado como un referente en el
              ámbito legal, brindando soluciones efectivas y personalizadas a nuestros clientes.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Nuestro equipo está formado por profesionales altamente calificados, con especialización en diferentes
              áreas del derecho, lo que nos permite ofrecer un servicio integral y de calidad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Excelencia profesional",
                "Atención personalizada",
                "Ética y transparencia",
                "Compromiso con resultados",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#0f3b6b]" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <button className="px-6 py-2 bg-[#0f3b6b] text-white rounded-xl hover:bg-[#0a2d52] transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0f3b6b] focus:ring-offset-2">
              Conocer Más
            </button>
          </FadeInSection>
        </div>
      </div>

      {/* Secciones relacionadas */}
      <Team />
      <Testimonios />
    </section>
  );
};

export default About;
