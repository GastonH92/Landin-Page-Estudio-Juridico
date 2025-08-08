import Image from "next/image";
import Header from "./components/Header/header";
import About from "./components/About/About";
import Contacto from "./components/Contacto/Contacto";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import ChatWidget from "./components/ChatWidget/ChatWidget";
import CalculatorTemplate from "./components/Calculator/CalculatorTemplate";




export default function Home() {
  return (
    <>
      <Header />
      <About />
      <CalculatorTemplate />
      <Contacto />
      <ChatWidget />

    </>
    
  );
}
