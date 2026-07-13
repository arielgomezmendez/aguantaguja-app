import type { Metadata } from "next";
import AwardedTattooCards from "./AwardedTattooCards";
import GalleryBlock from "./GalleryBlock";
import { events } from "./eventsData";

export const metadata: Metadata = {
  title: "Eventos | Aguantaguja Tattoo Studio",
  description:
    "Premios, tatuajes premiados y fotos de los eventos donde Aguantaguja ha participado.",
};

export default function EventsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl bg-[#111111] px-6 py-10 text-center md:py-16">
        <h1 className="mt-4 font-special text-5xl leading-tight text-[#F5F5F5] md:text-7xl">
          Premios y eventos
        </h1>
        <p className="mx-auto mt-5 max-w-3xl leading-7 text-[#A1A1AA]">
          Fotos de los premios, tatuajes premiados, resultados obtenidos y
          momentos vividos durante cada evento.
        </p>
      </section>

      <section className="mx-auto max-w-7xl space-y-12 bg-[#111111] px-6 pb-20">
        {events.map((event) => (
          <article
            key={event.id}
            className="border border-white/10 bg-[#111111] p-5 md:p-8"
          >
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF9800]">
                  {event.year}
                </p>
                <p className="mt-1 text-[#F5F5F5]">{event.place}</p>
                <h2 className="mt-3 font-special text-4xl text-[#F5F5F5] md:text-5xl">
                  {event.name}
                </h2>
                <p className="mt-4 leading-7 text-[#A1A1AA]">
                  {event.description}
                </p>
                
              </div>

              <GalleryBlock title="Momentos del evento" images={event.dayPhotos} />
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <AwardedTattooCards
                title="Trabajos premiados"
                tattoos={event.tattooPhotos}
              />
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
