import Hero from "./components/home/Hero";
import Artists from "./components/home/Artists";
import Gallery from "./components/home/Gallery";
import Events from "./components/home/Events";
import VisitUs from "./components/home/VisitUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Artists/>
      <Gallery/>
      <Events/>
      <VisitUs/>
    </>
  );
}
