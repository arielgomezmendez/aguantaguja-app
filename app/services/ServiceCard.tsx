import Image from "next/image";
import type { Service } from "./servicesData";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article
      className="flex flex-col md:flex-row justify-between min-h-50 md:w-250 w-90 
    overflow-hidden border border-white/10 bg-[#111111] "
    >
      <div className="flex min-h-64 w-100 flex-col justify-center bg-[#111111] p-6 md:p-6">
        <h2 className="mt-2 font-special text-2xl text-[#F5F5F5] md:text-4xl">
          {service.title}
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-[#A1A1AA]">
          {service.description}
        </p>
      </div>

      <figure className="relative h-64 w-100 bg-black md:h-full">
        <Image
          src={service.imageUrl}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 768px) 360px, 100vw"
          className="h-full w-full object-cover"
        />
      </figure>
    </article>
  );
}
