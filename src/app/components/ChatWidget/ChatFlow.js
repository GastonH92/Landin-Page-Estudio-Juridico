export const chatFlow = {
    pedirNombre: {
      pregunta: "Hola 👋, ¿cuál es tu nombre?",
      tipo: "input",
      next: "inicio",
    },
    inicio: {
      pregunta: "¿En qué te podemos ayudar?",
      tipo: "opciones",
      opciones: [
        { texto: "Consulta laboral", next: "laboral" },
        { texto: "Consulta civil", next: "civil" },
        { texto: "Otras consultas", next: "otros" },
      ],
    },
    laboral: {
      pregunta:
        "¿Tu consulta está relacionada con despidos, sueldos, o accidentes?",
      tipo: "opciones",
      opciones: [
        { texto: "Despidos", next: "final" },
        { texto: "Sueldos impagos", next: "final" },
        { texto: "Accidente laboral", next: "final" },
      ],
    },
    civil: {
      pregunta: "¿De qué tipo de asunto civil se trata?",
      tipo: "opciones",
      opciones: [
        { texto: "Alquileres", next: "final" },
        { texto: "Familia / divorcios", next: "final" },
        { texto: "Daños y perjuicios", next: "final" },
      ],
    },
    otros: {
      pregunta: "Contanos brevemente tu consulta.",
      tipo: "input",
      next: "final",
    },
    final: {
      pregunta: "¿Deseás que enviemos esta info por WhatsApp?",
      tipo: "opciones",
      opciones: [
        { texto: "Sí, enviar", next: "enviar" },
        { texto: "No, gracias", next: "fin" },
      ],
    },
  };
  