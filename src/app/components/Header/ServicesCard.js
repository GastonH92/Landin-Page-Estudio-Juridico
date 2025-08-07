'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  LiaBriefcaseSolid,
  LiaBalanceScaleSolid,
} from 'react-icons/lia';
import { BiSpreadsheet } from 'react-icons/bi';
import { MdFamilyRestroom, MdOutlineMessage } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';

const FadeInCard = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
};

const ServicesCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card 1 */}
      <FadeInCard delay={0}>
        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-1">
            <LiaBriefcaseSolid className="text-2xl font-bold text-[#0f3b6b]" />
            Derecho Corporativo
          </h3>
          <p className="text-muted-foreground mb-4">
            Asesoramiento integral para empresas, constitución de sociedades, contratos comerciales y más.
          </p>
          <Link href="#" className="text-[#0f3b6b] font-medium flex items-center gap-1 hover:underline">
            Saber más
          </Link>
        </div>
      </FadeInCard>

      {/* Card 2 */}
      <FadeInCard delay={0.1}>
        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-1">
            <BiSpreadsheet className="text-2xl font-bold text-[#0f3b6b]" />
            Derecho Laboral
          </h3>
          <p className="text-muted-foreground mb-4">
            Representación en conflictos laborales, despidos, accidentes de trabajo y negociaciones colectivas.
          </p>
          <Link href="#" className="text-[#0f3b6b] font-medium flex items-center gap-1 hover:underline">
            Saber más
          </Link>
        </div>
      </FadeInCard>

      {/* Card 3 */}
      <FadeInCard delay={0.2}>
        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-1">
            <MdFamilyRestroom className="text-2xl font-bold text-[#0f3b6b]" />
            Derecho de Familia
          </h3>
          <p className="text-muted-foreground mb-4">
            Divorcios, sucesiones, adopciones, régimen patrimonial del matrimonio y protección de menores.
          </p>
          <Link href="#" className="text-[#0f3b6b] font-medium flex items-center gap-1 hover:underline">
            Saber más
          </Link>
        </div>
      </FadeInCard>

      {/* Card 4 */}
      <FadeInCard delay={0.3}>
        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-1">
            <LiaBalanceScaleSolid className="text-2xl font-bold text-[#0f3b6b]" />
            Litigios
          </h3>
          <p className="text-muted-foreground mb-4">
            Representación en juicios civiles, comerciales y contenciosos administrativos.
          </p>
          <Link href="#" className="text-[#0f3b6b] font-medium flex items-center gap-1 hover:underline">
            Saber más
          </Link>
        </div>
      </FadeInCard>

      {/* Card 5 */}
      <FadeInCard delay={0.4}>
        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-1">
            <MdOutlineMessage className="text-2xl font-bold text-[#0f3b6b]" />
            Mediación
          </h3>
          <p className="text-muted-foreground mb-4">
            Resolución alternativa de conflictos mediante mediación y negociación para evitar litigios.
          </p>
          <Link href="#" className="text-[#0f3b6b] font-medium flex items-center gap-1 hover:underline">
            Saber más
          </Link>
        </div>
      </FadeInCard>

      {/* Card 6 */}
      <FadeInCard delay={0.5}>
        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-1">
            <SlLocationPin className="text-2xl font-bold text-[#0f3b6b]" />
            Derecho Inmobiliario
          </h3>
          <p className="text-muted-foreground mb-4">
            Compraventa de inmuebles, contratos de alquiler, desalojos y cuestiones de propiedad.
          </p>
          <Link href="#" className="text-[#0f3b6b] font-medium flex items-center gap-1 hover:underline">
            Saber más
          </Link>
        </div>
      </FadeInCard>
    </div>
  );
};

export default ServicesCard;
