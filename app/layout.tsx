import type { Metadata } from "next";
import { Geist_Mono, Lexend, Special_Elite } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const specialElite = Special_Elite({
  weight:"400",
  variable: "--font-special-elite",
  subsets: ["latin"],
  
});

export const metadata: Metadata = {
  title: "Aguantaguja tattoo studio",
  description: "Especialistas en blackwork, realismo y tatuajes personalizados",
  icons: {
    icon: "/aguantaguja-favicon.png",
    shortcut: "/aguantaguja-favicon.png",
    apple: "/aguantaguja-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${lexend.variable} ${geistMono.variable}  ${specialElite.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
