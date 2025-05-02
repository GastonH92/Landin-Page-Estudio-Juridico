import React from 'react'
import Link from 'next/link';

const ServicesCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                 {/* icon maletin */}
                <h3 className="text-xl font-bold mb-2">Derecho Corporativo</h3>
                <p className="text-muted-foreground mb-4">
                  Asesoramiento integral para empresas, constitución de sociedades, contratos comerciales y más.
                </p>
                <Link href="#" className="text-[#0f3b6b] font-medium flex items-center gap-1 hover:underline">
                  Saber más 
                </Link>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                 {/* icon hoja */}
                <h3 className="text-xl font-bold mb-2">Derecho Laboral</h3>
                <p className="text-muted-foreground mb-4">
                  Representación en conflictos laborales, despidos, accidentes de trabajo y negociaciones colectivas.
                </p>
                <Link href="#" className="text-[#0f3b6b] font-medium flex items-center gap-1 hover:underline">
                  Saber más 
                </Link>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                 {/* icon personas */}
                <h3 className="text-xl font-bold mb-2">Derecho de Familia</h3>
                <p className="text-muted-foreground mb-4">
                  Divorcios, sucesiones, adopciones, régimen patrimonial del matrimonio y protección de menores.
                </p>
                <Link href="#" className="text-[#0f3b6b] font-medium flex items-center gap-1 hover:underline">
                  Saber más 
                </Link>
              </div>

              {/* Service Card 4 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                 {/* icon balanza */}
                <h3 className="text-xl font-bold mb-2">Litigios</h3>
                <p className="text-muted-foreground mb-4">
                  Representación en juicios civiles, comerciales y contenciosos administrativos.
                </p>
                <Link href="#" className="text-[#0f3b6b] font-medium flex items-center gap-1 hover:underline">
                  Saber más 
                </Link>
              </div>

              {/* Service Card 5 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                 {/* icon mensaje */}
                <h3 className="text-xl font-bold mb-2">Mediación</h3>
                <p className="text-muted-foreground mb-4">
                  Resolución alternativa de conflictos mediante mediación y negociación para evitar litigios.
                </p>
                <Link href="#" className="text-[#0f3b6b] font-medium flex items-center gap-1 hover:underline">
                  Saber más 
                </Link>
              </div>

              {/* Service Card 6 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                 {/* icon ubicacion */}
                <h3 className="text-xl font-bold mb-2">Derecho Inmobiliario</h3>
                <p className="text-muted-foreground mb-4">
                  Compraventa de inmuebles, contratos de alquiler, desalojos y cuestiones de propiedad.
                </p>
                <Link href="#" className="text-[#0f3b6b] font-medium flex items-center gap-1 hover:underline">
                  Saber más 
                </Link>
              </div>
            
              </div>

          


    
  )
}

export default ServicesCard