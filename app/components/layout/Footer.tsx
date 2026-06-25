import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" flex md:flex-row flex-col items-center justify-around gap-6 border-t border-white/10 py-10 text-center text-[#A1A1AA]">
      <Link
        href="/"
        className="text-lg font-semibold uppercase tracking-[0.18em] text-white"
      >
        Aguantaguja
      </Link>
      <p>
        &copy; {currentYear} Aguantaguja Tattoo Studio. Todos los derechos
        reservados.
      </p>
      <Link
        href="https://www.instagram.com/aguantaguja_tattoostudio/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram de Aguantaguja"
        className="text-white transition-colors hover:text-[#A1A1AA]"
      >
        <InstagramIcon />
      </Link>
    </footer>
  );
};

export default Footer;
