import Link from "next/link";
import React from "react";

const Artists = () => {
  return (
    <section
      id="artists"
      className="relative flex min-h-140 flex-col 
      items-center justify-center gap-6 overflow-hidden bg-black px-6 py-24 text-center"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/artists.jpeg')] bg-contain bg-center bg-no-repeat"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/55"
      />
      <div className="relative z-10 max-w-3xl">
        <h2 className="font-special text-5xl tracking-wide md:text-7xl text-[#F5F5F5]">
          Nuestros artistas
        </h2>
        <p className="text-xl text-[#F5F5F5]">
          Aguantaguja reúne a varios artistas con diferentes estilos y formas de crear,
           trabajando y creciendo juntos bajo un mismo techo.
        </p>
      </div>
      <Link
        href="/artists"
        className="relative z-10 flex items-center justify-center gap-2  font-bold text-[#FF9800] underline underline-offset-4 transition-colors"
      >
        Encuentra el indicado para tu idea →
      </Link>
    </section>
  );
};

export default Artists;
