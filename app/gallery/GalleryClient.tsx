"use client";

import { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
} from "@mui/material";
import { artists } from "../artists/artistsData";
import { tattoos } from "./galleryData";

const allArtistsFilter = "all";

export default function GalleryClient() {
  const [selectedArtistId, setSelectedArtistId] = useState(allArtistsFilter);

  const filteredTattoos =
    selectedArtistId === allArtistsFilter
      ? tattoos
      : tattoos.filter((tattoo) => tattoo.artistId === selectedArtistId);

  const getArtistName = (artistId: string) =>
    artists.find((artist) => artist.id === artistId)?.name ?? "Aguantaguja";

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <Stack
        component="div"
        direction="row"
        spacing={1.5}
        useFlexGap
        className="mb-10 justify-center"
        sx={{ flexWrap: "wrap" }}
      >
        <Chip
          label="Todos"
          onClick={() => setSelectedArtistId(allArtistsFilter)}
          variant={
            selectedArtistId === allArtistsFilter ? "filled" : "outlined"
          }
          sx={{
            borderColor: "rgba(255,255,255,0.18)",
            backgroundColor:
              selectedArtistId === allArtistsFilter ? "#FF9800" : "#111111",
            color: selectedArtistId === allArtistsFilter ? "#000" : "#F5F5F5",
            fontWeight: 700,
            "&:hover": {
              backgroundColor:
                selectedArtistId === allArtistsFilter ? "#ffad33" : "#1b1b1b",
            },
          }}
        />

        {artists.map((artist) => (
          <Chip
            label={artist.name}
            onClick={() => setSelectedArtistId(artist.id)}
            variant={selectedArtistId === artist.id ? "filled" : "outlined"}
            sx={{
              borderColor: "rgba(255,255,255,0.18)",
              backgroundColor:
                selectedArtistId === artist.id ? "#FF9800" : "#111111",
              color: selectedArtistId === artist.id ? "#000" : "#F5F5F5",
              fontWeight: 700,
              "&:hover": {
                backgroundColor:
                  selectedArtistId === artist.id ? "#ffad33" : "#1b1b1b",
              },
            }}
          />
        ))}
      </Stack>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTattoos.map((tattoo) => (
          <li key={tattoo.id}>
            <Card className="h-full overflow-hidden border border-white/10 !bg-[#111111] !text-[#F5F5F5]">
              <CardMedia
                component="img"
                image={tattoo.imageUrl}
                alt={tattoo.imageAlt}
                title={tattoo.imageAlt}
                className="h-80 bg-black object-cover"
              />
              <CardContent className="!p-5">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF9800]">
                  {getArtistName(tattoo.artistId)}
                </p>
                <h2 className="mt-3 font-special text-3xl text-[#F5F5F5]">
                  {tattoo.title}
                </h2>
                <p className="mt-2 text-[#A1A1AA]">{tattoo.style}</p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
