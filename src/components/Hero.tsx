"use client";

import { ContextProvider, GetContext } from "@/lib/ContextProvider";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero(){

    const { navegation } = GetContext() as ContextProvider;

    return(
        <main id="home" className="min-h-screen py-36 relative myHero">
            <div className="container-xl relative z-10 ">
                <h2 className="w-fit animateText text-3xl sm:text-5xl xl:text-7xl font-bold bg-gradient-to-r from-amber-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">Olá, eu sou Michel!</h2>
                <h2 className="text-3xl xl:text-5xl font-bold italic mt-2">Desenvolvedor FullStack</h2>
                <p className="text-4xl sm:text-5xl mt-12 max-w-[300px] sm:max-w-[50%] font-semibold italic montserrat">Transformando ideias em experiências digitais excepcionais.</p>
                <div className="flex flex-col sm:flex-row gap-5 mt-10">
                    <Link onClick={navegation} href={"/projetos"} className="cursor-pointer myTransition-ease scale font-bold bg-gradient-to-r from-amber-500 via-purple-500 to-pink-500 w-fit px-8 sm:px-12 text-white rounded-full py-2 hover:shadow-lg shadow-pink-800/60">Ver projetos</Link>
                    <Link onClick={navegation} href={"/sobre"} className="cursor-pointer myTransition-ease scale font-bold bg-gradient-to-r from-slate-800 via-indigo-500 to-blue-500/30 w-fit px-8 sm:px-12 text-white rounded-full py-2 hover:shadow-lg shadow-blue-800/60">Sobre</Link>
                </div>
                <div className="flex gap-3 mt-10">
                    <Link target="_blank" href={"https://www.github.com/micher12"} className="hover:bg-zinc-500 p-1.5 rounded-full myTransitionPop  scale-up" ><Github className="w-6 h-6" /></Link>
                    <Link target="_blank" href={"https://www.linkedin.com/in/michel-alves-da-silva-0a1834212/"} className="hover:bg-zinc-500 p-1.5 rounded-full myTransitionPop  scale-up" ><Linkedin className="w-6 h-6" /></Link>
                    <Link target="_blank" href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=Contato&body=Olá vim pelo website!`} className="hover:bg-zinc-500 p-1.5 rounded-full myTransitionPop scale-up" ><Mail className="w-6 h-6" /></Link>
                </div>
            </div>
        </main>
    )
}