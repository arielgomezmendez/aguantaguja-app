import Link from 'next/link'

const Header = () => {
  return (
    <header className="text-[#A1A1AA]">
      <nav aria-label="Navegación principal">
        <ul className="flex items-center justify-evenly mt-4">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/artists">Artistas</Link>
          </li>
          <li>
            <Link href="/gallery">Galeria</Link>
          </li>
          <li>
            <Link href="/reserva">Reserva</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
