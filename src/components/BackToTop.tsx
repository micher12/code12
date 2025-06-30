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
            <div onClick={backTop} className={`fixed z-10 bottom-5 right-5 cursor-pointer p-0.5 bg-blue-500/60 rounded-full shadow-sm fadeInUp`}>
                <ChevronUp />
            </div>
        )
}