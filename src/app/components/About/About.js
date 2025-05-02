import React from 'react'
import Image from 'next/image'
import Team from './Team'
import Testimonios from './testimonios'

const About = () => {
  return (
    <section id="nosotros" className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* agregar mapa */}
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Oficina del Estudio Jurídico"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0f3b6b]">Sobre Nuestro Estudio</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Con más de 20 años de experiencia, nuestro estudio jurídico se ha consolidado como un referente en el
                  ámbito legal, brindando soluciones efectivas y personalizadas a nuestros clientes.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Nuestro equipo está formado por profesionales altamente calificados, con especialización en diferentes
                  áreas del derecho, lo que nos permite ofrecer un servicio integral y de calidad.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#0f3b6b]" />
                    <span>Excelencia profesional</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#0f3b6b]" />
                    <span>Atención personalizada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#0f3b6b]" />
                    <span>Ética y transparencia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#0f3b6b]" />
                    <span>Compromiso con resultados</span>
                  </div>
                </div>
                <button className=" hover:bg-[#0a2d52]">Conocer Más</button>
              </div>
            </div>
          </div>
          <Team />
          <Testimonios />

        </section>
  )
}

export default About