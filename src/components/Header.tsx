"use client";

import { ContextProvider, GetContext } from "@/lib/ContextProvider";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header(){


    const [scrolled, setScrolled] = useState(false);
    const [mobile, setMobile] = useState(false);
    const { path, mobileMenu, navegation, setMobileMenu } = GetContext() as ContextProvider ;

    useEffect(()=>{

        function scrolled(){
            const height = window.scrollY;

            if(height > 200)
                return setScrolled(true)

            setScrolled(false);
        }

        function resized(){
             
            const width = window.innerWidth;
            
            if(width <= 500)
                return setMobile(true)

            if(mobileMenu)
                setMobileMenu(false)

            return setMobile(false);
        }

        resized()
        scrolled()

        window.addEventListener("scroll", scrolled)
        window.addEventListener("resize", resized)

        return ()=>{
            return window.removeEventListener("scroll",scrolled), window.removeEventListener("resize", resized);
            
        }

    },[mobileMenu])

    function openMobileMenu(){
        if(!mobile) return;

        setMobileMenu(!mobileMenu);
    }


    return(
        <>
        <header className={`left-[50%] translate-x-[-50%] mt-4 px-2 py-1 flex items-center z-50 backdrop-blur rounded-2xl bg-blue-200/10 fixed border border-slate-200/10 myTransition-ease
            ${scrolled 
            ? `${mobile 
                ? `${!mobileMenu ? "w-[220px]" : "w-[90%]!"}` 
                : "w-[85%] sm:w-[70%]"}` 
            : "w-[90%] sm:w-[75%]"} 

            ${!mobile 
            ? "justify-between" 
            : `justify-center flex-col gap-4
                ${!mobileMenu  
                    ? " w-[150px] " 
                    : "w-[80%]!"}`}`}  
        >
            <Image onClick={()=>{openMobileMenu()}} src={"/icon.png"} width={mobile ? 80 : 55} height={80} alt="Logo" priority={true}  className={`p-1 ${mobile && "cursor-pointer"}`} />
            {!mobile && (
                <div className="w-full flex items-center justify-end">
                    <div className="w-full flex items-center justify-center gap-5 font-bold text-slate-200/60">
                        <Link onClick={navegation} href={"/"} className={`${path === "/" ? "border-b-2 border-white text-white" : "hover:text-slate-200"}`} >Início</Link>
                        <Link onClick={navegation} href={"/sobre"} className={`${path === "/sobre" ? "border-b-2 border-white text-white" : "hover:text-slate-200"}`} >Sobre</Link>
                        <Link onClick={navegation} href={"/projetos"} className={`${path === "/projetos" ? "border-b-2 border-white text-white" : "hover:text-slate-200"}`} >Projetos</Link>
                    </div>
                    <div>
                        <Link onClick={navegation} href={"/contato"} className="bg-white myTransition hover:bg-slate-800 hover:text-white rounded-full px-4 py-1 font-semibold cursor-pointer text-slate-800">Contato</Link>
                    </div>
                </div>
            )}
            {mobileMenu && (
                <div className="flex flex-col gap-4 items-center pb-2.5 font-bold fadeIn-sm">
                    <Link onClick={navegation} href={"/"} className={`text-xl ${path === "/" ? "border-b-2 border-white text-white" : "hover:text-slate-200"}`} >Início</Link>
                    <Link onClick={navegation} href={"/sobre"} className={`text-xl ${path === "/sobre" ? "border-b-2 border-white text-white" : "hover:text-slate-200"}`} >Sobre</Link>
                    <Link onClick={navegation} href={"/projetos"} className={`text-xl ${path === "/projetos" ? "border-b-2 border-white text-white" : "hover:text-slate-200"}`} >Projetos</Link>
                    <Link onClick={navegation} href={"/contato"} className="bg-white myTransition hover:bg-slate-800 hover:text-white rounded-full px-4 py-1 font-semibold cursor-pointer text-slate-800">Contato</Link>
                </div>
            )}
        </header>
        {mobileMenu && <div onClick={()=>setMobileMenu(false)} className="z-40 fixed bg-black/50 top-0 left-0 w-full min-h-screen pointer-events-auto backdrop-blur-xs fadeIn-sm"/>}
        </>
    )
}