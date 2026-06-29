import Link from "next/link";
import React from "react";

const Artists = () => {
  return (
    <section
      id="artists"
      className="relative flex min-h-140 flex-col 
      items-center justify-center gap-6
      bg-[linear-gradient(rgb(0_0_0/55%),rgb(0_0_0/55%)),url('/artists-photo.png')] 
      bg-cover bg-center px-6 py-24 text-center"
    >
      <div className="relative z-10 max-w-3xl">
        <h2 className="font-special text-5xl tracking-wide md:text-7xl text-[#F5F5F5]">
          Artistas
        </h2>
        <p className="text-xl text-[#F5F5F5]">
          Cada artista aporta una visión única. Juntos, dominamos cada estilo
          con una calidad inigualable.
        </p>
      </div>
      <Link
        href="/artists"
        className="bg-[#FF9800] px-2 py-2 font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffad33] hover:shadow-lg hover:shadow-[#FF9800]/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF9800]"
      >
        Conoce a nuestros artistas
      </Link>
    </section>
  );
};

export default Artists;
