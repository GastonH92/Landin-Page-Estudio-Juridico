import React from 'react'


export default function Testimonios() {
  const testimonios = [
    {
      nombre: "Roberto Gómez",
      cargo: "Director General, Empresa ABC",
      texto:
        "El equipo del Estudio Jurídico nos brindó un asesoramiento excepcional en un caso complejo de derecho corporativo. Su profesionalismo y conocimiento fueron fundamentales para alcanzar un resultado favorable.",
    },
    {
      nombre: "María López",
      cargo: "Gerente de RRHH, Empresa XYZ",
      texto:
        "Gracias al asesoramiento del Dr. Rodríguez, pudimos resolver un conflicto laboral de manera eficiente y justa para todas las partes. Su enfoque práctico y su experiencia fueron invaluables.",
    },
    {
      nombre: "Juan Pérez",
      cargo: "Cliente Particular",
      texto:
        "La Dra. Martínez manejó nuestro caso de sucesión con gran sensibilidad y profesionalismo. Su atención personalizada y su conocimiento legal nos dieron tranquilidad en un momento difícil.",
    },
  ];

  return (
    <section id="testimonios" className="py-16 md:py-24 bg-[#0f3b6b] text-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            La satisfacción de nuestros clientes es nuestro mayor orgullo. Estas son algunas de sus experiencias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonios.map((testimonio, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 italic">"{testimonio.texto}"</p>
              <div>
                <p className="font-bold">{testimonio.nombre}</p>
                <p className="text-sm opacity-80">{testimonio.cargo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
