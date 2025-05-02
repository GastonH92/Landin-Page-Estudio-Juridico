import React from 'react'
import Services from './Services'

const Header = () => {
  return (
    <div className="flex flex-col min-h-screen">
   <main className="flex-1">
        
        <section id="inicio" className="relative bg-[#0f3b6b] text-white">
          <div className="container flex flex-col items-center justify-center py-20 md:py-32 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Soluciones Legales Efectivas</h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8">
              Nuestro equipo de abogados expertos está comprometido a brindar asesoramiento legal de calidad y
              soluciones personalizadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="border-white text-white hover:bg-white/10">Nuestros Servicios</button>
              <button variant="outline" className="border-white text-white hover:bg-white/10">
                Contactar Ahora
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
          

        </section>

        {/* Info */}
        <section className="bg-white py-4 border-b">
          <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 ml-14">
            <div className="flex items-center gap-3">
              {/* icon phone */}
              <div>
                <p className="text-sm font-medium">Llámenos</p>
                <p className="text-sm text-muted-foreground">+54 11 1234-5678</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
             {/* icon mail */}
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">info@estudiojuridico.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* icon clock */}
              <div>
                <p className="text-sm font-medium">Horario de Atención</p>
                <p className="text-sm text-muted-foreground">Lun - Vie: 9:00 - 18:00</p>
              </div>
            </div>
          </div>


        </section>

        <Services/>

        </main>
        </div>

  )
}

export default Header