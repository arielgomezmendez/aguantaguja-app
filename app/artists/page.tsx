import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
              <div className="relative aspect-4/5 overflow-hidden bg-black">
                <Image
                  src="/artists-photo.png"
                  alt={`Retrato de ${artist.name}, tatuador de Aguantaguja`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="scale-[1.8] object-cover h-2"
                  style={{
                    objectPosition: artist.imagePosition,
                    transformOrigin: artist.imagePosition,
                  }}
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF9800]">
                  {artist.specialty}
                </p>
                <h2 className="mt-2 font-special text-3xl text-[#F5F5F5]">
                  {artist.name}
                </h2>

                <div className="mt-4 grid gap-3">
                  <Link
                    href={`https://wa.me/${artist.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/15 px-2 py-2 text-center text-sm font-bold text-[#F5F5F5] transition-colors hover:border-[#25D366] hover:text-[#25D366]"
                  >
                    WhatsApp · {artist.phone}
                  </Link>

                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href={artist.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white/15 px-2 py-2 text-center text-sm font-bold text-[#F5F5F5] transition-colors hover:border-[#FF9800] hover:text-[#FF9800]"
                    >
                      Instagram
                    </Link>
                    <Link
                      href="/#galery"
                      className="bg-[#FF9800] px-2 py-2 text-center text-sm font-bold text-black transition-colors hover:bg-[#ffad33]"
                    >
                      Ver galería
                    </Link>
                  </div>
                </div>
              </div>
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
