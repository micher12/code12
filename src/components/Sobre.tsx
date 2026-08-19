"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

const tecnologias = [
  { name: "JavaScript / TypeScript", habilidade: 96 },
  { name: "Next.js", habilidade: 90 },
  { name: "React", habilidade: 78 },
  { name: "Java", habilidade: 80 },
  { name: "PHP", habilidade: 75 },
  { name: "Python", habilidade: 75 },
];

const tecnologias2 = [
  { name: "HTML / CSS", habilidade: 100 },
  { name: "Tailwind CSS", habilidade: 95 },
  { name: "SQL", habilidade: 98 },
  { name: "Firebase", habilidade: 95 },
  { name: "DynamoDB", habilidade: 80 },
  { name: "Cloudflare D1", habilidade: 95 },
];

export default function Sobre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div id="sobre" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute left-0 top-0 h-[30rem] w-[30rem] rounded-full glow-teal blur-3xl opacity-30" />

      <div className="container-xl relative z-10">
        <p className="eyebrow">01 · Perfil</p>
        <h2 className="display mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          Sobre <span className="text-amber-300">mim</span>
        </h2>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Portrait card */}
          <div
            className={`relative overflow-hidden rounded-2xl border border-white/10 bg-surface p-8 transition-all duration-700 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full glow-amber blur-2xl opacity-40" />
            <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full border-2 border-amber-400/40">
              <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('perfil.jpg')" }} />
            </div>
            <p className="display mt-6 text-center text-lg font-semibold">Michel Alves da Silva</p>
            <p className="mono mt-1 text-center text-xs uppercase tracking-widest text-amber-300">
              Desenvolvedor FullStack
            </p>
            <div className="line my-6" />
            <p className="text-center leading-relaxed text-muted-foreground">
              Especializado em WebApps completos, responsivos e com back-end totalmente integrado.
              Atualmente atuo como freelancer desenvolvendo sites do zero ao deploy.
            </p>
          </div>

          {/* Skills */}
          <div
            ref={ref}
            className={`grid gap-x-10 gap-y-8 rounded-2xl border border-white/10 bg-surface p-8 transition-all duration-700 delay-150 sm:grid-cols-2 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-5">
              {tecnologias.map((item, i) => (
                <div key={item.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="mono text-xs text-slate-400">{item.habilidade}%</span>
                  </div>
                  <div className={`skill-bar ${isInView ? "in" : ""}`} style={{ ["--d" as string]: `${i * 90}ms` }}>
                    <span className="bg-gradient-to-r from-amber-400 to-amber-300" style={{ width: `${item.habilidade}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              {tecnologias2.map((item, i) => (
                <div key={item.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="mono text-xs text-slate-400">{item.habilidade}%</span>
                  </div>
                  <div className={`skill-bar ${isInView ? "in" : ""}`} style={{ ["--d" as string]: `${i * 90}ms` }}>
                    <span className="bg-gradient-to-r from-teal-400 to-teal-300" style={{ width: `${item.habilidade}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
