"use client";

import { ContextProvider, GetContext } from "@/lib/ContextProvider";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Line = { type: "cmd" | "ok" | "out"; text: string };

const LINES: Line[] = [
  { type: "cmd", text: "code12.init({ role: 'fullstack' })" },
  { type: "ok", text: "stack → Next.js · React · TypeScript" },
  { type: "ok", text: "data → SQL · DynamoDB · D1" },
  { type: "ok", text: "ai   → BERTimbau · CNN" },
  { type: "ok", text: "ship → PWA · SEO · seguro" },
];

const STACK = [
  "Next.js", "React", "TypeScript", "JavaScript", "Node.js", "Tailwind",
  "PHP", "Python", "Java", "MySQL", "PostgreSQL", "DynamoDB", "Firebase",
];

export default function Hero() {
  const { navegation } = GetContext() as ContextProvider;
  const [typed, setTyped] = useState<Line[]>([]);
  const [done, setDone] = useState(false);
  const [reduced, setReduced] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) {
      setTyped(LINES);
      setDone(true);
      doneRef.current = true;
      return;
    }
  }, []);

  useEffect(() => {
    if (reduced || doneRef.current) return;
    let li = 0;
    let ci = 0;
    let timer: ReturnType<typeof setTimeout>;
    const next = () => {
      if (li >= LINES.length) {
        doneRef.current = true;
        setDone(true);
        return;
      }
      const line = LINES[li];
      if (ci < line.text.length) {
        ci++;
        setTyped((prev) => {
          const copy = prev.slice(0, li);
          copy.push({ ...line, text: line.text.slice(0, ci) });
          return copy;
        });
        timer = setTimeout(next, 12 + Math.random() * 20);
      } else {
        li++;
        ci = 0;
        timer = setTimeout(next, 180);
      }
    };
    next();
    return () => clearTimeout(timer);
  }, [reduced]);

  const scrollToProjetos = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main id="home" className="relative min-h-screen overflow-hidden pt-30">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[42rem] w-[42rem] rounded-full glow-amber blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full glow-teal blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full glow-amber blur-3xl opacity-40" />

      <div className="container-xl relative z-10 grid items-center gap-14 pt-36 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:pt-40">
        {/* Left — copy */}
        <div>
          <p className="eyebrow fadeInUp">Code12 — Portfólio · Michel</p>

          <h1 className="display mt-6 text-[2.6rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl xl:text-7xl fadeInUp" style={{ animationDelay: "0.08s" }}>
            Ideias viram{" "}
            <span className="relative text-amber-300">
              código
              <span className="absolute inset-x-0 -bottom-1 h-1 rounded-full bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0" />
            </span>,{" "}
            código vira{" "}
            <span className="text-teal-300">experiência</span>.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground fadeInUp" style={{ animationDelay: "0.16s" }}>
            Sou Michel, desenvolvedor fullstack. Construo WebApps completos — dashboards,
            inteligência artificial e estruturas de dados — com back-end integrado, pensados
            para performar e surpreender.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center fadeInUp" style={{ animationDelay: "0.24s" }}>
            <button onClick={scrollToProjetos} className="btn btn-primary">
              Ver projetos <ArrowDown className="h-4 w-4" />
            </button>
            <Link onClick={navegation} href={"/sobre"} className="btn btn-ghost">
              Sobre mim
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3 fadeInUp" style={{ animationDelay: "0.32s" }}>
            <span className="mono text-xs uppercase tracking-widest text-muted-foreground">Redes</span>
            <span className="line w-8" />
            <div className="flex gap-1.5">
              {[
                { icon: <Github className="h-[18px] w-[18px]" />, href: "https://www.github.com/micher12", label: "GitHub" },
                { icon: <Linkedin className="h-[18px] w-[18px]" />, href: "https://www.linkedin.com/in/michel-alves-da-silva-0a1834212/", label: "LinkedIn" },
                { icon: <Mail className="h-[18px] w-[18px]" />, href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=Contato&body=Olá vim pelo website!`, label: "Email" },
              ].map((s, i) => (
                <Link
                  key={i}
                  target="_blank"
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/60 hover:text-amber-300"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right — signature terminal */}
        <div className="relative fadeInUp" style={{ animationDelay: "0.2s" }}>
          <div className="pointer-events-none absolute -inset-6 rounded-3xl glow-teal blur-2xl opacity-30" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d12]/90 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="mono text-xs text-slate-500">code12 — build.ts</span>
            </div>
            <div className="mono min-h-[300px] space-y-1.5 p-5 text-[13px] leading-relaxed sm:min-h-[340px] sm:text-sm">
              {typed.map((l, i) =>
                l.type === "cmd" ? (
                  <div key={i} className="flex">
                    <span className="mr-2 text-amber-300">$</span>
                    <span className="text-slate-100">{l.text}</span>
                  </div>
                ) : (
                  <div key={i} className="flex items-start gap-2 pl-4">
                    <span className="mt-0.5 text-teal-400">▸</span>
                    <span className="text-slate-300">{l.text}</span>
                  </div>
                )
              )}
              {done && (
                <div className="flex items-center gap-2 pt-2 text-teal-300">
                  <span>✓</span>
                  <span className="font-medium">ready — vamos construir.</span>
                </div>
              )}
              {!reduced && !done && (
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="term-caret" />
                </div>
              )}
            </div>
            <div className="flex items-center justify-between border-t border-white/10 px-5 py-3">
              <span className="mono text-xs text-slate-500">uptime 100% · deploy ok</span>
              <span className="mono text-xs text-teal-400">● online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee of stack */}
      <div className="marquee relative z-10 border-y border-white/10 py-5">
        <div className="marquee-track">
          {[...STACK, ...STACK].map((s, i) => (
            <span key={i} className="mono text-sm uppercase tracking-[0.2em] text-slate-500">
              {s}
              <span className="ml-6 text-amber-400/60">·</span>
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
