"use client";

import { useInView } from "framer-motion";
import { ArrowUpRight, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes, useRef } from "react";
import Image from "next/image";
import List from "../List";
import Link from "next/link";

interface listItems {
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  title: string;
  content: string;
}

interface itemProps {
  titulo: string;
  about: string;
  image: string;
  list: listItems[];
  link: string;
}

export default function SingleItem({ item, index }: { item: itemProps; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <article
      ref={ref}
      className={`grid gap-8 transition-all duration-700 lg:grid-cols-2 lg:items-center ${
        isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className={`${index % 2 === 0 ? "" : "lg:order-2"}`}>
        <div className="mb-3 flex items-center gap-3">
          <span className="mono text-sm text-amber-300">0{index + 1}</span>
          <span className="line w-10" />
        </div>
        <h3 className="display text-3xl font-semibold tracking-tight sm:text-4xl">{item.titulo}</h3>
        <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">{item.about}</p>

        <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-surface">
          <div className="group relative">
            <Image
              src={item.image}
              width={800}
              height={520}
              alt={`Projeto — ${item.titulo}`}
              quality={100}
              priority={index < 2}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0e]/60 to-transparent" />
          </div>
        </div>
      </div>

      <div className={`${index % 2 === 0 ? "lg:order-1" : ""}`}>
        <List items={item.list} />
        {index > 0 && item.link && (
          <Link
            target="_blank"
            href={item.link}
            className="btn btn-primary mt-6 !px-6 !py-2.5 text-sm"
          >
            Ver projeto
            {index === 1 && <span className="mono text-xs uppercase tracking-widest opacity-70">· real</span>}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </article>
  );
}
