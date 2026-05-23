"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

/* ═══════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════ */
interface Product {
  id: number;
  name: string;
  category: string;
  priceCOP: number;
  priceUSD: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

/* ═══════════════════════════════════════════════════════════
   PRODUCT DATA
   ═══════════════════════════════════════════════════════════ */
const PRODUCTS: Product[] = [
  { id: 1,  name: "Uniforme Francia",    category: "Uniformes Fútbol", priceCOP: 30000, priceUSD: 7.50,  image: "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/c14a3125-b2c8-4b68-89ba-b47ed701274d.jpeg?format=webp" },
  { id: 2,  name: "Camiseta Colombia",   category: "Uniformes Fútbol", priceCOP: 40000, priceUSD: 10.00, image: "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/b9b1c3f1-f68d-421b-b5a4-95dcc8ea6252.jpeg?format=webp" },
  { id: 3,  name: "Uniforme Alemania",   category: "Uniformes Fútbol", priceCOP: 30000, priceUSD: 7.50,  image: "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/c14a3125-b2c8-4b68-89ba-b47ed701274d.jpeg?format=webp" },
  { id: 4,  name: "Uniforme Portugal",   category: "Uniformes Fútbol", priceCOP: 30000, priceUSD: 7.50,  image: "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/c14a3125-b2c8-4b68-89ba-b47ed701274d.jpeg?format=webp" },
  { id: 5,  name: "Uniforme Italia",     category: "Uniformes Fútbol", priceCOP: 30000, priceUSD: 7.50,  image: "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/c14a3125-b2c8-4b68-89ba-b47ed701274d.jpeg?format=webp" },
  { id: 6,  name: "Uniforme Brasil",     category: "Uniformes Fútbol", priceCOP: 30000, priceUSD: 7.50,  image: "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/c14a3125-b2c8-4b68-89ba-b47ed701274d.jpeg?format=webp" },
  { id: 7,  name: "Uniforme Argentina",  category: "Uniformes Fútbol", priceCOP: 30000, priceUSD: 7.50,  image: "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/c14a3125-b2c8-4b68-89ba-b47ed701274d.jpeg?format=webp" },
  { id: 8,  name: "Uniforme Liverpool",  category: "Uniformes Fútbol", priceCOP: 30000, priceUSD: 7.50,  image: "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/c14a3125-b2c8-4b68-89ba-b47ed701274d.jpeg?format=webp" },
  { id: 9,  name: "Uniforme Barcelona",  category: "Uniformes Fútbol", priceCOP: 30000, priceUSD: 7.50,  image: "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/c14a3125-b2c8-4b68-89ba-b47ed701274d.jpeg?format=webp" },
  { id: 10, name: "Uniforme Real Madrid", category: "Uniformes Fútbol", priceCOP: 30000, priceUSD: 7.50, image: "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/c14a3125-b2c8-4b68-89ba-b47ed701274d.jpeg?format=webp" },
  { id: 11, name: "Zapatilla Pro",       category: "Calzado",          priceCOP: 60000, priceUSD: 15.00, image: "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/c14a3125-b2c8-4b68-89ba-b47ed701274d.jpeg?format=webp" },
  { id: 12, name: "Zapatilla Elite",     category: "Calzado",          priceCOP: 70000, priceUSD: 17.50, image: "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/c14a3125-b2c8-4b68-89ba-b47ed701274d.jpeg?format=webp" },
  { id: 13, name: "Zapatilla Clásico",   category: "Calzado",          priceCOP: 45000, priceUSD: 11.25, image: "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/c14a3125-b2c8-4b68-89ba-b47ed701274d.jpeg?format=webp" },
  { id: 14, name: "Equipo Pro",          category: "Ropa Deportiva",   priceCOP: 60000, priceUSD: 15.00, image: "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/c14a3125-b2c8-4b68-89ba-b47ed701274d.jpeg?format=webp" },
  { id: 15, name: "Equipo Elite",        category: "Ropa Deportiva",   priceCOP: 70000, priceUSD: 17.50, image: "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/c14a3125-b2c8-4b68-89ba-b47ed701274d.jpeg?format=webp" },
  { id: 16, name: "Equipo Sport",        category: "Ropa Deportiva",   priceCOP: 70000, priceUSD: 17.50, image: "https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/c14a3125-b2c8-4b68-89ba-b47ed701274d.jpeg?format=webp" },
];

const CATEGORIES = ["Todos", "Uniformes Fútbol", "Calzado", "Ropa Deportiva"] as const;

/* ═══════════════════════════════════════════════════════════
   FLY-TO-CART ANIMATION
   ═══════════════════════════════════════════════════════════ */
interface FlyItem {
  id: string;
  startX: number;
  startY: number;
  image: string;
}

function FlyToCartLayer({ items }: { items: FlyItem[] }) {
  const cartRef = useRef<DOMRect | null>(null);

  useEffect(() => {
    const btn = document.getElementById("cart-btn");
    if (btn) cartRef.current = btn.getBoundingClientRect();
  });

  return (
    <div className="pointer-events-none fixed inset-0 z-[200]">
      {items.map((item) => {
        const endX = cartRef.current ? cartRef.current.left + cartRef.current.width / 2 : window.innerWidth - 40;
        const endY = cartRef.current ? cartRef.current.top  + cartRef.current.height / 2 : 40;
        const dx = endX - item.startX;
        const dy = endY - item.startY;

        return (
          <div
            key={item.id}
            className="absolute w-14 h-14 rounded-full overflow-hidden border-2 border-orange-400 shadow-2xl shadow-orange-400/40"
            style={{
              left: item.startX - 28,
              top:  item.startY - 28,
              animation: "flyToCart 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
              ["--dx" as string]: `${dx}px`,
              ["--dy" as string]: `${dy}px`,
            }}
          >
            <Image src={item.image} alt="" fill className="object-cover scale-150" />
          </div>
        );
      })}

      <style>{`
        @keyframes flyToCart {
          0%   { transform: translate(0, 0) scale(1);    opacity: 1; }
          60%  { transform: translate(calc(var(--dx) * 0.6), calc(var(--dy) * 0.6)) scale(0.7); opacity: 0.9; }
          100% { transform: translate(var(--dx), var(--dy)) scale(0.1); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   TOAST
   ═══════════════════════════════════════════════════════════ */
function Toast({ message, visible }: { message: string; visible: boolean }) {
  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-3.5 rounded-2xl
        shadow-2xl glass-dark border border-bluegreen-400/25 text-white font-semibold text-sm
        transition-all duration-500 whitespace-nowrap ${
          visible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95 pointer-events-none"
        }`}
    >
      <span className="w-5 h-5 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
        <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {message}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PRODUCT CARD — Dark + 3D Tilt + Zoom Hover
   ═══════════════════════════════════════════════════════════ */
function ProductCard({
  product, currency, onAddToCart,
}: {
  product: Product; currency: "COP" | "USD"; onAddToCart: (p: Product, e: React.MouseEvent) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

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

  const price = currency === "COP"
    ? `$${product.priceCOP.toLocaleString("es-CO")} COP`
    : `$${product.priceUSD.toFixed(2)} USD`;

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative glass-card rounded-3xl overflow-hidden border border-sky-200/8
                 hover:border-bluegreen-400/30 flex flex-col"
      style={{ transition: "transform 0.12s ease, border-color 0.3s ease, box-shadow 0.3s ease" }}
    >
      {/* Cursor glow */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{
          background: "radial-gradient(320px circle at var(--gx, 50%) var(--gy, 50%), rgba(0,212,255,0.08), transparent 65%)",
        }}
      />

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-surface-800">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Quick-add floating button */}
        <button
          onClick={(e) => onAddToCart(product, e)}
          className="absolute bottom-3 right-3 z-20 w-11 h-11 rounded-full
                     bg-gradient-to-br from-orange-400 to-orange-500 text-white
                     flex items-center justify-center shadow-xl shadow-orange-400/40
                     translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                     hover:scale-110 active:scale-95
                     transition-all duration-300 cursor-pointer border-none"
          aria-label={`Agregar ${product.name} al carrito`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>

        {/* Category badge */}
        <span className="absolute top-3 left-3 z-20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider
                         rounded-full glass border border-sky-200/15 text-sky-200/80 backdrop-blur-md">
          {product.category}
        </span>
      </div>

      {/* Info */}
      <div className="relative z-10 p-5 flex flex-col flex-1">
        <h3 className="text-sm font-bold text-slate-700 dark:text-sky-100 group-hover:text-prussian-600 dark:group-hover:text-white transition-colors duration-300 font-[family-name:var(--font-heading)]">
          {product.name}
        </h3>
        <p className="mt-1.5 text-lg font-extrabold gradient-text font-[family-name:var(--font-heading)]">
          {price}
        </p>
        <button
          onClick={(e) => onAddToCart(product, e)}
          className="mt-4 w-full py-3 rounded-xl text-sm font-bold text-white
                     bg-gradient-to-r from-prussian-600 to-bluegreen-400
                     hover:from-bluegreen-400 hover:to-bluegreen-500
                     hover:shadow-lg hover:shadow-bluegreen-400/25
                     active:scale-[0.98] transition-all duration-300 cursor-pointer border-none"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   CART MODAL
   ═══════════════════════════════════════════════════════════ */
function CartModal({
  isOpen, onClose, cart, currency, onUpdateQty, onRemove, onCheckout,
}: {
  isOpen: boolean; onClose: () => void; cart: CartItem[];
  currency: "COP" | "USD"; onUpdateQty: (id: number, d: number) => void;
  onRemove: (id: number) => void; onCheckout: () => void;
}) {
  const total = cart.reduce(
    (s, i) => s + (currency === "COP" ? i.priceCOP : i.priceUSD) * i.quantity,
    0
  );
  const fmtTotal = currency === "COP"
    ? `$${total.toLocaleString("es-CO")} COP`
    : `$${total.toFixed(2)} USD`;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-400 backdrop-blur-sm ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(0,0,0,0.65)" }}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md flex flex-col modal-panel
                    transition-transform duration-500 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Neon left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-px pointer-events-none"
             style={{ background: "linear-gradient(180deg, transparent, rgba(33,158,188,0.4), rgba(168,85,247,0.3), transparent)" }} />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border-card)]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-orange-400/15 border border-orange-400/25 flex items-center justify-center">
              <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </div>
            <h2 className="text-base font-bold text-[var(--text-1)] font-[family-name:var(--font-heading)]">
              Carrito
              {cart.length > 0 && (
                <span className="ml-2 text-sm text-[var(--text-2)] font-normal">
                  ({cart.reduce((s, i) => s + i.quantity, 0)} items)
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl border border-[var(--border-card)] hover:border-bluegreen-400/40
                       hover:bg-bluegreen-400/8 text-[var(--text-2)] hover:text-[var(--text-1)]
                       flex items-center justify-center transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-20">
              <div className="w-20 h-20 rounded-full bg-[var(--bg-alt)] border border-[var(--border-card)] flex items-center justify-center">
                <svg className="w-9 h-9 text-[var(--text-2)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
              <div>
                <p className="text-[var(--text-1)] text-sm font-semibold">Tu carrito está vacío</p>
                <p className="text-[var(--text-2)] text-xs mt-1">¡Agrega productos para comenzar!</p>
              </div>
            </div>
          ) : (
            cart.map((item) => {
              const itemPrice = currency === "COP"
                ? `$${(item.priceCOP * item.quantity).toLocaleString("es-CO")}`
                : `$${(item.priceUSD * item.quantity).toFixed(2)}`;

              return (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-3 rounded-2xl border border-[var(--border-card)]
                             bg-[var(--bg-alt)] hover:border-bluegreen-400/30 transition-colors duration-200"
                >
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-[var(--border-card)]">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-[var(--text-1)] truncate">{item.name}</h4>
                    <p className="text-xs text-orange-500 font-semibold mt-0.5">{itemPrice}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQty(item.id, -1)}
                        className="w-7 h-7 rounded-lg bg-[var(--bg-card)] border border-[var(--border-card)]
                                   hover:border-bluegreen-400/40 text-[var(--text-1)] text-sm
                                   flex items-center justify-center transition-colors cursor-pointer"
                      >
                        −
                      </button>
                      <span className="text-[var(--text-1)] text-sm font-bold w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQty(item.id, 1)}
                        className="w-7 h-7 rounded-lg bg-[var(--bg-card)] border border-[var(--border-card)]
                                   hover:border-bluegreen-400/40 text-[var(--text-1)] text-sm
                                   flex items-center justify-center transition-colors cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="w-8 h-8 rounded-lg bg-red-400/10 hover:bg-red-400/20 text-red-500
                               flex items-center justify-center transition-colors cursor-pointer flex-shrink-0 border-none"
                    aria-label={`Eliminar ${item.name}`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-6 py-5 border-t border-[var(--border-card)] space-y-4">
            {/* Total */}
            <div className="flex items-center justify-between p-4 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-alt)]">
              <span className="text-[var(--text-2)] text-sm font-medium">Total</span>
              <span className="text-xl font-extrabold text-[var(--text-1)] font-[family-name:var(--font-heading)]">
                {fmtTotal}
              </span>
            </div>
            <button
              onClick={onCheckout}
              className="btn-glow w-full py-3.5 rounded-2xl text-sm font-bold text-white flex items-center justify-center gap-2
                         bg-gradient-to-r from-green-500 to-green-600
                         hover:from-green-600 hover:to-green-700
                         hover:shadow-xl hover:shadow-green-500/30
                         active:scale-[0.98] transition-all duration-300 cursor-pointer border-none"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Comprar por WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN TIENDA PAGE
   ═══════════════════════════════════════════════════════════ */
export default function TiendaPage() {
  const [search,         setSearch]         = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [currency,       setCurrency]       = useState<"COP" | "USD">("COP");
  const [cart,           setCart]           = useState<CartItem[]>([]);
  const [isCartOpen,     setIsCartOpen]     = useState(false);
  const [toast,          setToast]          = useState({ message: "", visible: false });
  const [isAnimating,    setIsAnimating]    = useState(false);
  const [flyItems,       setFlyItems]       = useState<FlyItem[]>([]);

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchCat  = activeCategory === "Todos" || p.category === activeCategory;
    const matchName = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchName;
  });

  /* Category switch with animation */
  const switchCategory = (cat: string) => {
    if (cat === activeCategory) return;
    setIsAnimating(true);
    setTimeout(() => { setActiveCategory(cat); setIsAnimating(false); }, 280);
  };

  /* Toast */
  const showToast = useCallback((msg: string) => {
    setToast({ message: msg, visible: true });
    setTimeout(() => setToast(p => ({ ...p, visible: false })), 2500);
  }, []);

  /* Cart actions */
  const addToCart = useCallback((product: Product, e: React.MouseEvent) => {
    // Fly-to-cart animation
    const flyId = `${product.id}-${Date.now()}`;
    const rect   = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setFlyItems(prev => [...prev, {
      id:     flyId,
      startX: rect.left + rect.width  / 2,
      startY: rect.top  + rect.height / 2,
      image:  product.image,
    }]);
    setTimeout(() => setFlyItems(prev => prev.filter(f => f.id !== flyId)), 800);

    // Add to cart
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`${product.name} agregado`);
  }, [showToast]);

  const updateQty = useCallback((id: number, d: number) => {
    setCart(prev =>
      prev.map(i => i.id === id ? { ...i, quantity: Math.max(0, i.quantity + d) } : i)
          .filter(i => i.quantity > 0)
    );
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setCart(prev => prev.filter(i => i.id !== id));
  }, []);

  /* WhatsApp checkout */
  const checkoutWhatsApp = useCallback(() => {
    const total = cart.reduce((s, i) => s + (currency === "COP" ? i.priceCOP : i.priceUSD) * i.quantity, 0);
    const fmtTotal = currency === "COP"
      ? `$${total.toLocaleString("es-CO")} COP`
      : `$${total.toFixed(2)} USD`;

    let msg = "🛒 *Pedido JEDYX SPORT*\n\n";
    cart.forEach(i => {
      const p = currency === "COP"
        ? `$${(i.priceCOP * i.quantity).toLocaleString("es-CO")} COP`
        : `$${(i.priceUSD * i.quantity).toFixed(2)} USD`;
      msg += `• ${i.name} x${i.quantity} — ${p}\n`;
    });
    msg += `\n💰 *Total: ${fmtTotal}*\n\n¡Gracias por comprar en JEDYX SPORT! ⚽🏆`;

    window.open(`https://wa.me/573000000000?text=${encodeURIComponent(msg)}`, "_blank");
  }, [cart, currency]);

  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);

  return (
    <>
      <FlyToCartLayer items={flyItems} />

      {/* ── HERO BANNER ──────────────────────────────────── */}
      <section className="relative pt-32 pb-24 overflow-hidden grid-bg bg-hero">
        <div className="absolute top-10 right-10 w-96 h-96 bg-bluegreen-400/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-orange-400/6 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p
            className="text-xs font-bold text-orange-400 uppercase tracking-[0.25em] mb-4"
            style={{ animation: "fadeInUp 0.7s ease-out both" }}
          >
            Catálogo JEDYX SPORT
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-prussian-600 dark:text-sky-50 leading-tight font-[family-name:var(--font-heading)]"
            style={{ animation: "fadeInUp 0.7s 0.1s ease-out both" }}
          >
            Nuestra{" "}
            <span className="gradient-text-hero">Tienda</span>
          </h1>
          <p
            className="mt-4 text-base text-prussian-600/60 dark:text-sky-200/50 max-w-xl mx-auto"
            style={{ animation: "fadeInUp 0.7s 0.2s ease-out both" }}
          >
            Encuentra uniformes, calzado y ropa deportiva de alta calidad para
            llevar tu rendimiento al siguiente nivel.
          </p>

          {/* Search */}
          <div
            className="mt-10 max-w-xl mx-auto relative"
            style={{ animation: "fadeInUp 0.7s 0.3s ease-out both" }}
          >
            <div className="absolute inset-0 rounded-2xl blur-xl opacity-40" style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(168,85,247,0.2))" }} />
            <div className="relative flex items-center">
              <svg className="absolute left-5 w-4 h-4 text-prussian-600/40 dark:text-sky-200/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Buscar productos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full py-4 pl-14 pr-5 rounded-2xl text-prussian-600 dark:text-sky-50 placeholder-prussian-600/30 dark:placeholder-sky-200/30
                           glass border border-prussian-600/10 dark:border-sky-200/10
                           focus:outline-none focus:border-bluegreen-400/50 focus:bg-bluegreen-400/5
                           transition-all duration-300 text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TOOLBAR ──────────────────────────────────────── */}
      <div className="sticky top-16 md:top-20 z-40 glass border-b border-[var(--border-card)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">

          {/* Category pills — scroll horizontal en móvil */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1 min-w-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => switchCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer border
                  ${activeCategory === cat
                    ? "bg-gradient-to-r from-prussian-600 to-bluegreen-400 text-white border-transparent shadow-lg shadow-bluegreen-400/20"
                    : "text-prussian-600/60 dark:text-sky-200/60 border-[var(--border-card)] hover:border-bluegreen-400/30 hover:text-prussian-600 dark:hover:text-sky-50 hover:bg-bluegreen-400/5"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Currency + Cart — siempre visibles, sin shrink */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center glass rounded-xl p-1 border border-[var(--border-card)]">
              {(["COP", "USD"] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer border-none
                    ${currency === c
                      ? "bg-bluegreen-400/20 text-bluegreen-400 shadow-sm"
                      : "text-prussian-600/40 dark:text-sky-200/40 hover:text-prussian-600/70 dark:hover:text-sky-200/70"
                    }`}
                >
                  {c === "COP" ? "🇨🇴" : "🇺🇸"}<span className="hidden sm:inline"> {c}</span>
                </button>
              ))}
            </div>

            <button
              id="cart-btn"
              onClick={() => setIsCartOpen(true)}
              className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-bluegreen-400/25 glass
                         text-prussian-700 dark:text-sky-50 flex items-center justify-center
                         hover:border-bluegreen-400/50 hover:bg-bluegreen-400/10 hover:scale-105
                         active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Abrir carrito"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              {cartCount > 0 && (
                <span
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-orange-400 text-[10px] font-extrabold
                             flex items-center justify-center shadow-lg shadow-orange-400/40 animate-pulse"
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── PRODUCT GRID ─────────────────────────────────── */}
      <section className="py-14 sm:py-18 bg-page">
        <style>{`
          @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.90) translateY(20px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-prussian-600/40 dark:text-sky-200/30 mb-8 font-medium">
            Mostrando{" "}
            <span className="font-bold text-bluegreen-400">{filteredProducts.length}</span>{" "}
            {filteredProducts.length === 1 ? "producto" : "productos"}
            {activeCategory !== "Todos" && (
              <> en <span className="text-orange-400 font-semibold">{activeCategory}</span></>
            )}
          </p>

          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-28 text-center">
              <div className="w-20 h-20 rounded-full glass-card border border-sky-200/10 flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-sky-200/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-700 dark:text-sky-100 font-[family-name:var(--font-heading)]">
                No se encontraron productos
              </h3>
              <p className="text-slate-500 dark:text-sky-200/40 text-sm mt-2">
                Intenta con otro término de búsqueda o categoría
              </p>
            </div>
          ) : (
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5
                          transition-all duration-300 ${
                            isAnimating
                              ? "opacity-0 translate-y-4 scale-[0.98]"
                              : "opacity-100 translate-y-0 scale-100"
                          }`}
            >
              {filteredProducts.map((product, idx) => (
                <div
                  key={product.id}
                  style={{
                    animation: "fadeInScale 0.5s ease-out forwards",
                    animationDelay: `${idx * 55}ms`,
                    opacity: 0,
                  }}
                >
                  <ProductCard
                    product={product}
                    currency={currency}
                    onAddToCart={addToCart}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        currency={currency}
        onUpdateQty={updateQty}
        onRemove={removeFromCart}
        onCheckout={checkoutWhatsApp}
      />

      <Toast message={toast.message} visible={toast.visible} />
    </>
  );
}
