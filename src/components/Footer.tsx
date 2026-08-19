"use client";

import { ContextProvider, GetContext } from "@/lib/ContextProvider";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const { navegation } = GetContext() as ContextProvider;

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0a0a0e] pb-10 pt-16">
      <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full glow-teal blur-3xl opacity-20" />
      <div className="container relative z-10">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex max-w-xs flex-col gap-4">
            <Image src={"/icon.png"} width={38} height={100} alt="Code12 logo" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Code12 é a marca de Michel — desenvolvimento fullstack de sites e aplicações web.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="mono mb-1 text-xs uppercase tracking-widest text-amber-300">Navegue</h3>
            {[
              { href: "/", label: "Início" },
              { href: "/sobre", label: "Sobre" },
              { href: "/projetos", label: "Projetos" },
              { href: "/contato", label: "Contato" },
            ].map((n) => (
              <Link key={n.href} onClick={navegation} href={n.href}
                className="w-fit text-sm text-slate-400 transition-colors hover:text-white">
                {n.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="mono mb-1 text-xs uppercase tracking-widest text-amber-300">Contato</h3>
            <Link target="_blank" href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=Contato&body=Olá vim pelo website!`}
              className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white">
              <Mail className="h-4 w-4 text-teal-300/70" /> contatocode12@gmail.com
            </Link>
            <div className="mt-1 flex gap-2.5">
              {[
                { icon: <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4" />, href: `https://wa.me/${process.env.NEXT_PUBLIC_TELEFONE}?text=Olá%20vim%20pelo%20website!`, label: "Whatsapp" },
                { icon: <Linkedin className="h-4 w-4" />, href: "https://www.linkedin.com/in/michel-alves-da-silva-0a1834212/", label: "LinkedIn" },
                { icon: <Instagram className="h-4 w-4" />, href: "https://www.instagram.com/micher.12/", label: "Instagram" },
                { icon: <Github className="h-4 w-4" />, href: "https://github.com/micher12/", label: "GitHub" },
              ].map((s, i) => (
                <Link key={i} target="_blank" href={s.href} aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/50 hover:text-amber-300">
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="line my-10" />
        <p className="mono w-full text-center text-xs uppercase tracking-widest text-slate-500">
          © {new Date().getFullYear()} Code12 — feito por <span className="text-amber-300">Michel</span>
        </p>
      </div>
    </footer>
  );
}
