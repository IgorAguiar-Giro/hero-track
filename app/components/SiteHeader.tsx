"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const section = document.getElementById("contato");
    if (!section) return;

    const update = () => {
      const { top } = section.getBoundingClientRect();
      setHidden(top <= 72);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] flex items-center justify-between gap-3 border-b border-gray-100/80 bg-white/95 px-4 py-2.5 shadow-md backdrop-blur-md transition-all duration-300 ease-in-out sm:px-6 sm:py-3 md:px-12 supports-[backdrop-filter]:bg-white/90 ${
        hidden
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100"
      }`}
    >
      <Link href="#" className="flex shrink-0 items-center">
        {/* INCREASED: Wrapper size from size-16/size-24 to size-24/size-32 */}
        <div className="flex size-24 shrink-0 items-center justify-center p-2 sm:size-32">
          <Image
            src="/images/track-hero-logo2.png"
            alt="TrackHero — Fleet Management"
            width={180}
            height={180}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </Link>
      <a
        href="#contato"
        className="animate-cta-glow whitespace-nowrap rounded-md bg-[#fd510f] px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-[#fd510f]/40 transition-all hover:scale-[1.02] hover:bg-orange-600 hover:shadow-xl hover:shadow-[#fd510f]/50 sm:px-5 sm:py-2.5 sm:text-sm md:text-base"
      >
        <span className="sm:hidden">Contato</span>
        <span className="hidden sm:inline">Fale com um Especialista</span>
      </a>
    </header>
  );
}
