import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center px-6 mt-18 "
    >
      <h1 className="text-[#F5F5F5] text-6xl  md:text-8xl tracking-wide font-special">
        ARTE EN LA PIEL
      </h1>
      <p className="text-[#F5F5F5] text-xl my-8 mx-16">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
        quos et quaerat odit! Dolorum eveniet velit totam magni est odit dolor
        temporibus ab hic quae? Perspiciatis sapiente maxime voluptatibus sit.
      </p>
      <div className="hero-buttons  flex flex-row gap-6">
        <Link
          href="/artists"
          className="bg-[#FF9800] px-3 py-2 text-xl font-bold "
        >
          Conoce a nuestros artistas
        </Link>
        <Link href="/us" className="bg-[#F5F5F5] px-3 py-2 text-xl font-bold">
          Visita el estudio
        </Link>
      </div>
    </section>
  );
};

export default Hero;
