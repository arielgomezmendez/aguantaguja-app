import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="text-[#A1A1AA]">
      <nav aria-label="Navegación principal">
        <ul className="flex items-center justify-evenly mt-4">
          <li>
            <Link href="/us">Nosotros</Link>
          </li>
          <li>
            <Link href="/artists">Artistas</Link>
          </li>
          <li>
            <Link href="/events">Eventos</Link>
          </li>
          <li style={{position:"relative", top:"28px"}}>
            <Link href="/" >
              <Image
                src="/aguantaguja-logo.png"
                alt="Aguantaguja Tattoo Studio"
                width={120}
                height={120}
              />
            </Link>
          </li>
          <li >
            <Link href="/gallery">Galería</Link>
          </li>
          <li>
            <Link href="/shop">Tienda</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
