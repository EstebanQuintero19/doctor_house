import type { Metadata } from "next";
import { Archivo, Courier_Prime, Permanent_Marker } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600", "700"] });
const typewriter = Courier_Prime({ subsets: ["latin"], variable: "--font-type", weight: ["400", "700"] });
const marker = Permanent_Marker({ subsets: ["latin"], variable: "--font-marker", weight: "400" });

export const metadata: Metadata = {
  title: "House M.D. — Diagnóstico diferencial",
  description: "Personajes, momentos y frases de House M.D., escritos en la pizarra de Princeton-Plainsboro.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${archivo.variable} ${marker.variable} ${typewriter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
