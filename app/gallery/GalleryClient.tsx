"use client";

import { useState } from "react";
import { CardMedia, Chip, Stack } from "@mui/material";
import { artists } from "../artists/artistsData";
import { tattoos } from "./galleryData";

const allArtistsFilter = "all";

export default function GalleryClient() {
  const [selectedArtistName, setSelectedArtistName] =
    useState(allArtistsFilter);
  
  const filteredTattoos =
    selectedArtistName === allArtistsFilter
      ? tattoos
      : tattoos.filter((tattoo) => tattoo.artistId === selectedArtistName);

  return (
    <section className="mx-auto max-w-7xl bg-[#111111] px-6 pb-20">
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
          onClick={() => setSelectedArtistName(allArtistsFilter)}
          variant={
            selectedArtistName === allArtistsFilter ? "filled" : "outlined"
          }
          sx={{
            borderColor: "rgba(255,255,255,0.18)",
            backgroundColor:
              selectedArtistName === allArtistsFilter ? "#FF9800" : "#111111",
            color: selectedArtistName === allArtistsFilter ? "#000" : "#F5F5F5",
            fontWeight: 700,
            "&:hover": {
              backgroundColor:
                selectedArtistName === allArtistsFilter ? "#ffad33" : "#1b1b1b",
            },
          }}
        />

        {artists.map((artist) => (
          <Chip
            key={artist.id}
            label={artist.name}
            onClick={() => setSelectedArtistName(artist.name)}
            variant={selectedArtistName === artist.name ? "filled" : "outlined"}
            sx={{
              borderColor: "rgba(255,255,255,0.18)",
              backgroundColor:
                selectedArtistName === artist.name ? "#FF9800" : "#111111",
              color: selectedArtistName === artist.name ? "#000" : "#F5F5F5",
              fontWeight: 700,
              "&:hover": {
                backgroundColor:
                  selectedArtistName === artist.name ? "#ffad33" : "#1b1b1b",
              },
            }}
          />
        ))}
      </Stack>

      <ul className="columns-1 gap-3 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5">
        {filteredTattoos.map((tattoo) => (
          <li key={tattoo.id} className="mb-3 break-inside-avoid">
            <figure aria-label={`${tattoo.title}. ${tattoo.style}`}>
              <CardMedia
                component="img"
                image={tattoo.imageUrl}
                alt={tattoo.imageAlt}
                title={tattoo.imageAlt}
                className="h-auto w-full bg-black"
              />
              <figcaption className="sr-only">
                {tattoo.title} - {tattoo.style}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
