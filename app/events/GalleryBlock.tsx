import Image from "next/image";

export type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryBlockProps = {
  title: string;
  images: GalleryImage[];
};

const GalleryBlock = ({ title, images }: GalleryBlockProps) => {
  return (
    <section>
      <h3 className="border-l-4 border-[#FF9800] pl-3 text-xl font-semibold text-[#F5F5F5]">
        {title}
      </h3>
      <ul className="mt-4 grid grid-cols-2 gap-3">
        {images.map((image) => (
          <li
            key={`${title}-${image.src}`}
            className="group aspect-square overflow-hidden border border-white/10 bg-black"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={420}
              height={420}
              className="h-full w-full object-cover"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GalleryBlock;
