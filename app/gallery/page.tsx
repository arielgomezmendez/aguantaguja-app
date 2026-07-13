import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Galeria | Aguantaguja Tattoo Studio",
  description:
    "Galeria de tatuajes de Aguantaguja con filtros por artista y estilos del estudio.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl bg-[#111111] px-6 py-10 text-center md:py-16">
        <h1 className="mt-4 font-special text-5xl leading-tight text-[#F5F5F5] md:text-7xl">
          Galería
        </h1>
        <p className="mx-auto mt-5 max-w-3xl leading-7 text-[#A1A1AA]">
          Explora tatuajes realizados en el estudio y filtra por artista para
          encontrar el estilo que mejor conecte con tu idea.
        </p>
      </section>

      <GalleryClient />
    </>
  );
}
