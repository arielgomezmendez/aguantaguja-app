import Image from "next/image";
import Link from "next/link";

type Artist = {
  id: string;
  name: string;
  specialty: string;
  phone: string;
  instagram: string;
  imagePosition: string;
};

type ArtistCardProps = {
  artist: Artist;
};

const ArtistCard = ({ artist }: ArtistCardProps) => {
  return (
    <>
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
    </>
  );
};

export default ArtistCard;
