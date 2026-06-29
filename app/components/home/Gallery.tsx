import Image from "next/image";
import Link from "next/link";
import React from "react";

const images = [
  {
    src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584664/e680b47aac6cb2e3466773921f22ba82_lvvi6z.jpg",
    alt: "Tatuaje realizado en el estudio 1",
  },
  {
    src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584655/80555f18c5a7e1fd937bac24f06cf554_m5upzo.jpg",
    alt: "Tatuaje realizado en el estudio 2",
  },
  {
    src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584654/593f1117c5cc36cdeecb580d2a5b751a_tpozgc.jpg",
    alt: "Tatuaje realizado en el estudio 3",
  },
  {
    src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584654/46f9cd4ec84bc06a661b7dfade0747e8_crtzp3.jpg",
    alt: "Tatuaje realizado en el estudio 4",
  },
  {
    src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584653/e10621ebaafb89513eb73b94b152ae7a_ekymjh.jpg",
    alt: "Tatuaje realizado en el estudio 5",
  },
  {
    src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584654/593f1117c5cc36cdeecb580d2a5b751a_tpozgc.jpg",
    alt: "Tatuaje realizado en el estudio 6",
  },
  {
    src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584651/7770f19688207f7f151c1653814cb8c5_pk2pru.jpg",
    alt: "Tatuaje realizado en el estudio 7",
  },
  {
    src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584650/7efda5182b016ec5e6d88ee52414a635_kdymka.jpg",
    alt: "Tatuaje realizado en el estudio 8",
  },
  {
    src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584643/51b72c67a5282b172a8b7a1e6469effb_i33ssb.jpg",
    alt: "Tatuaje realizado en el estudio 9",
  },
  {
    src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584641/add29247e7d363f23bbdc4cb02a9be25_mctluf.jpg",
    alt: "Tatuaje realizado en el estudio 10",
  },
  {
    src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584635/95aafb2b3d382fd5d92b07178f1cf700_tpcvrz.jpg",
    alt: "Tatuaje realizado en el estudio 11",
  },
  {
    src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584634/970b47802f04696a1cb90aab04a10fe7_anebfb.jpg",
    alt: "Tatuaje realizado en el estudio 12",
  },
];

const Gallery = () => {
  return (
    <section
      id="galery"
      className="flex flex-col justify-center items-center gap-6  bg-[#111111] py-12"
    >
      <h2 className="font-special text-5xl tracking-wide md:text-7xl text-[#F5F5F5]">
        Galería
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((image) => (
          <li key={image.src}>
            <figure className="overflow-hidden rounded-lg">
              <Image src={image.src} alt={image.src} width={300} height={150} />
            </figure>
          </li>
        ))}
      </ul>
      <Link href="/gallery" className=" bg-[#FF9800] px-2 py-2 font-bold">Ver más proyectos</Link>
    </section>
  );
};

export default Gallery;
