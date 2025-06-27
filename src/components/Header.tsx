"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header(){


    const [scrolled, setScrolled] = useState(false);
    const [path, setPath] = useState("/");
    const [mobile, setMobile] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    

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

        window.addEventListener("scroll", scrolled)
        window.addEventListener("resize", resized)

        resized()
        scrolled()

        return ()=>{
            return window.removeEventListener("scroll",scrolled), window.removeEventListener("resize", resized);
            
        }

    },[mobileMenu])

    function openMobileMenu(){
        if(!mobile) return;

        setMobileMenu(!mobileMenu);
    }

    function navegation(e: React.MouseEvent<HTMLAnchorElement>){
        e.preventDefault();

        const val = (e.target as HTMLAnchorElement).href;

        const thisPath = process.env.NEXT_PUBLIC_DOMAIN as string;
        const id = val.split(thisPath)[1];

        if(id.trim() === ""){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            setMobileMenu(false);
            setPath("/");
            return
        }

        const element = document.getElementById(id);

        if(!element) return setMobileMenu(false);

        const altura = element.offsetHeight;

        window.scrollTo({
            top: (altura + 288),
            behavior: "smooth"
        })

        setPath("/"+id);
        
        if(mobileMenu)
            setMobileMenu(false);
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
            ? "justify-between gap-8" 
            : `justify-center flex-col gap-3
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
                        <Link href={"/"} className="bg-white myTransition hover:bg-slate-800 hover:text-white rounded-full px-4 py-1 font-semibold cursor-pointer text-slate-800">Contato</Link>
                    </div>
                </div>
            )}
            {mobileMenu && (
                <div className="flex flex-col gap-3 items-center pb-2.5 font-bold fadeIn-sm">
                    <Link onClick={navegation} href={"/"} className={`text-xl ${path === "/" ? "border-b-2 border-white text-white" : "hover:text-slate-200"}`} >Início</Link>
                    <Link onClick={navegation} href={"/sobre"} className={`text-xl ${path === "/sobre" ? "border-b-2 border-white text-white" : "hover:text-slate-200"}`} >Sobre</Link>
                    <Link onClick={navegation} href={"/projetos"} className={`text-xl ${path === "/projetos" ? "border-b-2 border-white text-white" : "hover:text-slate-200"}`} >Projetos</Link>
                </div>
            )}
        </header>
        {mobileMenu && <div onClick={()=>setMobileMenu(false)} className="z-40 fixed bg-black/50 top-0 left-0 w-full min-h-screen pointer-events-auto backdrop-blur-xs fadeIn-sm"/>}
        </>
    )
}