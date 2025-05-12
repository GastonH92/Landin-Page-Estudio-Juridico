
import React from 'react'
import Image from 'next/image'


import ContactForm from './ContactForm'
const Form = () => {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-gray-50">
    <div className="container space-y-12">
      {/* Título y descripción */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0f3b6b]">Contáctenos</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Estamos aquí para ayudarle. Complete el formulario a continuación y nos pondremos en contacto con usted a la brevedad.
        </p>
      </div>

      {/* Grilla principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Formulario a la izquierda */}
        <div>
          <ContactForm />
        </div>

        {/* Info + Mapa a la derecha */}
        <div className="space-y-6">
          {/* Información de contacto */}
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-[#0f3b6b]">Información de Contacto</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Dirección:</p>
                <p className="text-muted-foreground">Av. Corrientes 1234, Piso 5</p>
                <p className="text-muted-foreground">Ciudad Autónoma de Buenos Aires, Argentina</p>
              </div>
              <div>
                <p className="font-medium">Teléfono:</p>
                <p className="text-muted-foreground">+54 11 1234-5678</p>
                <p className="text-muted-foreground">+54 11 5678-1234</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-muted-foreground">info@estudiojuridico.com</p>
                <p className="text-muted-foreground">consultas@estudiojuridico.com</p>
              </div>
            </div>
          </div>

          {/* Mapa de ubicación */}
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
  );
};

export default Form