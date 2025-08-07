"use client";
import { useChat } from "@/context/useChat";
import React, { useEffect, useRef, useState } from "react";

export default function ChatWidget() {
  const {
    isOpen,
    toggleChat,
    messages,
    currentStep,
    userName,
    handleNameSubmit,
    handleOptionClick,
  } = useChat();

  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll automático al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Mostrar chat al cargar la página
  useEffect(() => {
    toggleChat(true);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    if (!userName && currentStep.tipo === "input") {
      handleNameSubmit(input.trim());
      setInput("");
    } else if (currentStep.tipo === "input") {
      alert("Inputs adicionales no implementados aún.");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-[90%] sm:max-w-xs font-sans">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-lg border w-full flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-green-600 text-white p-3 flex justify-between items-center">
            <h2 className="text-sm font-semibold">Asistente legal</h2>
            <button
              onClick={() => toggleChat(false)}
              aria-label="Cerrar chat"
              className="text-lg font-bold"
            >
              ✕
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-3 space-y-2 h-80 overflow-y-auto bg-gray-50 flex flex-col">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`text-sm px-3 py-2 rounded-xl max-w-[80%] whitespace-pre-line self-start ${
                  msg.sender === "bot"
                    ? "bg-gray-200 text-gray-800"
                    : "bg-green-500 text-white self-end"
                } animate-fade-in`}
              >
                {msg.text}
              </div>
            ))}

            <div ref={messagesEndRef} />

            {/* Opciones para el usuario */}
            {currentStep?.tipo === "opciones" && (
              <div className="flex flex-col gap-2 mt-2">
                {currentStep.opciones.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleOptionClick(option)}
                    className="text-sm text-left px-4 py-2 bg-green-100 rounded-xl hover:bg-green-200 transition animate-fade-in"
                  >
                    {option.texto}
                  </button>
                ))}
              </div>
            )}

            {/* Input para nombre */}
            {currentStep?.tipo === "input" && !userName && (
              <div className="mt-auto border-t p-2 bg-white flex gap-2 items-center">
                <input
                  type="text"
                  placeholder="Escribí tu nombre..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 text-sm border px-3 py-1.5 rounded-xl outline-none"
                />
                <button
                  onClick={handleSend}
                  className="text-sm bg-green-600 text-white px-4 py-1.5 rounded-xl hover:bg-green-700 transition"
                >
                  Enviar
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Botón para abrir chat */}
      {!isOpen && (
        <button
          onClick={() => toggleChat(true)}
          className="bg-green-600 text-white p-3 rounded-full shadow-lg animate-fade-in"
          aria-label="Abrir chat"
        >
          💬
        </button>
      )}
    </div>
  );
}
