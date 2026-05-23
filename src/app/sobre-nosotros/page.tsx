"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ═══════════════════════════════════════════════════════════
   CONTACT FORM
   ═══════════════════════════════════════════════════════════ */
function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border bg-[var(--bg-card)] text-[var(--text-1)]
                     placeholder:text-[var(--text-3)] text-sm
                     focus:outline-none focus:border-bluegreen-400/60 focus:bg-bluegreen-400/5
                     transition-all duration-300 border-[var(--border-card)]`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-xs font-semibold text-[var(--text-2)] mb-2 uppercase tracking-wider">
          Nombre
        </label>
        <input id="name" name="name" type="text" required value={formData.name}
          onChange={handleChange} placeholder="Tu nombre completo" className={inputClass} />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-[var(--text-2)] mb-2 uppercase tracking-wider">
          Correo Electrónico
        </label>
        <input id="email" name="email" type="email" required value={formData.email}
          onChange={handleChange} placeholder="correo@ejemplo.com" className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-[var(--text-2)] mb-2 uppercase tracking-wider">
          Mensaje
        </label>
        <textarea id="message" name="message" required rows={5} value={formData.message}
          onChange={handleChange} placeholder="¿En qué podemos ayudarte?"
          className={`${inputClass} resize-none`} />
      </div>

      <button
        type="submit"
        className="btn-glow w-full py-3.5 px-6 text-sm font-bold text-white rounded-xl
                   bg-gradient-to-r from-orange-400 to-orange-500
                   hover:from-orange-500 hover:to-orange-600
                   shadow-lg shadow-orange-400/20 hover:shadow-xl hover:shadow-orange-400/35
                   hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer border-none"
      >
        Enviar Mensaje
      </button>

      {submitted && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-bluegreen-400/10 border border-bluegreen-400/25">
          <svg className="w-5 h-5 text-bluegreen-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm font-medium text-bluegreen-400">
            ¡Mensaje enviado con éxito! Te contactaremos pronto.
          </p>
        </div>
      )}
    </form>
  );
}

/* ═══════════════════════════════════════════════════════════
   VALUE CARD — Dark Glassmorphism
   ═══════════════════════════════════════════════════════════ */
function ValueCard({ icon, title, description, accent = "cyan", className = "" }: {
  icon: string; title: string; description: string; accent?: "cyan" | "purple" | "orange"; className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const accentMap: Record<string, { bg: string; border: string }> = {
    cyan:   { bg: "rgba(0,212,255,0.15)",   border: "rgba(0,212,255,0.3)"   },
    purple: { bg: "rgba(168,85,247,0.15)",  border: "rgba(168,85,247,0.3)"  },
    orange: { bg: "rgba(251,133,0,0.15)",   border: "rgba(251,133,0,0.3)"   },
  };
  const a = accentMap[accent];

  const onMove = (e: React.MouseEvent) => {
    const c = cardRef.current;
    if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty("--gx", `${e.clientX - r.left}px`);
    c.style.setProperty("--gy", `${e.clientY - r.top}px`);
    const tx = ((e.clientY - r.top  - r.height / 2) / r.height) * 7;
    const ty = ((e.clientX - r.left - r.width  / 2) / r.width ) * -7;
    c.style.transform = `perspective(900px) rotateX(${tx}deg) rotateY(${ty}deg) translateZ(6px)`;
  };
  const onLeave = () => { if (cardRef.current) cardRef.current.style.transform = ""; };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative glass-card rounded-3xl p-8 overflow-hidden cursor-default h-full ${className}`}
      style={{ border: `1px solid ${a.border}`, transition: "transform 0.12s ease" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{ background: `radial-gradient(350px circle at var(--gx,50%) var(--gy,50%), ${a.bg}, transparent 65%)` }}
      />
      <div className="absolute top-0 left-0 right-0 h-px opacity-60 group-hover:opacity-100 transition-opacity"
           style={{ background: `linear-gradient(90deg, transparent, ${a.border}, transparent)` }} />

      <div className="relative z-10 flex flex-col items-center text-center gap-5">
        <div
          className="w-16 h-16 flex items-center justify-center rounded-2xl border transition-all duration-500 group-hover:scale-110"
          style={{ background: a.bg, borderColor: a.border }}
        >
          <Image src={icon} alt={title} width={30} height={30}
            className="object-contain brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500" />
        </div>
        <h3 className="text-base font-bold text-slate-700 dark:text-sky-100 group-hover:text-prussian-600 dark:group-hover:text-white transition-colors duration-300 font-[family-name:var(--font-heading)]">
          {title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-sky-200/45 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-sky-200/70 transition-colors duration-400">
          {description}
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SOBRE NOSOTROS PAGE
   ═══════════════════════════════════════════════════════════ */
export default function SobreNosotrosPage() {
  const values = [
    { icon: "/img/calidad.png",     title: "Calidad Premium",       description: "Seleccionamos cada producto con los más altos estándares para garantizar tu satisfacción.", accent: "cyan"   as const },
    { icon: "/img/innovacion.png",  title: "Innovación Constante",  description: "Buscamos siempre las últimas tendencias y tecnologías del mundo deportivo.",                 accent: "purple" as const },
    { icon: "/img/deporte.png",     title: "Pasión Deportiva",      description: "El deporte es nuestro motor. Vivimos y respiramos cada disciplina que ofrecemos.",           accent: "orange" as const },
    { icon: "/img/seguridad.png",   title: "Compromiso Total",      description: "Nuestro compromiso con nuestros clientes va más allá de la venta. Estamos contigo siempre.", accent: "cyan"   as const },
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
  ];

  const { ref: misionRef, visible: misionVisible } = useReveal();
  const { ref: valoresRef, visible: valoresVisible } = useReveal(0.05);
  const { ref: contactRef, visible: contactVisible } = useReveal(0.05);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-28 pb-20 grid-bg bg-hero">
        <div className="absolute top-20 right-0 w-96 h-96 bg-bluegreen-400/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-bluegreen-400/25 mb-8"
            style={{ animation: "fadeInUp 0.7s ease-out both" }}
          >
            <span className="w-2 h-2 rounded-full bg-bluegreen-400 animate-pulse" />
            <span className="text-xs font-bold text-bluegreen-400 uppercase tracking-widest">
              Nuestra Historia
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] font-[family-name:var(--font-heading)] mb-6"
            style={{ animation: "fadeInUp 0.7s 0.1s ease-out both" }}
          >
            <span className="gradient-text-hero">Sobre Nosotros</span>
          </h1>

          <p
            className="text-base md:text-lg text-prussian-600/60 dark:text-sky-200/55 max-w-2xl mx-auto leading-relaxed"
            style={{ animation: "fadeInUp 0.7s 0.2s ease-out both" }}
          >
            En <span className="font-bold text-prussian-700 dark:text-sky-100">JEDYX SPORT</span>, creemos que
            el deporte transforma vidas. Ofrecemos equipamiento premium para que
            alcances tu máximo potencial, con pasión, innovación y compromiso.
          </p>

          <div
            className="flex items-center justify-center gap-3 mt-10"
            style={{ animation: "fadeInUp 0.7s 0.35s ease-out both" }}
          >
            <div className="w-16 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(0,212,255,0.5))" }} />
            <div className="w-3 h-3 rounded-full bg-orange-400 shadow-lg shadow-orange-400/50" />
            <div className="w-16 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(0,212,255,0.5))" }} />
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ──────────────────────────────── */}
      <section className="py-20 md:py-28 relative overflow-hidden section-features">
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-400/4 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-bluegreen-400/4 rounded-full blur-3xl pointer-events-none" />

        <div ref={misionRef} className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 reveal ${misionVisible ? "visible" : ""}`}>
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-bluegreen-400 uppercase tracking-[0.25em] mb-3">
              Nuestra Esencia
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-prussian-600 dark:text-sky-50 font-[family-name:var(--font-heading)]">
              Misión y <span className="gradient-text-neon">Visión</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Misión */}
            <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden border border-bluegreen-400/20 group hover:-translate-y-1 transition-all duration-500">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-bluegreen-400/10 to-transparent rounded-bl-full pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl mb-6 border border-bluegreen-400/30"
                     style={{ background: "rgba(33,158,188,0.15)" }}>
                  <svg className="w-7 h-7 text-bluegreen-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-700 dark:text-sky-100 mb-4 font-[family-name:var(--font-heading)]">
                  Nuestra Misión
                </h3>
                <p className="text-sm text-slate-600 dark:text-sky-200/55 leading-relaxed">
                  Ofrecer productos deportivos de alta calidad que inspiren a las
                  personas a alcanzar su máximo potencial. Creemos en el poder
                  transformador del deporte en cada vida.
                </p>
                <div className="mt-6 w-16 h-0.5 rounded-full bg-gradient-to-r from-bluegreen-400 to-transparent group-hover:w-28 transition-all duration-500" />
              </div>
            </div>

            {/* Visión */}
            <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden border border-orange-400/20 group hover:-translate-y-1 transition-all duration-500">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-400/10 to-transparent rounded-bl-full pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl mb-6 border border-orange-400/30"
                     style={{ background: "rgba(251,133,0,0.15)" }}>
                  <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-700 dark:text-sky-100 mb-4 font-[family-name:var(--font-heading)]">
                  Nuestra Visión
                </h3>
                <p className="text-sm text-slate-600 dark:text-sky-200/55 leading-relaxed">
                  Ser la marca líder en equipamiento deportivo en Colombia,
                  reconocida por su innovación, calidad y compromiso con la
                  comunidad atlética.
                </p>
                <div className="mt-6 w-16 h-0.5 rounded-full bg-gradient-to-r from-orange-400 to-transparent group-hover:w-28 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES BENTO ──────────────────────────────────── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-page">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <div ref={valoresRef} className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 reveal ${valoresVisible ? "visible" : ""}`}>
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-bluegreen-400 uppercase tracking-[0.25em] mb-3">
              Lo Que Nos Define
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-prussian-600 dark:text-sky-50 font-[family-name:var(--font-heading)]">
              Nuestros <span className="gradient-text-neon">Valores</span>
            </h2>
            <p className="mt-3 text-sm text-prussian-600/50 dark:text-sky-200/45 max-w-xl mx-auto">
              Cada decisión que tomamos está guiada por estos principios fundamentales.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title}>
                <ValueCard {...v} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ───────────────────────────────── */}
      <section id="contactanos" className="py-20 md:py-28 relative overflow-hidden section-features">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-bluegreen-400/4 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-400/4 rounded-full blur-3xl pointer-events-none" />

        <div ref={contactRef} className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 reveal ${contactVisible ? "visible" : ""}`}>
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-bluegreen-400 uppercase tracking-[0.25em] mb-3">
              Hablemos
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-prussian-600 dark:text-sky-50 font-[family-name:var(--font-heading)]">
              <span className="gradient-text-neon">Contáctanos</span>
            </h2>
            <p className="mt-3 text-sm text-prussian-600/50 dark:text-sky-200/45 max-w-xl mx-auto">
              ¿Tienes alguna pregunta o sugerencia? Nos encantaría escucharte.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Form */}
            <div className="glass-card rounded-3xl p-8 md:p-10 border border-bluegreen-400/15">
              <ContactForm />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6">
              <div className="glass-card rounded-3xl p-8 relative overflow-hidden border border-sky-200/10">
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-bluegreen-400/8 to-transparent rounded-bl-full pointer-events-none" />
                <div className="relative z-10 space-y-7">
                  <div>
                    <h3 className="text-lg font-bold text-slate-700 dark:text-sky-100 mb-2 font-[family-name:var(--font-heading)]">
                      JEDYX SPORT
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-sky-200/50 leading-relaxed">
                      Tu destino premium para equipamiento deportivo. Estamos aquí
                      para ayudarte a alcanzar tus metas.
                    </p>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        color: "rgba(33,158,188,0.15)", border: "rgba(33,158,188,0.3)", textColor: "text-bluegreen-400",
                        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                        label: "Correo Electrónico", value: "contacto@jedyxsport.com",
                      },
                      {
                        color: "rgba(251,133,0,0.15)", border: "rgba(251,133,0,0.3)", textColor: "text-orange-400",
                        icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
                        label: "Ubicación", value: "Colombia",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl border"
                             style={{ background: item.color, borderColor: item.border }}>
                          <svg className={`w-5 h-5 ${item.textColor}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            {item.icon}
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-[var(--text-3)] font-medium">{item.label}</p>
                          <p className="text-sm font-semibold text-[var(--text-1)]">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-8 relative overflow-hidden border border-sky-200/10">
                <div className="relative z-10">
                  <h3 className="text-base font-bold text-slate-700 dark:text-sky-100 mb-2 font-[family-name:var(--font-heading)]">
                    Síguenos en Redes
                  </h3>
                  <p className="text-xs text-prussian-600/50 dark:text-sky-200/45 mb-6">
                    Únete a nuestra comunidad deportiva y mantente al día.
                  </p>
                  <div className="flex gap-3">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-xl
                                   border border-sky-200/10 bg-sky-200/4
                                   text-sky-200/60 hover:text-white
                                   hover:border-bluegreen-400/50 hover:bg-bluegreen-400/10
                                   hover:-translate-y-1 hover:shadow-lg hover:shadow-bluegreen-400/20
                                   transition-all duration-300 group"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-page">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-28">
          <div
            className="relative rounded-[2.5rem] overflow-hidden border border-bluegreen-400/15"
            style={{ background: "linear-gradient(135deg, #023047 0%, #012133 100%)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-px"
                 style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent)" }} />
            <div className="absolute top-0 right-0 w-64 h-64 bg-bluegreen-400/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400/8 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center px-8 sm:px-12 lg:px-20 py-16 gap-6">
              <Image src="/img/image.png" alt="Logo JEDYX SPORT" width={80} height={80}
                className="object-contain opacity-90 drop-shadow-2xl animate-float" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-sky-50 font-[family-name:var(--font-heading)]">
                ¿Listo para dar el <span className="gradient-text-hero">siguiente paso</span>?
              </h2>
              <p className="text-sky-200/60 max-w-lg text-sm">
                Explora nuestra colección completa y encuentra todo lo que
                necesitas para tu próximo desafío deportivo.
              </p>
              <Link
                href="/tienda"
                className="btn-glow inline-flex items-center gap-2 px-8 py-4
                           bg-gradient-to-r from-orange-400 to-orange-500
                           hover:from-orange-500 hover:to-orange-600
                           text-white font-bold rounded-2xl text-sm
                           shadow-lg shadow-orange-400/25 hover:shadow-xl hover:shadow-orange-400/40
                           hover:-translate-y-1 active:translate-y-0 transition-all duration-300 group"
              >
                <span>Explorar Tienda</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
