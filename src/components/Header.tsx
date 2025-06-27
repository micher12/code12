"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header(){


    const [scrolled, setScrolled] = useState(false);
    const [path, setPath] = useState("");

    useEffect(()=>{

        function scrolled(){
            const height = window.scrollY;

            if(height > 200)
                return setScrolled(true)

            setScrolled(false);
        }

        window.addEventListener("scroll", scrolled)
        setPath(window.location.pathname)

        return ()=>{
            return window.removeEventListener("scroll",scrolled);
        }

    },[])

    return(
        <header className={`left-[50%] translate-x-[-50%] mt-4 px-2 py-1 flex items-center justify-between gap-8 z-50 backdrop-blur rounded-full bg-blue-200/10 fixed border border-slate-200/10 myTransition
        ${scrolled ? "w-[85%] sm:w-[70%]" : "w-[90%] sm:w-[75%] "}`} >
            <Image src={"/icon.png"} width={55} height={80} alt="Logo" priority={true}  className="p-1" />
            <div className="w-full flex items-center justify-end">
                <div className="w-full flex items-center justify-center gap-5 font-bold text-slate-200/60">
                    <Link href={"/"} className={`${path === "/" ? "border-b-2 border-white text-white" : ""}`} >Início</Link>
                    <Link href={"/"}>Sobre</Link>
                    <Link href={"/"}>Projetos</Link>
                </div>
                <div>
                    <Link href={"/"} className="bg-white myTransition hover:bg-slate-800 hover:text-white rounded-full px-4 py-1 font-semibold cursor-pointer text-slate-800">Contato</Link>
                </div>
            </div>
        </header>
    )
}