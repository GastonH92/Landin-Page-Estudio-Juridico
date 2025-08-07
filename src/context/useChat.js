'use client'
import { createContext, useContext, useState, useEffect } from "react";
import { chatFlow } from "../app/components/ChatWidget/ChatFlow";

const ChatContext = createContext();

const WHATSAPP_NUMBER = "5491168080250"; // Cambialo por tu número real

export const ChatProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");
  const [currentStepKey, setCurrentStepKey] = useState("pedirNombre");
  const [currentStep, setCurrentStep] = useState(chatFlow["pedirNombre"]);

  useEffect(() => {
    if (chatFlow && chatFlow["pedirNombre"]) {
      setMessages([{ sender: "bot", text: chatFlow["pedirNombre"].pregunta }]);
    }
  }, []);

  const toggleChat = (value) => {
    if (typeof value === "boolean") setIsOpen(value);
    else setIsOpen((prev) => !prev);
  };

  const handleNameSubmit = (name) => {
    setUserName(name);
    const nextKey = chatFlow["pedirNombre"].next;
    const nextStep = chatFlow[nextKey];

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: name },
      { sender: "bot", text: nextStep.pregunta },
    ]);
    setCurrentStepKey(nextKey);
    setCurrentStep(nextStep);
  };

  const handleOptionClick = (option) => {
    const nextKey = option.next;
    const nextStep = chatFlow[nextKey];

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: option.texto },
      { sender: "bot", text: nextStep?.pregunta || "" },
    ]);
    setCurrentStepKey(nextKey);
    setCurrentStep(nextStep);

    if (nextKey === "enviar") {
      sendWhatsApp();
      toggleChat(false);
    }
  };

  const sendWhatsApp = () => {
    const respuestas = [];
  
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].sender === "bot") {
        const pregunta = messages[i].text;
        const respuesta = messages[i + 1]?.sender === "user" ? messages[i + 1].text : "";
        if (respuesta && !pregunta.toLowerCase().includes("nombre")) {
          respuestas.push(respuesta);
        }
      }
    }
  
    // Construimos mensaje personalizado
    let mensaje = `Hola, mi nombre es ${userName} y quiero consultar sobre ${respuestas.join(" > ")}`;
  
    const encodedMessage = encodeURIComponent(mensaje.trim());
  
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
  };

  return (
    <ChatContext.Provider
      value={{
        isOpen,
        toggleChat,
        messages,
        currentStep,
        userName,
        handleNameSubmit,
        handleOptionClick,
        sendWhatsApp,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
