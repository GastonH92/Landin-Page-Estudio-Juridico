import React from 'react'
import Image from 'next/image'
const Form = () => {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0f3b6b]">Contáctenos</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Estamos aquí para ayudarle. Complete el formulario a continuación y nos pondremos en contacto con usted
                a la brevedad.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="nombre" className="text-sm font-medium">
                        Nombre
                      </label>
                      <input id="nombre" className="w-full px-3 py-2 border rounded-md" placeholder="Su nombre" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="apellido" className="text-sm font-medium">
                        Apellido
                      </label>
                      <input id="apellido" className="w-full px-3 py-2 border rounded-md" placeholder="Su apellido" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Su email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-sm font-medium">
                      Teléfono
                    </label>
                    <input id="telefono" className="w-full px-3 py-2 border rounded-md" placeholder="Su teléfono" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="asunto" className="text-sm font-medium">
                      Asunto
                    </label>
                    <select id="asunto" className="w-full px-3 py-2 border rounded-md">
                      <option value="">Seleccione un asunto</option>
                      <option value="corporativo">Derecho Corporativo</option>
                      <option value="laboral">Derecho Laboral</option>
                      <option value="familia">Derecho de Familia</option>
                      <option value="litigios">Litigios</option>
                      <option value="mediacion">Mediación</option>
                      <option value="inmobiliario">Derecho Inmobiliario</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mensaje" className="text-sm font-medium">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      rows={4}
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Describa brevemente su consulta"
                    ></textarea>
                  </div>
                  <button className="w-full bg-[#0f3b6b] hover:bg-[#0a2d52]">Enviar Mensaje</button>
                </form>
              </div>

              <div>
                <div className="bg-white p-8 rounded-lg shadow-sm border mb-6">
                  <h3 className="text-xl font-bold mb-4 text-[#0f3b6b]">Información de Contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                     
                      <div>
                        <p className="font-medium">Dirección:</p>
                        <p className="text-muted-foreground">Av. Corrientes 1234, Piso 5</p>
                        <p className="text-muted-foreground">Ciudad Autónoma de Buenos Aires, Argentina</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      
                      <div>
                        <p className="font-medium">Teléfono:</p>
                        <p className="text-muted-foreground">+54 11 1234-5678</p>
                        <p className="text-muted-foreground">+54 11 5678-1234</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      
                      <div>
                        <p className="font-medium">Email:</p>
                        <p className="text-muted-foreground">info@estudiojuridico.com</p>
                        <p className="text-muted-foreground">consultas@estudiojuridico.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-bold mb-4 text-[#0f3b6b]">Ubicación</h3>
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="Mapa de ubicación"
                      width={600}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    
  )
}

export default Form