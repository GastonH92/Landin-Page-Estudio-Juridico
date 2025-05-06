import Image from "next/image";
import Header from "./components/Header/header";
import About from "./components/About/About";
import Contacto from "./components/Contacto/Contacto";



export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Contacto />

    </>
    
  );
}
