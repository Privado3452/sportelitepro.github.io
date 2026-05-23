"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════
   PARTICLE SPHERE — Canvas 3D sin Three.js
   ═══════════════════════════════════════════════════════════ */
function ParticleSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rotRef   = useRef({ x: 0.3, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SIZE = 460;
    canvas.width  = SIZE;
    canvas.height = SIZE;

    const NUM = 180;
    const R   = 160;
    const phi = Math.PI * (3 - Math.sqrt(5));

    const particles = Array.from({ length: NUM }, (_, i) => {
      const y  = 1 - (i / (NUM - 1)) * 2;
      const r  = Math.sqrt(Math.max(0, 1 - y * y));
      const th = phi * i;
      return { ox: Math.cos(th) * r, oy: y, oz: Math.sin(th) * r };
    });

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left  - SIZE / 2) / SIZE;
      mouseRef.current.y = (e.clientY - rect.top   - SIZE / 2) / SIZE;
    };
    window.addEventListener("mousemove", onMouse);

    let animId: number;
    let t = 0;

    const draw = () => {
      t += 0.006;
      const cx = SIZE / 2, cy = SIZE / 2;

      rotRef.current.y += (mouseRef.current.x * 0.6 - rotRef.current.y) * 0.04 + 0.009;
      rotRef.current.x += (mouseRef.current.y * 0.35 - rotRef.current.x) * 0.04;

      const cx_ = Math.cos(rotRef.current.x), sx_ = Math.sin(rotRef.current.x);
      const cy_ = Math.cos(rotRef.current.y), sy_ = Math.sin(rotRef.current.y);

      ctx.clearRect(0, 0, SIZE, SIZE);

      const pts = particles.map((p) => {
        let x = p.ox * cy_ + p.oz * sy_;
        let z = -p.ox * sy_ + p.oz * cy_;
        let y = p.oy * cx_ - z * sx_;
        z = p.oy * sx_ + z * cx_;
        const sc = R * (0.75 + 0.25 / (1.4 - z * 0.5));
        return {
          sx: cx + x * sc,
          sy: cy + y * sc,
          z,
          size: Math.max(0.5, 3 * ((z + 1) / 2)),
          alpha: Math.max(0, (z + 1) / 2),
        };
      });

      pts.sort((a, b) => a.z - b.z);

      // Connections
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].sx - pts[j].sx;
          const dy = pts[i].sy - pts[j].sy;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 38) {
            ctx.beginPath();
            ctx.moveTo(pts[i].sx, pts[i].sy);
            ctx.lineTo(pts[j].sx, pts[j].sy);
            ctx.strokeStyle = `rgba(33, 158, 188, ${(1 - d / 38) * Math.min(pts[i].alpha, pts[j].alpha) * 0.28})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Particles
      pts.forEach((pt) => {
        const hue  = ((t * 25 + pt.z * 80 + 185) % 360);
        const sat  = 80 + pt.alpha * 15;
        const lum  = 55 + pt.alpha * 15;
        const grad = ctx.createRadialGradient(pt.sx, pt.sy, 0, pt.sx, pt.sy, pt.size * 2);
        grad.addColorStop(0, `hsla(${hue}, ${sat}%, ${lum}%, ${pt.alpha * 0.95})`);
        grad.addColorStop(1, `hsla(${hue}, ${sat}%, ${lum}%, 0)`);
        ctx.beginPath();
        ctx.arc(pt.sx, pt.sy, pt.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{ width: "min(460px, 100%)", height: "auto", aspectRatio: "1/1" }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════
   SCROLL REVEAL HOOK
   ═══════════════════════════════════════════════════════════ */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ═══════════════════════════════════════════════════════════
   FEATURE CARD — Dark Glassmorphism + 3D Tilt
   ═══════════════════════════════════════════════════════════ */
function FeatureCard({
  icon, title, description, delay = 0, accent = "cyan",
}: {
  icon: string; title: string; description: string; delay?: number; accent?: "cyan" | "purple" | "orange";
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { ref: scrollRef, visible } = useReveal();

  const accentColors: Record<string, string> = {
    cyan:   "rgba(0, 212, 255, 0.18)",
    purple: "rgba(168, 85, 247, 0.18)",
    orange: "rgba(251, 133, 0, 0.18)",
  };
  const accentBorder: Record<string, string> = {
    cyan:   "rgba(0, 212, 255, 0.35)",
    purple: "rgba(168, 85, 247, 0.35)",
    orange: "rgba(251, 133, 0, 0.35)",
  };

  const onMove = (e: React.MouseEvent) => {
    const c = cardRef.current;
    if (!c) return;
    const r = c.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    c.style.setProperty("--gx", `${x}px`);
    c.style.setProperty("--gy", `${y}px`);
    const tx = ((y - r.height / 2) / r.height) * 9;
    const ty = ((x - r.width  / 2) / r.width) * -9;
    c.style.transform = `perspective(900px) rotateX(${tx}deg) rotateY(${ty}deg) translateZ(8px)`;
  };
  const onLeave = () => { if (cardRef.current) cardRef.current.style.transform = ""; };

  return (
    <div
      ref={scrollRef}
      className="reveal"
      style={{ transitionDelay: `${delay}ms`, ...(visible ? { opacity: 1, transform: "translateY(0)" } : {}) }}
    >
      <div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="group relative glass-card rounded-2xl p-6 overflow-hidden cursor-default h-full"
        style={{
          transition: "transform 0.12s ease",
          border: `1px solid ${accentBorder[accent]}`,
        }}
      >
        {/* Cursor glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{
            background: `radial-gradient(380px circle at var(--gx, 50%) var(--gy, 50%), ${accentColors[accent]}, transparent 65%)`,
          }}
        />
        {/* Top shimmer line */}
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${accentBorder[accent]}, transparent)` }}
        />

        <div className="relative z-10">
          <div
            className="w-12 h-12 mb-5 rounded-xl flex items-center justify-center border transition-all duration-500 group-hover:scale-110"
            style={{
              background: accentColors[accent],
              borderColor: accentBorder[accent],
            }}
          >
            <Image
              src={icon}
              alt={title}
              width={22}
              height={22}
              className="object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <h3 className="text-sm font-bold text-slate-700 dark:text-sky-100 group-hover:text-prussian-600 dark:group-hover:text-white transition-colors duration-300 font-[family-name:var(--font-heading)]">
            {title}
          </h3>
          <p className="mt-2 text-xs text-slate-500 dark:text-sky-200/40 leading-relaxed group-hover:text-slate-600 dark:group-hover:text-sky-200/70 transition-colors duration-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   TESTIMONIAL CARD
   ═══════════════════════════════════════════════════════════ */
function TestimonialCard({
  quote, name, role, image,
}: { quote: string; name: string; role: string; image: string; }) {
  return (
    <div className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]
                    glass-card rounded-2xl p-6 border border-slate-200 dark:border-sky-200/10
                    hover:border-bluegreen-400/30 hover:-translate-y-1 hover:shadow-2xl
                    hover:shadow-bluegreen-400/10 transition-all duration-400 relative
                    text-left flex flex-col justify-between select-none">
      <div className="absolute top-3 right-5 text-bluegreen-400/10 text-7xl font-serif pointer-events-none leading-none">
        &ldquo;
      </div>
      <div>
        <div className="flex gap-1 text-yellow-300 mb-4">
          {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
        </div>
        <p className="text-sm text-slate-600 dark:text-sky-200/60 italic leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
      <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-200 dark:border-white/8">
        <Image
          src={image}
          alt={name}
          width={44}
          height={44}
          className="rounded-full object-cover border-2 border-bluegreen-400/50"
        />
        <div>
          <h4 className="text-sm font-bold text-slate-700 dark:text-sky-100">{name}</h4>
          <p className="text-xs text-slate-500 dark:text-sky-200/40">{role}</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   TESTIMONIALS CAROUSEL
   ═══════════════════════════════════════════════════════════ */
function TestimonialsCarousel() {
  const testimonials = [
    {
      quote: "Los productos de JEDYX SPORT me han ayudado a llevar mi entrenamiento al siguiente nivel. ¡Calidad increíble!",
      name: "Yair Gómez",
      role: "Cliente Satisfecho",
      image: "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/1a05eb91-0316-4769-9263-7643881eb457.jpeg?format=webp",
    },
    {
      quote: "La ropa deportiva de JEDYX SPORT es perfecta para entrenar y lucir genial al mismo tiempo.",
      name: "Juan Ramírez",
      role: "Cliente Satisfecho",
      image: "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/26f5f612-b31c-4f2c-9249-58e408f1a009.jpeg?format=webp",
    },
    {
      quote: "Los suplementos de JEDYX SPORT me han dado la energía que necesitaba para mis rutinas.",
      name: "Mariana",
      role: "Cliente Satisfecha",
      image: "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/c14a3125-b2c8-4b68-89ba-b47ed701274d.jpeg?format=webp",
    },
    {
      quote: "La atención al cliente es inmejorable. Resolvieron todas mis dudas de inmediato y el pedido llegó en tiempo récord. ¡100% recomendado!",
      name: "Camila Vega",
      role: "Cliente Satisfecha",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      quote: "Excelente relación calidad-precio. Las zapatillas son comodísimas y los uniformes transpiran súper bien. Volveré a comprar seguro.",
      name: "Alejandro Ruiz",
      role: "Cliente Satisfecho",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  ];

  const trackRef  = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const { ref: sectionRef, visible } = useReveal(0.1);

  const getVisible = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const maxIdx = Math.max(0, testimonials.length - getVisible());

  const updateCarousel = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track || !track.children[0]) return;
    const card = track.children[0] as HTMLElement;
    track.style.transform = `translateX(-${i * (card.offsetWidth + 24)}px)`;
  }, []);

  useEffect(() => { updateCarousel(idx); }, [idx, updateCarousel]);

  useEffect(() => {
    const interval = setInterval(() => setIdx(p => (p < maxIdx ? p + 1 : 0)), 6000);
    return () => clearInterval(interval);
  }, [maxIdx]);

  useEffect(() => {
    const handleResize = () => updateCarousel(idx);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [idx, updateCarousel]);

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden section-testimonials">
      {/* BG decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-bluegreen-400/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={sectionRef} className={`max-w-7xl mx-auto px-6 lg:px-8 text-center reveal ${visible ? "visible" : ""}`}>
        <p className="text-xs font-bold text-bluegreen-400 uppercase tracking-[0.25em] mb-3">
          Testimonios
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-prussian-600 dark:text-sky-50 font-[family-name:var(--font-heading)]">
          Lo que dicen nuestros{" "}
          <span className="gradient-text-neon">clientes</span>
        </h2>
        <p className="mt-3 text-sm text-prussian-600/60 dark:text-sky-200/50 max-w-xl mx-auto">
          Descubre las experiencias reales de atletas y deportistas que confían en JEDYX SPORT.
        </p>

        <div className="relative mt-14 mx-auto max-w-5xl overflow-hidden px-2">
          <div ref={trackRef} className="flex transition-transform duration-500 ease-in-out gap-6">
            {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
          </div>

          <button
            onClick={() => setIdx(p => (p > 0 ? p - 1 : maxIdx))}
            className="absolute top-1/2 left-0 -translate-y-1/2 glass-card text-prussian-700 dark:text-sky-100 rounded-full w-10 h-10
                       flex items-center justify-center transition-all border border-bluegreen-400/20
                       hover:border-orange-400/60 hover:text-orange-400 shadow-lg z-10 cursor-pointer"
          >
            ❮
          </button>
          <button
            onClick={() => setIdx(p => (p < maxIdx ? p + 1 : 0))}
            className="absolute top-1/2 right-0 -translate-y-1/2 glass-card text-prussian-700 dark:text-sky-100 rounded-full w-10 h-10
                       flex items-center justify-center transition-all border border-bluegreen-400/20
                       hover:border-orange-400/60 hover:text-orange-400 shadow-lg z-10 cursor-pointer"
          >
            ❯
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all duration-300 border-none cursor-pointer
                ${i === idx ? "bg-orange-400 w-8 shadow-lg shadow-orange-400/40" : "bg-sky-200/20 w-2 hover:bg-bluegreen-400/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAGNETIC CTA BUTTON
   ═══════════════════════════════════════════════════════════ */
function MagneticButton({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const b = btnRef.current;
    if (!b) return;
    const r = b.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width  / 2) * 0.25;
    const y = (e.clientY - r.top  - r.height / 2) * 0.25;
    b.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => { if (btnRef.current) btnRef.current.style.transform = ""; };

  return (
    <Link
      ref={btnRef}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`btn-glow group relative px-8 py-4 text-sm font-bold text-white rounded-2xl
                 bg-gradient-to-r from-orange-400 to-orange-500
                 shadow-lg shadow-orange-400/30
                 hover:shadow-2xl hover:shadow-orange-400/50
                 transition-all duration-200 inline-flex items-center gap-2 w-fit ${className}`}
    >
      {children}
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN HOME PAGE
   ═══════════════════════════════════════════════════════════ */
export default function HomePage() {
  const heroRef   = useRef<HTMLElement>(null);
  const mouse     = useRef({ x: 0, y: 0 });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  /* Mouse parallax for hero */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width  / 2) / r.width;
      const y = (e.clientY - r.top  - r.height / 2) / r.height;
      mouse.current = { x, y };
      setParallax({ x, y });
    };
    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  /* Scroll reveal observer */
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const features = [
    { icon: "/img/innovacion.png", title: "Innovación Deportiva",     description: "Productos de última generación para mejorar tu rendimiento al máximo.", accent: "cyan"   as const },
    { icon: "/img/rendimiento.png", title: "Rendimiento Rápido",      description: "Equipamiento diseñado para mantenerte siempre en movimiento.",           accent: "purple" as const },
    { icon: "/img/salud.png",       title: "Salud y Bienestar",       description: "Artículos que promueven un estilo de vida saludable y activo.",            accent: "cyan"   as const },
    { icon: "/img/deporte.png",     title: "Pasión por el Deporte",   description: "Todo lo que necesitas para vivir tu pasión deportiva al límite.",         accent: "orange" as const },
    { icon: "/img/seguridad.png",   title: "Seguridad Garantizada",   description: "Productos seguros y confiables para tu tranquilidad y la de tu familia.", accent: "purple" as const },
    { icon: "/img/calidad.png",     title: "Calidad Asegurada",       description: "Solo los mejores materiales y estándares para nuestros clientes.",        accent: "orange" as const },
  ];

  const { ref: featRef, visible: featVisible } = useReveal(0.05);
  const { ref: prodRef, visible: prodVisible } = useReveal(0.1);
  const { ref: ctaRef,  visible: ctaVisible  } = useReveal(0.15);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden pt-20 grid-bg bg-hero"
      >
        {/* Parallax orbs */}
        <div
          className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
            transform: `translate(${parallax.x * 30}px, ${parallax.y * 20}px)`,
            transition: "transform 0.15s ease",
          }}
        />
        <div
          className="absolute bottom-20 left-10 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
            transform: `translate(${parallax.x * -20}px, ${parallax.y * -15}px)`,
            transition: "transform 0.15s ease",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none opacity-30"
          style={{
            background: "conic-gradient(from 0deg, rgba(33,158,188,0.05), rgba(168,85,247,0.05), rgba(251,133,0,0.03), rgba(33,158,188,0.05))",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text Column */}
            <div
              className="flex flex-col gap-8"
              style={{
                transform: `translate(${parallax.x * -8}px, ${parallax.y * -5}px)`,
                transition: "transform 0.15s ease",
              }}
            >
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-bluegreen-400/25 self-start"
                style={{ animation: "fadeInUp 0.8s ease-out forwards" }}
              >
                <span className="w-2 h-2 rounded-full bg-bluegreen-400 animate-pulse" />
                <span className="text-xs font-semibold text-bluegreen-400 uppercase tracking-widest">
                  Colección 2026
                </span>
              </div>

              {/* Heading */}
              <div style={{ animation: "fadeInUp 0.8s 0.1s ease-out both" }}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] font-[family-name:var(--font-heading)]">
                  <span className="text-prussian-600 dark:text-sky-50">Bienvenido a</span>
                  <br />
                  <span className="gradient-text-hero">JEDYX SPORT</span>
                </h1>
              </div>

              <p
                className="text-base text-prussian-600/60 dark:text-sky-200/55 max-w-md leading-relaxed"
                style={{ animation: "fadeInUp 0.8s 0.2s ease-out both" }}
              >
                Descubre los mejores artículos deportivos con ofertas increíbles
                que te mantendrán en movimiento hacia tus metas.
              </p>

              {/* CTAs */}
              <div
                className="flex flex-col sm:flex-row items-start gap-4"
                style={{ animation: "fadeInUp 0.8s 0.3s ease-out both" }}
              >
                <MagneticButton href="/tienda">
                  Explorar Ahora
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </MagneticButton>
                <Link
                  href="/sobre-nosotros"
                  className="px-8 py-4 text-sm font-semibold text-prussian-600/70 dark:text-sky-200 rounded-2xl border border-prussian-600/15 dark:border-sky-200/15
                             hover:border-bluegreen-400/50 hover:text-bluegreen-400 hover:bg-bluegreen-400/5
                             transition-all duration-300"
                >
                  Descubre Más
                </Link>
              </div>

              {/* Social links */}
              <div
                className="flex gap-3"
                style={{ animation: "fadeInUp 0.8s 0.4s ease-out both" }}
              >
                {[
                  {
                    href: "https://www.facebook.com/profile.php?id=61574226864185", label: "Facebook",
                    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>,
                  },
                  {
                    href: "https://instagram.com/sport_elite_0ficial", label: "Instagram",
                    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>,
                  },
                  {
                    href: "https://x.com/SportEliteOfc", label: "X",
                    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl glass-card border border-sky-200/10
                               text-prussian-600/50 dark:text-sky-200/60
                               hover:border-bluegreen-400/50 hover:bg-bluegreen-400/10 hover:text-bluegreen-400 hover:-translate-y-1
                               transition-all duration-300 group"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* 3D Sphere Column */}
            <div
              className="relative flex items-center justify-center"
              style={{
                transform: `perspective(1200px) rotateY(${parallax.x * 12}deg) rotateX(${parallax.y * -8}deg)`,
                transition: "transform 0.15s ease",
              }}
            >
              {/* Glow rings behind sphere */}
              <div className="absolute w-[380px] h-[380px] rounded-full border border-bluegreen-400/10 animate-rotate-slow pointer-events-none" />
              <div className="absolute w-[320px] h-[320px] rounded-full border border-orange-400/8" style={{ animation: "rotate-slow 15s linear infinite reverse" }} />
              <div
                className="absolute w-[460px] h-[460px] rounded-full blur-2xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, rgba(168,85,247,0.06) 50%, transparent 70%)" }}
              />

              <ParticleSphere />

              {/* Stats floating cards */}
              <div
                className="absolute bottom-4 left-0 glass-card neon-border rounded-2xl px-5 py-3 text-center"
                style={{ animation: "float 5s 0.5s ease-in-out infinite" }}
              >
                <p className="text-xl font-extrabold gradient-text-neon">500+</p>
                <p className="text-xs text-prussian-600/60 dark:text-sky-200/50 mt-0.5">Productos</p>
              </div>
              <div
                className="absolute top-8 right-0 glass-card neon-border rounded-2xl px-5 py-3 text-center"
                style={{ animation: "float 5s 1.5s ease-in-out infinite" }}
              >
                <p className="text-xl font-extrabold text-orange-400">98%</p>
                <p className="text-xs text-prussian-600/60 dark:text-sky-200/50 mt-0.5">Satisfacción</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
             style={{ background: "linear-gradient(to bottom, transparent, var(--bg-page))" }} />
      </section>

      {/* ── FEATURES BENTO GRID ─────────────────────────── */}
      <section className="py-24 md:py-32 section-features">
        <div ref={featRef} className={`max-w-7xl mx-auto px-6 lg:px-8 reveal ${featVisible ? "visible" : ""}`}>
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-bluegreen-400 uppercase tracking-[0.25em] mb-3">
              ¿Por qué elegirnos?
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-prussian-600 dark:text-sky-50 font-[family-name:var(--font-heading)]">
              Nuestras{" "}
              <span className="gradient-text-neon">Ventajas</span>
            </h2>
          </div>

          {/* 2×3 uniform grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={f.title}>
                <FeatureCard {...f} delay={i * 100} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTOS DESTACADOS ───────────────────────── */}
      <section className="py-24 md:py-32 relative overflow-hidden section-products">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

        <div ref={prodRef} className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 reveal ${prodVisible ? "visible" : ""}`}>
          <div className="flex flex-col lg:flex-row items-start justify-between gap-16">

            {/* Text */}
            <div className="flex-1">
              <p className="text-xs font-bold text-bluegreen-400 uppercase tracking-[0.25em] mb-4">
                Calidad y Rendimiento
              </p>
              <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-prussian-600 dark:text-sky-50 mb-8 leading-tight font-[family-name:var(--font-heading)]">
                PRODUCTOS
                <br />
                <span className="gradient-text-hero">DESTACADOS</span>
              </h2>
              <p className="text-base text-prussian-600/60 dark:text-sky-200/50 mb-14 leading-relaxed max-w-lg">
                Nuestros productos más populares están diseñados para ofrecerte
                la mejor experiencia en tu deporte favorito.
              </p>

              <div className="flex flex-wrap gap-10 md:gap-16 mb-12">
                {[
                  {
                    color: "rgba(33,158,188,0.15)",
                    border: "rgba(33,158,188,0.3)",
                    icon: (
                      <svg className="w-5 h-5 text-bluegreen-400" fill="currentColor" viewBox="0 0 640 512">
                        <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z" />
                      </svg>
                    ),
                    label: "Ropa deportiva de alto rendimiento para máxima comodidad.",
                  },
                  {
                    color: "rgba(251,133,0,0.15)",
                    border: "rgba(251,133,0,0.3)",
                    icon: (
                      <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 640 512">
                        <path d="M416 0C352.3 0 256 32 256 32V160c48 0 76 16 104 32s56 32 104 32c56.4 0 176-16 176-96S512 0 416 0zM128 96c0 35.3 28.7 64 64 64h32V32H192c-35.3 0-64 28.7-64 64zM288 512c96 0 224-48 224-128s-119.6-96-176-96c-48 0-76 16-104 32s-56 32-104 32V480s96.3 32 160 32zM0 416c0 35.3 28.7 64 64 64H96V352H64c-35.3 0-64 28.7-64 64z" />
                      </svg>
                    ),
                    label: "Calzado deportivo que ofrece soporte y durabilidad extrema.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 max-w-xs">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border"
                      style={{ background: item.color, borderColor: item.border }}
                    >
                      {item.icon}
                    </div>
                    <p className="text-xs font-semibold uppercase text-prussian-600/60 dark:text-sky-200/60 leading-snug mt-2">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <MagneticButton href="/tienda" className="self-start">
                Ver Más Productos
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </MagneticButton>
            </div>

            {/* Image with 3D tilt */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative group cursor-default">
                <div
                  className="absolute -inset-6 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, rgba(168,85,247,0.10) 60%, transparent 80%)" }}
                />
                <div className="relative glass-card neon-border rounded-3xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="https://cdn.wegic.ai/assets/onepage/ai/image/b6c338eb-4d2b-4238-8d70-57e8a81b3a7d.jpeg"
                    alt="Productos deportivos destacados"
                    width={380}
                    height={560}
                    className="object-cover"
                  />
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-prussian-900/60 via-transparent to-transparent" />
                  {/* Bottom badge */}
                  <div className="absolute bottom-4 left-4 right-4 glass rounded-xl px-4 py-2.5 border border-white/8">
                    <p className="text-xs font-bold text-prussian-700 dark:text-sky-100">Equipamiento Pro 2026</p>
                    <p className="text-xs text-prussian-600/50 dark:text-sky-200/50 mt-0.5">Alta performance garantizada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────── */}
      <section className="py-16 sm:py-24 section-features">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-28">
          <div
            ref={ctaRef}
            className={`reveal ${ctaVisible ? "visible" : ""} relative rounded-[2.5rem] overflow-hidden min-h-[380px]`}
            style={{ background: "linear-gradient(135deg, #023047 0%, #012133 100%)" }}
          >
            {/* BG image */}
            <div className="absolute inset-0">
              <Image
                src="https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/496d5ed1-4b0b-4a0e-bfbb-0ac7ea08b252.jpeg?format=webp"
                alt="Fondo JEDYX SPORT"
                fill
                className="object-cover opacity-20"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(2,48,71,0.92) 0%, rgba(1,33,51,0.80) 100%)" }}
              />
            </div>

            {/* Neon border top */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent)" }} />
            {/* Glow orb */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-bluegreen-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-8 sm:px-12 lg:px-20 py-14 gap-10">
              <div className="max-w-xl space-y-5">
                <div className="flex gap-1 text-yellow-300 text-sm">★★★★★</div>
                <p className="text-base font-medium leading-relaxed text-sky-100/80">
                  &ldquo;JEDYX SPORT ha transformado mi experiencia deportiva. Sus
                  productos son de excelente calidad y siempre encuentro lo que
                  necesito para mejorar.&rdquo;
                </p>
                <div>
                  <p className="font-bold text-sky-50">Carlos Martínez</p>
                  <p className="text-sky-200/40 text-xs">Entrenador Personal</p>
                </div>
                <MagneticButton href="/tienda" className="self-start">
                  Explorar Ahora
                </MagneticButton>
              </div>

              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-bluegreen-400/10 blur-2xl rounded-full scale-150 pointer-events-none" />
                <Image
                  src="/img/image.png"
                  alt="Logo JEDYX SPORT"
                  width={200}
                  height={200}
                  className="relative object-contain opacity-90 drop-shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────── */}
      <TestimonialsCarousel />
    </>
  );
}
