'use client';

import Link from 'next/link';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert('Por favor ingrese un email válido.');
      return;
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        { user_email: email },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success');
        setEmail('');
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#0a2d52] text-white"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Marca y redes */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">Estudio Jurídico</span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Brindamos asesoramiento legal de calidad y soluciones personalizadas para nuestros clientes desde hace más de 20 años.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, label: 'Facebook', href: '#' },
                { Icon: Linkedin, label: 'LinkedIn', href: '#' },
                { Icon: Instagram, label: 'Instagram', href: '#' },
              ].map(({ Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white hover:text-gray-300 hover:scale-110 transition-transform duration-300"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#servicios", label: "Servicios" },
                { href: "#nosotros", label: "Nosotros" },
                { href: "#equipo", label: "Equipo" },
                { href: "#testimonios", label: "Testimonios" },
                { href: "#contacto", label: "Contacto" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-300 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Áreas de práctica */}
          <div>
            <h3 className="text-lg font-bold mb-4">Áreas de Práctica</h3>
            <ul className="space-y-2">
              {[
                "Derecho Corporativo",
                "Derecho Laboral",
                "Derecho de Familia",
                "Litigios",
                "Mediación",
                "Derecho Inmobiliario"
              ].map((area, i) => (
                <li key={i}>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Boletín */}
          <div>
            <h3 className="text-lg font-bold mb-4">Boletín Informativo</h3>
            <p className="text-sm text-gray-300 mb-4">
              Suscríbase a nuestro boletín para recibir noticias y actualizaciones legales.
            </p>
            <form className="space-y-2" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Su email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-black bg-white rounded-md"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-2 bg-[#0f3b6b] text-white rounded-xl hover:bg-[#0a2d52] transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0f3b6b] focus:ring-offset-2"
              >
                Suscribirse
              </button>

              {status === 'success' && (
                <p className="text-green-400 mt-2">¡Gracias por suscribirte!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 mt-2">Error al enviar. Intente nuevamente.</p>
              )}
            </form>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} TheBullWeb Todos los derechos reservados.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="#" className="hover:text-white">Política de Privacidad</Link>
            <Link href="#" className="hover:text-white">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
