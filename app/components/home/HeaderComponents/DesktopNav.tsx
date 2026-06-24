import Image from "next/image";
import Link from "next/link";
import React from "react";

const DesktopNav = () => {
  return (
    <ul className="mt-4 hidden items-center justify-evenly md:flex">
      <li>
        <Link href="/us">Nosotros</Link>
      </li>
      <li>
        <Link href="/artists">Artistas</Link>
      </li>
      <li>
        <Link href="/events">Eventos</Link>
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
        <Link href="/gallery">Galería</Link>
      </li>
      <li>
        <Link href="/shop">Tienda</Link>
      </li>
      <li>
        <Link href="/contacto">Contacto</Link>
      </li>
    </ul>
  );
};

export default DesktopNav;
