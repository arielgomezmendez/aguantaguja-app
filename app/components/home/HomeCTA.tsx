import Link from "next/link";

const HomeCTA = () => {
  return (
    <section
      id="home-cta"
      className="bg-[linear-gradient(rgb(0_0_0/72%),rgb(0_0_0/72%)),url('/artists-photo.png')] bg-cover bg-center px-6 py-16 text-[#F5F5F5]"
    >
      <div className="mx-auto flex min-h-96 max-w-4xl flex-col items-center justify-center text-center">
        <h2 className="font-special text-5xl tracking-wide md:text-7xl">
          ¿Tienes una idea en mente?
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#D4D4D8] md:text-xl">
          Cuéntanos qué quieres representar y encuentra al artista indicado para
          convertir tu idea en una pieza única.
        </p>
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <Link
            href="/artists"
            className="w-full bg-[#FF9800] px-4 py-3 text-center font-bold text-[#050505] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffad33] hover:shadow-lg hover:shadow-[#FF9800]/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF9800] sm:w-auto"
          >
            Conoce a nuestros artistas
          </Link>
          <Link
            href="/services"
            className="w-full border border-white/30 bg-white/10 px-4 py-3 text-center font-bold text-[#F5F5F5] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF9800] hover:bg-[#FF9800] hover:text-[#050505] hover:shadow-lg hover:shadow-[#FF9800]/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF9800] sm:w-auto"
          >
            Ver nuestros servicios
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
