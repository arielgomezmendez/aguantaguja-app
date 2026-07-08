import { Card, CardContent, CardMedia } from "@mui/material";

export type AwardedTattoo = {
  src: string;
  alt: string;
  category: string;
  award: string;
  tattooer: string;
};

type AwardedTattooCardsProps = {
  title: string;
  tattoos: AwardedTattoo[];
};

const AwardedTattooCards = ({ title, tattoos }: AwardedTattooCardsProps) => {
  return (
    <section>
      <h3 className="border-l-4 border-[#FF9800] pl-3 text-xl font-semibold text-[#F5F5F5]">
        {title}
      </h3>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {tattoos.map((tattoo) => (
          <li key={`${tattoo.tattooer}-${tattoo.src}`}>
            <Card className="h-full overflow-hidden border border-white/10 !bg-[#111111] !text-[#F5F5F5] shadow-xl">
              <CardMedia
                component="img"
                image={tattoo.src}
                alt={tattoo.alt}
                className="h-72 object-cover"
              />
              <CardContent className="p-5!">
                <dl className="flex flex-col gap-4">
                  <div className="">
                    <dt className="sr-only text-xs font-bold uppercase tracking-wider text-[#A1A1AA]">
                      Categoria
                    </dt>
                    <dd className=" font-medium">{tattoo.category}</dd>
                  </div>
                  <div >
                    <dt className="sr-only text-xs font-bold uppercase tracking-wider text-[#A1A1AA]">
                      Premio
                    </dt>
                    <dd className="font-special text-3xl text-[#FF9800]">
                      {tattoo.award}
                    </dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="sr-only text-xs font-bold uppercase tracking-wider text-[#A1A1AA]">
                      Tatuador
                    </dt>
                    <dd className=" font-medium">{tattoo.tattooer}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AwardedTattooCards;
