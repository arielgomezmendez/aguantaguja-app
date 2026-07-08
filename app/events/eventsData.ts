import type { GalleryImage } from "./GalleryBlock";
import type { AwardedTattoo } from "./AwardedTattooCards";

type EventItem = {
  id: string;
  name: string;
  category: string;
  award: string;
  place: string;
  year: string;
  description: string;
  awardPhotos: GalleryImage[];
  tattooPhotos: AwardedTattoo[];
  dayPhotos: GalleryImage[];
};

export const events: EventItem[] = [
  {
    id: "havana-tattoo-expo-2025",
    name: "Havana Tattoo Expo",
    category: "Blackwork",
    award: "1.er lugar",
    place: "La Habana, Cuba",
    year: "2025",
    description:
      "Una seleccion de momentos del evento, el premio obtenido y la pieza tatuada durante la competencia.",
    awardPhotos: [
      {
        src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584664/e680b47aac6cb2e3466773921f22ba82_lvvi6z.jpg",
        alt: "Premio obtenido en Havana Tattoo Expo",
      },
      {
        src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584655/80555f18c5a7e1fd937bac24f06cf554_m5upzo.jpg",
        alt: "Detalle del reconocimiento recibido",
      },
    ],
    tattooPhotos: [
      {
        src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584654/593f1117c5cc36cdeecb580d2a5b751a_tpozgc.jpg",
        alt: "Tatuaje premiado en categoria Blackwork",
        category: "BLACKWORK",
        award: "Primer lugar",
        tattooer: "Artista 01",
      },
      {
        src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584654/46f9cd4ec84bc06a661b7dfade0747e8_crtzp3.jpg",
        alt: "Detalle del tatuaje premiado",
        category: "BLACKWORK",
        award: "Segundo lugar",
        tattooer: "Artista 01",
      },
    ],
    dayPhotos: [
      {
        src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584651/7770f19688207f7f151c1653814cb8c5_pk2pru.jpg",
        alt: "Equipo durante el dia del evento",
      },
      {
        src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584650/7efda5182b016ec5e6d88ee52414a635_kdymka.jpg",
        alt: "Ambiente del evento de tatuaje",
      },
    ],
  },
  {
    id: "ink-fest-2024",
    name: "Ink Fest",
    category: "Realismo",
    award: "Mencion especial",
    place: "La Habana, Cuba",
    year: "2024",
    description:
      "Registro visual del reconocimiento, la pieza presentada y la experiencia compartida durante la convencion.",
    awardPhotos: [
      {
        src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584643/51b72c67a5282b172a8b7a1e6469effb_i33ssb.jpg",
        alt: "Premio recibido en Ink Fest",
      },
      {
        src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584641/add29247e7d363f23bbdc4cb02a9be25_mctluf.jpg",
        alt: "Foto del reconocimiento de Ink Fest",
      },
    ],
    tattooPhotos: [
      {
        src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584635/95aafb2b3d382fd5d92b07178f1cf700_tpcvrz.jpg",
        alt: "Tatuaje premiado en categoria Realismo",
        category: "REALISMO",
        award: "Mencion especial",
        tattooer: "Artista 03",
      },
      {
        src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584664/e680b47aac6cb2e3466773921f22ba82_lvvi6z.jpg",
        alt: "Detalle de tatuaje realista premiado",
        category: "REALISMO",
        award: "Mencion especial",
        tattooer: "Artista 03",
      },
    ],
    dayPhotos: [
      {
        src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584654/593f1117c5cc36cdeecb580d2a5b751a_tpozgc.jpg",
        alt: "Dia del evento Ink Fest",
      },
      {
        src: "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584654/46f9cd4ec84bc06a661b7dfade0747e8_crtzp3.jpg",
        alt: "Publico y artistas durante Ink Fest",
      },
    ],
  },
];
