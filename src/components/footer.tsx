import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/",                           label: "Inicio" },
  { href: "/tienda",                     label: "Tienda" },
  { href: "/sobre-nosotros",             label: "Sobre Nosotros" },
  { href: "/sobre-nosotros#contactanos", label: "Contáctanos" },
];

const socials = [
  {
    href: "https://www.facebook.com/profile.php?id=61574226864185",
    label: "Facebook",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com/sport_elite_0ficial",
    label: "Instagram",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/SportEliteOfc",
    label: "X",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://wa.link/eej87k",
    label: "WhatsApp",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer
      className="relative text-white overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020810 0%, #010508 100%)" }}
    >
      {/* Top neon line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.3), rgba(168,85,247,0.3), transparent)" }}
      />

      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-bluegreen-400/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-400/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 relative z-10">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
                <Image src="/img/image.png" alt="JEDYX SPORT" fill className="object-contain" />
              </div>
              <span className="text-lg font-extrabold font-[family-name:var(--font-heading)]">
                <span className="text-sky-50">JEDYX </span>
                <span className="text-orange-400">SPORT</span>
              </span>
            </Link>
            <p className="text-sm text-sky-200/40 leading-relaxed max-w-xs">
              Tu destino premium para equipamiento deportivo de última
              generación. Calidad, innovación y pasión en cada producto.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-sky-200/30 mb-5">
              Navegación
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sky-200/50 hover:text-bluegreen-400 transition-colors duration-200 hover:translate-x-1 inline-block transition-transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-sky-200/30 mb-5">
              Síguenos
            </h3>
            <div className="flex gap-3 flex-wrap">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group w-10 h-10 flex items-center justify-center rounded-xl
                             border border-sky-200/10 bg-sky-200/4 text-sky-200/60
                             hover:border-orange-400/50 hover:bg-orange-400/10 hover:text-white
                             hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-400/20
                             transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{ background: "linear-gradient(90deg, transparent, rgba(33,158,188,0.15), transparent)" }}
        />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-sky-200/25">
            © 2026 JEDYX SPORT. Todos los derechos reservados.
          </p>
          <p className="text-xs text-sky-200/25">
            Hecho con 💪 para atletas apasionados
          </p>
        </div>
      </div>
    </footer>
  );
}
