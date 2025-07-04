"use client";

import { ContextProvider, GetContext } from "@/lib/ContextProvider";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){

    const {navegation } = GetContext() as ContextProvider;

    return(
        <footer className="w-full pt-15 pb-8 bg-gray-950">
            <div className="container flex flex-col ">
                <div className="flex flex-col md:flex-row w-full items-start justify-between gap-8 md:gap-0">
                    <div className="flex-auto flex flex-col gap-4">
                        <Image src={"/icon.png"} width={100} height={100} alt="Footer logo"  />
                        <p className="text-sm text-slate-400 font-semibold  max-w-64">Code12 é uma marca fantasia criada pelo Michel.</p>
                    </div>
                    <div className="flex-auto flex flex-col gap-1">
                        <h2 className="text-md font-bold text-white mb-0.5">Navegue</h2>
                        <Link onClick={navegation} href={"/"} className="text-sm text-slate-400 hover:text-white w-fit font-semibold" >Início</Link>
                        <Link onClick={navegation} href={"/sobre"} className="text-sm text-slate-400 hover:text-white w-fit font-semibold" >Sobre</Link>
                        <Link onClick={navegation} href={"/projetos"} className="text-sm text-slate-400 hover:text-white w-fit font-semibold" >Projetos</Link>
                        <Link onClick={navegation} href={"/contato"} className="text-sm text-slate-400 hover:text-white w-fit font-semibold" >Contato</Link>
                    </div>
                    <div className="flex-auto flex flex-col gap-1.5">
                        <h2 className="text-md font-bold text-white mb-1">Entre em contato</h2>
                        <Link target="_blank" href={`mailto:michelasm3@gmail.com?subject=Contato&body=Olá vim pelo website!`} className="text-sm text-slate-400 hover:text-white w-fit font-semibold flex items-center gap-1"><Mail className="w-4 h-4" /> michelasm3@gmail.com</Link>
                        <Link target="_blank" href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=Contato&body=Olá vim pelo website!`} className="text-sm text-slate-400 hover:text-white w-fit font-semibold flex items-center gap-1"><Mail className="w-4 h-4" />contatocode12@gmail.com</Link>
                        <div className="line my-2.5 max-w-[250px]"/>
                        <div className="flex gap-3">
                            <Link target="_blank" href={`https://wa.me/${process.env.NEXT_PUBLIC_TELEFONE}?text=Olá%20vim%20pelo%20website!`} className="text-sm text-slate-400 hover:text-white w-fit font-semibold flex items-center gap-1 px-2 hover:bg-gray-200/30 rounded-full scale-up myTransitionPop"><FontAwesomeIcon icon={faWhatsapp} className="text-xl" /></Link>
                            <Link target="_blank" href={"https://www.linkedin.com/in/michel-alves-da-silva-0a1834212/"} className="text-sm text-slate-400 hover:text-white w-fit font-semibold flex items-center gap-1 p-1.5 hover:bg-gray-200/30 rounded-full scale-up myTransitionPop"><Linkedin className="w-5 h-5" /></Link>
                            <Link target="_blank" href={"https://www.instagram.com/micher.12/"} className="text-sm text-slate-400 hover:text-white w-fit font-semibold flex items-center gap-1 p-1.5 hover:bg-gray-200/30 rounded-full scale-up myTransitionPop"><Instagram className="w-5 h-5" /></Link>
                            <Link target="_blank" href={"https://github.com/micher12/"} className="text-sm text-slate-400 hover:text-white w-fit font-semibold flex items-center gap-1 p-1.5 hover:bg-gray-200/30 rounded-full scale-up myTransitionPop"><Github className="w-5 h-5" /></Link>
                        </div>
                    </div>
                </div>
                <div className="line my-10" />
                <p className="w-full text-sm text-center">Code12 powered by <b>Michel</b> | 2025</p>
            </div>
        </footer>
    )
}