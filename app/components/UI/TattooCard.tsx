import { Card, CardContent, CardMedia } from "@mui/material";
import React from "react";

const TattooCard = () => {
  return (
    <Card className="group mx-auto max-w-sm overflow-hidden border border-white/10 !bg-[#111111] !text-[#F5F5F5] shadow-xl ">
      <CardMedia
        component="img"
        height="20"
        image="https://res.cloudinary.com/dcc1qdoob/image/upload/v1782584654/593f1117c5cc36cdeecb580d2a5b751a_tpozgc.jpg"
        alt="Tatuaje premiado en Havana Tattoo Expo"
        className="h-64 object-cover "
      />

      <CardContent className="p-6!">
        <h3 className="border-l-4 border-[#FF9800] pl-3 text-xl font-semibold">
          Havana Tattoo Expo
        </h3>

        <dl className="mt-5 grid grid-cols-2 gap-4">
          <div className="border-t border-white/10 pt-3">
            <dt className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA]">
              Categoría
            </dt>
            <dd className="mt-1 font-medium">Blackwork</dd>
          </div>

          <div className="border-t border-white/10 pt-3">
            <dt className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA]">
              Premio
            </dt>
            <dd className="mt-1 font-medium text-[#FF9800]">1.er lugar</dd>
          </div>

          <div className="border-t border-white/10 pt-3">
            <dt className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA]">
              Ciudad
            </dt>
            <dd className="mt-1 font-medium">La Habana</dd>
          </div>

          <div className="border-t border-white/10 pt-3">
            <dt className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA]">
              Año
            </dt>
            <dd className="mt-1 font-medium">2025</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
};

export default TattooCard;
