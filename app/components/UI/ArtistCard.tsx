import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";

type Artist = {
  id: string;
  name: string;
  specialty: string;
  phone: string;
  instagram: string;
  imagePosition: string;
  imageUrl:string;
};

type ArtistCardProps = {
  artist: Artist;
};

const ArtistCard = ({ artist }: ArtistCardProps) => {
  return (
    <>
      <Card className="overflow-hidden bg-[#111111] ">
        <CardMedia
          component="img"
          image={artist.imageUrl}          title={`Retrato de ${artist.name}, tatuador de Aguantaguja`}
          className="h-38 w-full bg-black object-contain sm:h-80"
          sx={{
            objectPosition: artist.imagePosition,
          }}
        />

        <CardContent className="bg-[#111111] !pt-4 !pb-2">
          <p className="text-[0.8rem] uppercase tracking-[0.2em] text-[#FF9800]">
            {artist.specialty}
          </p>

          <h2 className="mt-2 font-special text-4xl text-[#F5F5F5]">
            {artist.name}
          </h2>
        </CardContent>

        <CardActions
          disableSpacing
          className="flex flex-col items-stretch gap-3 bg-[#111111] px-4 sm:px-6"
        >
          <Link
            href={`https://wa.me/${artist.phone}?text=${encodeURIComponent(
              `Hola, quiero hacerme un tatuaje con ${artist.name}`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 w-full items-center justify-center bg-[#FF9800] 
            px-2 py-2 text-center text-sm font-bold text-black transition-colors hover:bg-[#ffad33]"
          >
            ESCRÍBEME AHORA
          </Link>

          <Link
            href="/#gallery"
            className="flex min-h-11 w-full items-center justify-center border border-[#FF9800] bg-black px-2 py-2 
            text-center text-sm font-bold text-[#FF9800] transition-colors hover:bg-[#FF9800] hover:text-black"
          >
            VER GALERÍA
          </Link>

          <Link
            href={artist.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm font-bold text-[#F5F5F5] underline underline-offset-4 transition-colors hover:text-[#FF9800]"
          >
            <InstagramIcon fontSize="small" />
            Sígueme en Instagram
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default ArtistCard;
