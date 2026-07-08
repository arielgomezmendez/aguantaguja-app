"use client";

import LocationOnIcon from "@mui/icons-material/LocationOn";
const latitude = 22.412968;
const longitude = -83.699929;

const studioAddress = "Aguantaguja Tattoo Studio, Calle Sol, No 74, Pinar del Río, Pinar del Río, Cuba";
const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=18&output=embed`

const VisitUs = () => {
  return (
    <section
      id="visitUs"
      className="bg-[#111111] py-16 text-[#F5F5F5]"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center">
        <div className="flex-1">
          <h2 className="font-special text-5xl tracking-wide md:text-6xl">
            Visita nuestro estudio
          </h2>
          <div className="mt-6 flex items-center gap-3 text-lg leading-relaxed text-[#A1A1AA] md:text-xl">
            <LocationOnIcon className="shrink-0 text-[#FF9800]" />
            <p>{studioAddress}</p>
          </div>
        </div>

        <div className="h-64 flex-1 overflow-hidden rounded-sm border border-white/10 md:h-80">
          <iframe
            title="Mapa de Aguantaguja Tattoo Studio"
            src={mapUrl}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
