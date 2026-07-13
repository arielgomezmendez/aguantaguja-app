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
      <ul className="w-full max-w-7xl columns-1 gap-3 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5">
        {galleryPreview.map((tattoo) => (
          <li key={tattoo.id} className="mb-3 break-inside-avoid">
            <figure aria-label={`${tattoo.title}. ${tattoo.style}`}>
              <Image
                src={tattoo.imageUrl}
                alt={tattoo.imageAlt}
                width={600}
                height={800}
                sizes="(min-width: 1536px) 20vw, (min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full bg-black"
              />
              <figcaption className="sr-only">
                {tattoo.title} - {tattoo.style}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <Link
        href="/gallery"
        className="bg-[#FF9800] px-2 py-2 font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffad33] hover:shadow-lg hover:shadow-[#FF9800]/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF9800]"
      >
        Ver más proyectos
      </Link>
    </section>
  );
};

export default Gallery;
