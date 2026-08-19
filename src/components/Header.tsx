"use client";

import { ContextProvider, GetContext } from "@/lib/ContextProvider";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/projetos", label: "Projetos" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobile, setMobile] = useState(false);
    const { path, setPath, mobileMenu, navegation, setMobileMenu, ignoreScroll } = GetContext() as ContextProvider;

    useEffect(() => {
        function Scrolled() {
            const height = window.scrollY;
            const alturaSobre = (document.getElementById("sobre"))?.getBoundingClientRect().top ?? 0 - window.scrollY;
            const alturaProjetos = (document.getElementById("projetos"))?.getBoundingClientRect().top ?? 0 - window.screenY;

            if (height > 200 && !scrolled) return setScrolled(true);
            if (height < 200 && scrolled) return setScrolled(false);

            if (!ignoreScroll) {
                if (alturaSobre && alturaSobre > 0) return setPath("/");
                if (alturaProjetos && alturaProjetos > 0) return setPath("/sobre");
                else return setPath("/projetos");
            }
        }

        function resized() {
            const width = window.innerWidth;
            if (width <= 640) return setMobile(true);
            if (mobileMenu) setMobileMenu(false);
            return setMobile(false);
        }

        resized();
        Scrolled();

        window.addEventListener("scroll", Scrolled);
        window.addEventListener("resize", resized);

        return () => {
            window.removeEventListener("scroll", Scrolled);
            window.removeEventListener("resize", resized);
        };
    }, [mobileMenu, scrolled, ignoreScroll]);

    function openMobileMenu() {
        if (!mobile) return;
        setMobileMenu(!mobileMenu);
    }

    return (
        <>
            <header
                className={`fixed left-1/2 top-4 z-[41] flex -translate-x-1/2 items-center rounded-2xl border px-4 py-2 backdrop-blur-xl transition-all duration-500
                ${mobile ? "w-[92%]" : "w-fit"}
                ${scrolled || mobileMenu
                    ? "border-white/10 bg-[#0d0d12]/90 shadow-2xl"
                    : "border-white/5 bg-[#0d0d12]/40"
                }
                ${mobile ? "flex-col" : "justify-between"}`}
            >
                <div className="flex w-full items-center justify-between gap-3">
                    <Link href="/" aria-label="Code12 — início" onClick={navegation}>
                        <Image
                            src={"/icon.png"}
                            width={34}
                            height={80}
                            alt="Code12 logo"
                            priority={true}
                            className="p-0.5"
                        />
                    </Link>

                    {!mobile && (
                        <>
                            <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.02] px-1.5 py-1">
                                {NAV.map((n) => (
                                    <Link
                                        key={n.href}
                                        onClick={navegation}
                                        href={n.href}
                                        aria-current={path === n.href ? "page" : undefined}
                                        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${path === n.href
                                            ? "bg-white/10 text-white"
                                            : "text-slate-400 hover:text-slate-100"
                                            }`}
                                    >
                                        {n.label}
                                    </Link>
                                ))}
                            </nav>
                            <Link
                                onClick={navegation}
                                href={"/contato"}
                                className="btn btn-primary !px-5 !py-1.5 text-sm text-center"
                            >
                                Contato
                            </Link>
                        </>
                    )}

                    {mobile && (
                        <button
                            type="button"
                            onClick={openMobileMenu}
                            aria-expanded={mobileMenu}
                            aria-controls="mobile-nav"
                            aria-label={mobileMenu ? "Fechar menu" : "Abrir menu"}
                            className={cn("flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-200 transition-colors duration-300 hover:border-amber-400/50 hover:text-amber-300")}
                        >
                            <span className="relative block h-4 w-4">
                                <Menu
                                    className={`absolute inset-0 h-4 w-4 transition-all duration-300 ${mobileMenu ? "scale-50 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
                                        }`}
                                />
                                <X
                                    className={`absolute inset-0 h-4 w-4 transition-all duration-300 ${mobileMenu ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-90 opacity-0"
                                        }`}
                                />
                            </span>
                        </button>
                    )}
                </div>

                <div
                    id="mobile-nav"
                    className={`
                        ${mobile ? "grid" : "hidden"}
                        w-full transition-[grid-template-rows] duration-500 ease-out 
                        ${mobileMenu ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} 
                        
                    }`}
                >
                    <div className="overflow-hidden">
                        <div className="flex flex-col gap-1 border-t border-white/10 pt-3 pb-1">
                            {NAV.map((n) => (
                                <Link
                                    key={n.href}
                                    onClick={navegation}
                                    href={n.href}
                                    aria-current={path === n.href ? "page" : undefined}
                                    className={`rounded-lg px-4 py-2.5 text-center text-base font-medium transition-colors duration-300 ${path === n.href ? "bg-white/10 text-white" : "text-slate-400 hover:text-slate-100"
                                        }`}
                                >
                                    {n.label}
                                </Link>
                            ))}
                            <Link onClick={navegation} href={"/contato"} className="btn btn-primary mt-1 w-full justify-center !py-2.5 text-sm">
                                Contato
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            {mobileMenu && (
                <div onClick={() => setMobileMenu(false)} className="fadeIn-sm fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" />
            )}
        </>
    );
}
