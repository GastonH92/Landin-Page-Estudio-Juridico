'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Form from './Form';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: delay => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay }
  }),
};

const Contacto = () => {
  return (
    <section id="consulta" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-[#0f3b6b] text-white rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Necesita Asesoramiento Legal?</h2>
              <p className="text-lg mb-6 opacity-90">
                Contáctenos hoy mismo para una consulta inicial gratuita. Nuestro equipo de expertos está listo para
                ayudarle con sus necesidades legales.
              </p>
              <a
                href="#formulario"
                className="inline-block px-6 py-2 bg-white text-[#0f3b6b] font-medium rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Solicitar consulta
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.15}
              variants={fadeInUp}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4">Horario de Atención</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Lunes - Viernes</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados</span>
                  <span>10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos</span>
                  <span>Cerrado</span>
                </div>
              </div>
              <div className="border-t border-white/20 mt-4 pt-4 text-sm">
                <p className="font-medium">📞 Teléfono: +54 11 1234-5678</p>
                <p className="font-medium">📧 Email: info@estudiojuridico.com</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div id="formulario" className="mt-12">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contacto;
