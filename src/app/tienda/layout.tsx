import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tienda",
  description:
    "Explora nuestra colección de productos deportivos premium. Uniformes, calzado y ropa deportiva de alta calidad.",
};

export default function TiendaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
