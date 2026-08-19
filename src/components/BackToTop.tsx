"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop(){

    const [ativado, setAtivado] = useState(false);

    useEffect(()=>{

        const scrolled = ()=>{
            const altura = window.scrollY;

            if(altura > 300)
                return setAtivado(true);

            return setAtivado(false);
        }

        window.addEventListener("scroll",scrolled);

        return ()=>{
            window.removeEventListener("scroll", scrolled);
        }

    },[]);

    const backTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    if(ativado)
        return(
            <button
                onClick={backTop}
                aria-label="Voltar ao topo"
                className={`fadeInUp fixed bottom-5 right-5 z-40 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-amber-400/30 bg-[#0d0d12]/80 text-amber-300 shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/60 hover:text-amber-200`}
            >
                <ChevronUp className="h-5 w-5" />
            </button>
        )
}