import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center px-6 py-18 bg-[#111111]"
    >
      <h1 className="text-[#F5F5F5] text-6xl  md:text-8xl tracking-wide font-special">
        ARTE EN LA PIEL
      </h1>
      <p className="text-[#F5F5F5] text-xl my-8 mx-16">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
        quos et quaerat odit! Dolorum eveniet velit totam magni est odit dolor
        temporibus ab hic quae? Perspiciatis sapiente maxime voluptatibus sit.
      </p>
      <div className="hero-buttons  flex md:flex-row flex-col gap-6">
        <Link
          href="/artists"
          className="bg-[#FF9800] px-3 py-2 font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffad33] hover:shadow-lg hover:shadow-[#FF9800]/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF9800]"
        >
          Conoce a nuestros artistas
        </Link>
        <Link
          href="/us"
          className="bg-[#F5F5F5] px-3 py-2 font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FF9800] hover:shadow-lg hover:shadow-[#FF9800]/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF9800]"
        >
          Visita el estudio
        </Link>
      </div>
    </section>
  );
};

export default Hero;
