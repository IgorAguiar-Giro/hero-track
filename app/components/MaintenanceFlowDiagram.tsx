"use client";

import { useEffect, useState } from "react";

const steps = [
  {
    label: "Monitoramento",
    description: "Coleta dados do veículo em tempo real.",
    color: "bg-[#013469]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-7 h-7"
        aria-hidden
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3-3" />
      </svg>
    ),
  },
  {
    label: "Análise",
    description: "Identifica desgaste e risco de falha.",
    color: "bg-[#024a8a]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-7 h-7"
        aria-hidden
      >
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
  },
  {
    label: "Agendamento",
    description: "Programa revisões automaticamente.",
    color: "bg-[#fd510f]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-7 w-7"
        aria-hidden
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    label: "Alerta",
    description: "Avisa antes da falha acontecer.",
    color: "bg-[#fd510f]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-7 h-7"
        aria-hidden
      >
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
  },
];

const CYCLE_MS = 2800;

function StepCard({
  index,
  label,
  description,
  color,
  icon,
  active,
  onSelect,
}: {
  index: number;
  label: string;
  description: string;
  color: string;
  icon: React.ReactNode;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`relative flex w-full items-center gap-4 rounded-xl border-2 p-4 text-left transition-all duration-500 ease-out ${
        active
          ? "border-[#fd510f] bg-white shadow-lg shadow-orange-100 scale-[1.02] z-10"
          : "border-gray-200 bg-white/80 opacity-60 scale-[0.98]"
      }`}
      aria-current={active ? "step" : undefined}
    >
      <span
        className={`absolute left-0 top-3 bottom-3 w-1 rounded-full transition-all duration-500 ${
          active ? "bg-[#fd510f]" : "bg-transparent"
        }`}
      />
      <div
        className={`${color} text-white ml-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-transform duration-500 ${
          active ? "scale-110" : ""
        }`}
      >
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p
          className={`text-sm font-bold transition-colors duration-500 ${
            active ? "text-[#013469]" : "text-[#013469]/80"
          }`}
        >
          {index + 1}. {label}
        </p>
        {active && (
          <p className="mt-1 text-xs leading-relaxed text-slate-600 transition-opacity duration-300">
            {description}
          </p>
        )}
      </div>
      {active && (
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-[#fd510f] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#fd510f]" />
        </span>
      )}
    </button>
  );
}

export default function MaintenanceFlowDiagram() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto mb-8 max-w-xl pl-2 sm:mb-10 md:max-w-2xl">
      <div
        className="pointer-events-none absolute left-4 top-8 bottom-8 w-0.5 overflow-hidden rounded-full bg-gray-200 sm:left-6"
        aria-hidden
      >
        <div
          className="w-full rounded-full bg-gradient-to-b from-[#013469] via-[#fd510f] to-[#024a8a] transition-all duration-700 ease-in-out"
          style={{
            height: `${((active + 1) / steps.length) * 100}%`,
          }}
        />
      </div>

      <div className="relative space-y-3 md:space-y-4">
        {steps.map((step, i) => (
          <div key={step.label} className="relative">
            {i > 0 && (
              <div
                className={`absolute -top-2 left-8 h-4 w-0.5 transition-colors duration-500 ${
                  i <= active ? "bg-[#fd510f]/40" : "bg-gray-200"
                }`}
                aria-hidden
              />
            )}
            <StepCard
              index={i}
              label={step.label}
              description={step.description}
              color={step.color}
              icon={step.icon}
              active={active === i}
              onSelect={() => setActive(i)}
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {steps.map((step, i) => (
          <button
            key={step.label}
            type="button"
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              active === i ? "w-8 bg-[#fd510f]" : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Ir para ${step.label}`}
          />
        ))}
      </div>
    </div>
  );
}
