'use client';
import React, { useRef } from 'react';
import ServicesCard from './ServicesCard';
import { motion, useInView } from 'framer-motion';

// Reutilizamos animación simple
const FadeInOnScroll = ({ children, delay = 0 }) => {
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

const Services = () => {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-gray-50 px-6">
      <div className="container mx-auto max-w-screen-xl">
        <FadeInOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0f3b6b]">
              Nuestras Áreas de Práctica
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos asesoramiento legal especializado en diversas áreas del derecho para satisfacer todas sus
              necesidades legales.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Cards */}
        <ServicesCard />
      </div>
    </section>
  );
};

export default Services;
