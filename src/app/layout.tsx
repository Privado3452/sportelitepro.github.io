import type { Metadata } from "next";
import { Montserrat, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "JEDYX SPORT – Donde la Pasión por el Deporte Vive",
    template: "%s | JEDYX SPORT",
  },
  description:
    "Descubre los mejores artículos deportivos con ofertas increíbles. Ropa, calzado y accesorios de alto rendimiento para tu estilo de vida activo.",
  keywords: ["deportes", "ropa deportiva", "calzado deportivo", "JEDYX SPORT", "tienda deportiva"],
  openGraph: {
    title: "JEDYX SPORT",
    description: "Presenta artículos deportivos destacados con ofertas y novedades.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

/* Script inline que se ejecuta ANTES de que React hidrate — evita el flash de tema incorrecto */
const themeScript = `(function(){
  try{
    var stored=localStorage.getItem('jedyx-theme');
    var prefersDark=window.matchMedia('(prefers-color-scheme:dark)').matches;
    var dark=(stored==='dark')||(stored!=='light'&&prefersDark);
    if(dark)document.documentElement.classList.add('dark');
    /* Escuchar cambios del sistema cuando el usuario no ha fijado tema manualmente */
    window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',function(e){
      if(!localStorage.getItem('jedyx-theme')){
        if(e.matches)document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
      }
    });
  }catch(e){}
})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/img/image.png" type="image/png" />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
