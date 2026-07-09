import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

export const metadata: Metadata = {
  title: "Servicios | Aguantaguja Tattoo Studio",
  description:
    "Servicios de tatuaje, piercing, perforaciones, microblading, tatuaje estetico, cobertura y retoque en Aguantaguja Tattoo Studio.",
};

const processSteps = [
  "Cuentanos tu idea y comparte referencias.",
  "Definimos estilo, zona, tamano y presupuesto.",
  "Agendamos la cita y preparamos el diseno.",
];

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-10 text-center md:py-16">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF9800]">
          Aguantaguja
        </p>
        <h1 className="mt-4 font-special text-5xl leading-tight text-[#F5F5F5] md:text-7xl">
          Servicios
        </h1>
        <p className="mx-auto mt-5 max-w-3xl leading-7 text-[#A1A1AA]">
          Trabajamos cada tatuaje desde la idea inicial hasta el cuidado final,
          con una guia clara para que llegues a tu cita con seguridad.
        </p>
      </section>

      <section className="mx-auto grid md:ml-25 max-w-7xl gap-6 px-6 pb-16">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </section>

      <section className="border-y border-white/10 bg-[#111111] px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF9800]">
              Reserva
            </p>
            <h2 className="mt-4 font-special text-4xl text-[#F5F5F5] md:text-5xl">
              Como trabajamos tu idea
            </h2>
            <p className="mt-5 leading-7 text-[#A1A1AA]">
              Antes de tatuar, conversamos contigo para entender que quieres
              contar, que estilo te representa y como llevarlo bien a la piel.
            </p>
          </div>

          <ol className="grid gap-4">
            {processSteps.map((step, index) => (
              <li
                key={step}
                className="flex gap-4 border border-white/10 bg-black p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#FF9800] font-bold text-black">
                  {index + 1}
                </span>
                <p className="self-center leading-7 text-[#F5F5F5]">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center md:py-20">
        <h2 className="font-special text-4xl text-[#F5F5F5] md:text-5xl">
          Listo para empezar?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#A1A1AA]">
          Escribenos por Instagram y cuentanos tu idea, la zona donde quieres
          tatuarte y cualquier referencia que tengas.
        </p>
        <Link
          href="https://www.instagram.com/aguantaguja_tattoostudio/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block bg-[#FF9800] px-5 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffad33]"
        >
          Contactar ahora
        </Link>
      </section>
    </>
  );
}
