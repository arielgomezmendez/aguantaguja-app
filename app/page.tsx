import Image from "next/image";
import Hero from "./components/home/Hero";
import Artists from "./components/home/Artists";
import Gallery from "./components/home/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <Artists/>
      <Gallery/>
    </>
  );
}
