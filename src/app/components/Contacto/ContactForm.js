"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const form = useRef(null);
    const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSent(true);
        form.current?.reset();
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
      });
  };

  return (
    <div className="backdrop-blur-sm p-8 rounded-2xl border ">
      <div className="bg-white p-8 rounded-lg shadow-sm border">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="nombre" className="text-sm font-medium">Nombre</label>
              <input
                id="nombre"
                name="user_name"
                required
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Su nombre"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="apellido" className="text-sm font-medium">Apellido</label>
              <input
                id="apellido"
                name="user_lastname"
                required
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Su apellido"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              name="user_email"
              required
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Su email"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="telefono" className="text-sm font-medium">Teléfono</label>
            <input
              id="telefono"
              name="user_phone"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Su teléfono"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="asunto" className="text-sm font-medium">Asunto</label>
            <select
              id="asunto"
              name="subject"
              required
              className="w-full px-3 py-2 border rounded-md"
            >
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
            <label htmlFor="mensaje" className="text-sm font-medium">Mensaje</label>
            <textarea
              id="mensaje"
              name="message"
              rows={4}
              required
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Describa brevemente su consulta"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-[#0f3b6b] text-white rounded-xl hover:bg-[#0a2d52] transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0f3b6b] focus:ring-offset-2"
          >
            Enviar Mensaje
          </button>

          {sent && <p className="text-green-600">¡Mensaje enviado correctamente!</p>}
        </form>
      </div>
    </div>
  );
}
