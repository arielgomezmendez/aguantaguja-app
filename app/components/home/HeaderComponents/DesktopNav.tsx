"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <ul className="pb-10 hidden items-center justify-evenly md:flex">
      <li>
        <Link
          href="/us"
          aria-current={pathname === "/us" ? "page" : undefined}
          className={`transition-colors duration-300 hover:text-[#FF9800] ${
            pathname === "/us" ? "text-[#FF9800]" : ""
          }`}
        >
          Nosotros
        </Link>
      </li>
      <li>
        <Link
          href="/artists"
          aria-current={pathname === "/artists" ? "page" : undefined}
          className={`transition-colors duration-300 hover:text-[#FF9800] ${
            pathname === "/artists" ? "text-[#FF9800]" : ""
          }`}
        >
          Artistas
        </Link>
      </li>
      <li>
        <Link
          href="/events"
          aria-current={pathname === "/events" ? "page" : undefined}
          className={`transition-colors duration-300 hover:text-[#FF9800] ${
            pathname === "/events" ? "text-[#FF9800]" : ""
          }`}
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
          aria-current={pathname === "/gallery" ? "page" : undefined}
          className={`transition-colors duration-300 hover:text-[#FF9800] ${
            pathname === "/gallery" ? "text-[#FF9800]" : ""
          }`}
        >
          Galería
        </Link>
      </li>
      <li>
        <Link
          href="/shop"
          aria-current={pathname === "/shop" ? "page" : undefined}
          className={`transition-colors duration-300 hover:text-[#FF9800] ${
            pathname === "/shop" ? "text-[#FF9800]" : ""
          }`}
        >
          Tienda
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          aria-current={pathname === "/contact" ? "page" : undefined}
          className={`transition-colors duration-300 hover:text-[#FF9800] ${
            pathname === "/contact" ? "text-[#FF9800]" : ""
          }`}
        >
          Contacto
        </Link>
      </li>
    </ul>
  );
};

export default DesktopNav;
