"use client";

import { useState } from "react";
import { CardMedia, Chip, Stack } from "@mui/material";
import { artists } from "../artists/artistsData";
import { tattoos } from "./galleryData";

const allArtistsFilter = "all";

const getFilterChipStyles = (isSelected: boolean) => ({
  borderColor: "rgba(255,255,255,0.18)",
  backgroundColor: isSelected ? "#FF9800" : "#111111",
  color: isSelected ? "#000" : "#F5F5F5",
  fontWeight: 700,
  "&:hover": {
    backgroundColor: isSelected ? "#ffad33" : "#1b1b1b",
  },
  "&:focus": {
    backgroundColor: isSelected ? "#FF9800" : "#111111",
    color: isSelected ? "#000" : "#F5F5F5",
  },
  "&.Mui-focusVisible": {
    backgroundColor: isSelected ? "#FF9800" : "#111111",
    color: isSelected ? "#000" : "#F5F5F5",
    outline: "2px solid #FF9800",
    outlineOffset: "3px",
  },
  "& .MuiChip-label": {
    color: "inherit",
  },
});

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
          component="button"
          type="button"
          label="Todos"
          onClick={() => setSelectedArtistName(allArtistsFilter)}
          aria-pressed={selectedArtistName === allArtistsFilter}
          variant={
            selectedArtistName === allArtistsFilter ? "filled" : "outlined"
          }
          sx={getFilterChipStyles(selectedArtistName === allArtistsFilter)}
        />

        {artists.map((artist) => (
          <Chip
            key={artist.id}
            component="button"
            type="button"
            label={artist.name}
            onClick={() => setSelectedArtistName(artist.name)}
            aria-pressed={selectedArtistName === artist.name}
            variant={selectedArtistName === artist.name ? "filled" : "outlined"}
            sx={getFilterChipStyles(selectedArtistName === artist.name)}
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
