import React from 'react'
import Form from './Form'


const Contacto = () => {
  return (
<div>
   <section className="py-16 md:py-24 ml-8" >
          <div className="container">
            <div className="bg-[#0f3b6b] text-white rounded-xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Necesita Asesoramiento Legal?</h2>
                  <p className="text-lg mb-6 opacity-90">
                    Contáctenos hoy mismo para una consulta inicial gratuita. Nuestro equipo de expertos está listo para
                    ayudarle con sus necesidades legales.
                  </p>
                  <button className="bg-white text-[#0f3b6b] hover:bg-gray-100">Solicitar Consulta</button>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
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
                  <div className="border-t border-white/20 mt-4 pt-4">
                    <p className="font-medium">Teléfono: +54 11 1234-5678</p>
                    <p className="font-medium">Email: info@estudiojuridico.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Form />
        </section>
        </div>

        



  )
}

export default Contacto