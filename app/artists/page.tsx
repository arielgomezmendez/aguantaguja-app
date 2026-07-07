import type { Metadata } from "next";
import Link from "next/link";
import ArtistCard from "../components/UI/ArtistCard";

export const metadata: Metadata = {
  title: "Artistas | Aguantaguja Tattoo Studio",
  description:
    "Conoce al equipo de artistas de Aguantaguja y los estilos que trabajamos en el estudio.",
};

const specialties = [
  "Blackwork",
  "Realismo",
  "Fine line",
  "Lettering",
  "Diseño personalizado",
];

const artists = [
  {
    id: "artist-01",
    name: "Artista 01",
    specialty: "Blackwork",
    phone: "",
    instagram: "https://www.instagram.com/aguantaguja_tattoostudio/",
    imagePosition: "8% 48%",
  },
  {
    id: "artist-02",
    name: "Artista 02",
    specialty: "Fine line",
    phone: "",
    instagram: "https://www.instagram.com/aguantaguja_tattoostudio/",
    imagePosition: "31% 48%",
  },
  {
    id: "artist-03",
    name: "Artista 03",
    specialty: "Realismo",
    phone: "",
    instagram: "https://www.instagram.com/aguantaguja_tattoostudio/",
    imagePosition: "50% 48%",
  },
  {
    id: "artist-04",
    name: "Artista 04",
    specialty: "Diseño personalizado",
    phone: "",
    instagram: "https://www.instagram.com/aguantaguja_tattoostudio/",
    imagePosition: "69% 48%",
  },
  {
    id: "artist-05",
    name: "Artista 05",
    specialty: "Lettering",
    phone: "",
    instagram: "https://www.instagram.com/aguantaguja_tattoostudio/",
    imagePosition: "92% 48%",
  },
];

export default function ArtistsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF9800]">
            Aguantaguja
          </p>
          <h1 className="mt-4 font-special text-5xl leading-tight text-[#F5F5F5] md:text-7xl">
            Conoce a nuestros artistas
          </h1>
          <p className="mt-5 leading-7 text-[#A1A1AA]">
            Explora el trabajo de cada integrante y contacta directamente con el
            artista que mejor conecte con tu idea.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {artists.map((artist) => (
            <li
              key={artist.id}
              className="group overflow-hidden border border-white/10 bg-[#111111] transition-colors hover:border-[#FF9800]/70"
            >
              <ArtistCard artist={artist} />
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-white/10 bg-[#111111] px-6 py-16 text-center md:py-20">
        <h2 className="font-special text-4xl text-[#F5F5F5] md:text-5xl">
          Estilos que trabajamos
        </h2>
        <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
          {specialties.map((specialty) => (
            <li
              key={specialty}
              className="border border-white/15 px-4 py-2 text-[#A1A1AA]"
            >
              {specialty}
            </li>
          ))}
        </ul>
        <Link
          href="https://www.instagram.com/aguantaguja_tattoostudio/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block bg-[#FF9800] px-5 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffad33]"
        >
          Cuéntanos tu idea
        </Link>
      </section>
    </>
  );
}
