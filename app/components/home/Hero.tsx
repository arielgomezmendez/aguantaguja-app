import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative isolate flex flex-col items-center justify-center overflow-hidden px-6 py-18 text-center"
    >
      <div className="absolute inset-0 -z-10 bg-[url('/hero-background.png')] bg-cover bg-center bg-no-repeat opacity-15" />
      <h1 className="text-[#F5F5F5] text-6xl  md:text-8xl tracking-wide font-special">
        TU PIEL MERECE NUESTRA AGUJA
      </h1>
      <p className="text-[#F5F5F5] text-xl my-8 mx-16">
        Somos el primer estudio de arte corporal de Pinar del Río: 
        un espacio donde artistas con estilos diferentes transforman tus ideas en piezas únicas.
      </p>
      <div className="hero-buttons  flex md:flex-row flex-col gap-6">
        <Link
          href="/artists"
          className="bg-[#FF9800] px-3 py-2 font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffad33] hover:shadow-lg hover:shadow-[#FF9800]/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF9800]"
        >
          Conoce Aguantaguja
        </Link>
        <Link
          href="/#"
          className="bg-[#F5F5F5] px-3 py-2 font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FF9800] hover:shadow-lg hover:shadow-[#FF9800]/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF9800]"
        >
          Quiero tatuarme
        </Link>
      </div>
    </section>
  );
};

export default Hero;
