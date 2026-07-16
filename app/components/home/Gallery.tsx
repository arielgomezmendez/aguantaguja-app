import Image from "next/image";
import Link from "next/link";
import { tattoos } from "../../gallery/galleryData";

const galleryPreview = tattoos.slice(0, 12);

const Gallery = () => {
  return (
    <section
      id="galery"
      className="flex flex-col items-center justify-center gap-6 bg-[#111111] px-6 py-12"
    >
      <h2 className="font-special text-5xl tracking-wide md:text-7xl text-[#F5F5F5]">
        Galería
      </h2>
      <div className="relative w-full max-w-7xl pb-20 md:pb-24">
        <ul className="w-full columns-1 gap-3 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5">
          {galleryPreview.map((tattoo) => (
            <li key={tattoo.id} className="mb-3 break-inside-avoid">
              <Image
                src={tattoo.imageUrl}
                alt={tattoo.imageAlt}
                width={600}
                height={800}
                sizes="(min-width: 1536px) 20vw, (min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full bg-black"
              />
            </li>
          ))}
        </ul>
        <div className="pointer-events-none absolute right-0 bottom-20 left-0 h-52 bg-gradient-to-b from-transparent to-[#111111] md:bottom-24 md:h-64" />
        <Link
          href="/gallery"
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 bg-[#FF9800] px-2 py-2 font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffad33] hover:shadow-lg hover:shadow-[#FF9800]/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF9800] md:bottom-12"
        >
          Ver más proyectos
        </Link>
      </div>
    </section>
  );
};

export default Gallery;
