export type GalleryTattoo = {
  id: string;
  artistId: string;
  title: string;
  style: string;
  imageUrl: string;
  imageAlt: string;
};

export const tattoos: GalleryTattoo[] = [
  {
    id: "orlando-blackwork-01",
    artistId: "artist-01",
    title: "Pieza blackwork premiada",
    style: "Blackwork",
    imageUrl:
      "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584654/593f1117c5cc36cdeecb580d2a5b751a_tpozgc.jpg",
    imageAlt: "Tatuaje blackwork realizado por Orlando",
  },
  {
    id: "orlando-blackwork-02",
    artistId: "artist-01",
    title: "Detalle ornamental",
    style: "Blackwork",
    imageUrl:
      "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584654/46f9cd4ec84bc06a661b7dfade0747e8_crtzp3.jpg",
    imageAlt: "Detalle de tatuaje ornamental realizado por Orlando",
  },
  {
    id: "enrique-fine-line-01",
    artistId: "artist-02",
    title: "Linea fina",
    style: "Fine line",
    imageUrl:
      "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584651/7770f19688207f7f151c1653814cb8c5_pk2pru.jpg",
    imageAlt: "Tatuaje fine line realizado por Enrique",
  },
  {
    id: "enrique-lettering-01",
    artistId: "artist-02",
    title: "Lettering delicado",
    style: "Lettering",
    imageUrl:
      "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584650/7efda5182b016ec5e6d88ee52414a635_kdymka.jpg",
    imageAlt: "Tatuaje lettering realizado por Enrique",
  },
  {
    id: "osniel-realismo-01",
    artistId: "artist-03",
    title: "Realismo en sombra",
    style: "Realismo",
    imageUrl:
      "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584635/95aafb2b3d382fd5d92b07178f1cf700_tpcvrz.jpg",
    imageAlt: "Tatuaje realista realizado por Osniel",
  },
  {
    id: "osniel-realismo-02",
    artistId: "artist-03",
    title: "Detalle realista",
    style: "Realismo",
    imageUrl:
      "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584664/e680b47aac6cb2e3466773921f22ba82_lvvi6z.jpg",
    imageAlt: "Detalle de tatuaje realista realizado por Osniel",
  },
  {
    id: "francisco-custom-01",
    artistId: "artist-04",
    title: "Diseno personalizado",
    style: "Personalizado",
    imageUrl:
      "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584643/51b72c67a5282b172a8b7a1e6469effb_i33ssb.jpg",
    imageAlt: "Tatuaje personalizado realizado por Francisco",
  },
  {
    id: "francisco-custom-02",
    artistId: "artist-04",
    title: "Composicion personalizada",
    style: "Personalizado",
    imageUrl:
      "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584641/add29247e7d363f23bbdc4cb02a9be25_mctluf.jpg",
    imageAlt: "Composicion de tatuaje personalizada realizada por Francisco",
  },
];
