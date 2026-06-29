import Image from "next/image";
import Link from "next/link";
import React from "react";

const DesktopNav = () => {
  return (
    <ul className="pb-10 hidden items-center justify-evenly md:flex">
      <li>
        <Link
          href="/us"
          className="transition-colors duration-300 hover:text-[#FF9800]"
        >
          Nosotros
        </Link>
      </li>
      <li>
        <Link
          href="/artists"
          className="transition-colors duration-300 hover:text-[#FF9800]"
        >
          Artistas
        </Link>
      </li>
      <li>
        <Link
          href="/events"
          className="transition-colors duration-300 hover:text-[#FF9800]"
        >
          Eventos
        </Link>
      </li>
      <li style={{ position: "relative", top: "28px" }}>
        <Link href="/">
          <Image
            src="/aguantaguja-logo.png"
            alt="Aguantaguja Tattoo Studio"
            width={120}
            height={120}
          />
        </Link>
      </li>
      <li>
        <Link
          href="/gallery"
          className="transition-colors duration-300 hover:text-[#FF9800]"
        >
          Galería
        </Link>
      </li>
      <li>
        <Link
          href="/shop"
          className="transition-colors duration-300 hover:text-[#FF9800]"
        >
          Tienda
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className="transition-colors duration-300 hover:text-[#FF9800]"
        >
          Contacto
        </Link>
      </li>
    </ul>
  );
};

export default DesktopNav;
