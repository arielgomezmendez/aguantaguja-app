"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DesktopNav from "../home/HeaderComponents/DesktopNav";
import { navItems } from "./navItems";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // usePathname (hook of Next) is used to get the route to set 
  // styles in the active link of the header

  return (
    <header className="text-[#A1A1AA]">
      <nav>
        <div className="flex items-center justify-between px-6 pt-4 md:hidden">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/aguantaguja-logo.png"
              alt="Aguantaguja Tattoo Studio"
              width={82}
              height={82}
            />
          </Link>
          <button
            aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-sm border border-white/15 text-white"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <DesktopNav />

        {isMenuOpen && (
          <ul className="mx-6 mt-4 flex flex-col gap-4 border-t border-white/10 py-6 text-center md:hidden">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block py-1 transition-colors duration-300 hover:text-[#FF9800] ${
                      isActive ? "text-[#FF9800]" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
