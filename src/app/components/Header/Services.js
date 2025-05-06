import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-gray-50 ml-8 mr-8">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0f3b6b]">Nuestras Áreas de Práctica</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ofrecemos asesoramiento legal especializado en diversas áreas del derecho para satisfacer todas sus
                necesidades legales.
              </p>
            </div>
            </div>

           <ServicesCard/> 

            </section>
  )
}

export default Services