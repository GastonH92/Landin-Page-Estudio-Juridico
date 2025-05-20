
import React from 'react'
import Image from 'next/image'


import ContactForm from './ContactForm'
const Form = () => {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-gray-50">
    <div className="container container mx-auto px-4">
      {/* Título y descripción */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0f3b6b]">Contáctenos</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
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
            <div className="flex-1 rounded-2xl overflow-hidden border border-slate-700 min-h-[300px] relative bg-slate-800">
            <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895483!2d-58.38414532346177!3d-34.60373445749877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1sen!2sar!4v1715706381!5m2!1sen!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </div>
    
        </div>
      </div>
    </div>
  </section>
  );
};

export default Form