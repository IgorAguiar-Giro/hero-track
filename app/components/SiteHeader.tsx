"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#solucao", label: "Solução" },
  { href: "#modulos", label: "Módulos" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#resultados", label: "Resultados" },
  { href: "#contato", label: "Contato" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 980) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header id="site-header" className={scrolled ? "scrolled" : undefined}>
      <div className="container">
        <nav>
          <Link href="#top" className="logo" onClick={() => setOpen(false)}>
            <Image
              src="/images/track-hero-logo2.png"
              alt="TrackHero"
              width={220}
              height={72}
              priority
              style={{ height: 72, width: "auto" }}
            />
          </Link>
          <div className={`nav-links${open ? " open" : ""}`}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="nav-cta">
            <a href="#contato" className="btn btn-sm">
              Fale com um Especialista
            </a>
            <button
              type="button"
              className="burger"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
