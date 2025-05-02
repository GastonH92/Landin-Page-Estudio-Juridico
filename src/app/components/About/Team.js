import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Team = () => {
  return (
    <section id="equipo" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0f3b6b]">Nuestro Equipo</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Contamos con un equipo de profesionales especializados en diferentes áreas del derecho para brindarle el
                mejor asesoramiento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Dr. Carlos Rodríguez"
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Dr. Carlos Rodríguez</h3>
                  <p className="text-[#0f3b6b] font-medium mb-3">Socio Fundador</p>
                  <p className="text-muted-foreground mb-4">
                    Especialista en Derecho Corporativo con más de 25 años de experiencia asesorando a empresas
                    nacionales e internacionales.
                  </p>
                  <Link href="#" className="text-[#0f3b6b] font-medium flex items-center gap-1 hover:underline">
                    Ver perfil 
                  </Link>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Dra. Laura Martínez"
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Dra. Laura Martínez</h3>
                  <p className="text-[#0f3b6b] font-medium mb-3">Socia</p>
                  <p className="text-muted-foreground mb-4">
                    Especialista en Derecho Laboral y de la Seguridad Social, con amplia experiencia en negociaciones
                    colectivas y conflictos laborales.
                  </p>
                  <Link href="#" className="text-[#0f3b6b] font-medium flex items-center gap-1 hover:underline">
                    Ver perfil 
                  </Link>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Dr. Miguel Sánchez"
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Dr. Miguel Sánchez</h3>
                  <p className="text-[#0f3b6b] font-medium mb-3">Asociado Senior</p>
                  <p className="text-muted-foreground mb-4">
                    Especialista en Litigios y Derecho Procesal, con una destacada trayectoria en la representación de
                    clientes ante tribunales.
                  </p>
                  <Link href="#" className="text-[#0f3b6b] font-medium flex items-center gap-1 hover:underline">
                    Ver perfil 
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Team