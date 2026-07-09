export type Service = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    title: "Tatuajes personalizados",
    description:
      "Creamos piezas a medida segun tu idea, estilo, zona del cuerpo y referencias visuales.",
    imageUrl:
      "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584654/593f1117c5cc36cdeecb580d2a5b751a_tpozgc.jpg",
    imageAlt: "Tatuaje personalizado realizado por Aguantaguja",
  },
  {
    title: "Piercing y perforaciones",
    description:
      "Realizamos perforaciones con materiales adecuados, higiene cuidadosa y orientacion para el cuidado posterior.",
    imageUrl: "/artists-photo.png",
    imageAlt: "Equipo de Aguantaguja Tattoo Studio",
  },
  {
    title: "Microblading y tatuaje estetico",
    description:
      "Trabajamos detalles esteticos con tecnica precisa, enfoque natural y recomendaciones claras para el cuidado posterior.",
    imageUrl: "/artists-photo.png",
    imageAlt: "Servicio estetico en Aguantaguja Tattoo Studio",
  },
  {
    title: "Coberturas",
    description:
      "Evaluamos tatuajes anteriores para proponer una solucion visual limpia y viable.",
    imageUrl:
      "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584654/46f9cd4ec84bc06a661b7dfade0747e8_crtzp3.jpg",
    imageAlt: "Detalle de tatuaje para cobertura",
  },
  {
    title: "Retoques",
    description:
      "Revisamos la cicatrizacion y reforzamos detalles cuando la pieza lo necesita.",
    imageUrl:
      "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584635/95aafb2b3d382fd5d92b07178f1cf700_tpcvrz.jpg",
    imageAlt: "Detalle de tatuaje retocado",
  },
];
