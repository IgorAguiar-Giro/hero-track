"use client";

import { useEffect } from "react";

export default function TrackHeroEffects() {
  useEffect(() => {
    const progressFill = document.getElementById("track-progress-fill");
    const updateProgress = () => {
      if (!progressFill) return;
      const h = document.documentElement;
      const scrolled =
        (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      progressFill.style.width = `${scrolled}%`;
    };
    document.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    const revealEls = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));

    const counters = document.querySelectorAll("[data-count]");
    const counterIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseInt(el.getAttribute("data-count") || "0", 10);
          const suffix = el.getAttribute("data-suffix") || "";
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent =
              Math.floor(eased * target).toLocaleString("pt-BR") + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          counterIO.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => counterIO.observe(el));

    return () => {
      document.removeEventListener("scroll", updateProgress);
      io.disconnect();
      counterIO.disconnect();
    };
  }, []);

  return null;
}
