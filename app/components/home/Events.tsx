import Link from "next/link";
import TattooCard from "../UI/TattooCard";

const events = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584654/593f1117c5cc36cdeecb580d2a5b751a_tpozgc.jpg",
    alt: "Tatuaje premiado en Havana Tattoo Expo",
    title: "Havana Tattoo Expo",
    category: "Blackwork",
    award: "1.er lugar",
    city: "La Habana",
    year: 2025,
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584654/593f1117c5cc36cdeecb580d2a5b751a_tpozgc.jpg",
    alt: "Tatuaje premiado en Havana Tattoo Expo",
    title: "Havana Tattoo Expo",
    category: "Blackwork",
    award: "1.er lugar",
    city: "La Habana",
    year: 2025,
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584654/593f1117c5cc36cdeecb580d2a5b751a_tpozgc.jpg",
    alt: "Tatuaje premiado en Havana Tattoo Expo",
    title: "Havana Tattoo Expo",
    category: "Blackwork",
    award: "1.er lugar",
    city: "La Habana",
    year: 2025,
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584654/593f1117c5cc36cdeecb580d2a5b751a_tpozgc.jpg",
    alt: "Tatuaje premiado en Havana Tattoo Expo",
    title: "Havana Tattoo Expo",
    category: "Blackwork",
    award: "1.er lugar",
    city: "La Habana",
    year: 2025,
  },
];

const Events = () => {
  return (
    <section id="events" className="flex flex-col justify-center  gap-6">
      <h2 className="text-center font-special text-5xl tracking-wide text-[#F5F5F5] md:text-7xl">
        Premios y eventos
      </h2>
      <p className="mx-auto mt-4 mb-10 max-w-3xl px-6 text-center text-lg leading-relaxed text-[#A1A1AA] md:text-xl">
        El trabajo de Aguantaguja también ha sido reconocido en convenciones y
        eventos de tatuaje, destacando piezas premiadas en diferentes
        categorías.
      </p>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {events.map((event) => (
          <li key={event.id}>
            <TattooCard />
          </li>
        ))}
      </ul>
      <Link
        href="/gallery"
        className="bg-[#FF9800] px-2 py-2 font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffad33] hover:shadow-lg hover:shadow-[#FF9800]/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF9800]"
      >
        Ver todos los eventos
      </Link>
    </section>
  );
};

export default Events;
