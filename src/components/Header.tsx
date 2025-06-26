"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header(){


    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{

        function scrolled(){
            const height = window.scrollY;

            if(height > 200)
                return setScrolled(true)

            setScrolled(false);
        }

        window.addEventListener("scroll", scrolled)

        return ()=>{
            return window.removeEventListener("scroll",scrolled);
        }

    },[])

    return(
        <header className={`left-[50%] translate-x-[-50%] mt-4 px-2 py-1 flex items-center z-50 backdrop-blur rounded-full bg-blue-200/10 fixed border border-slate-200/10 myTransition
        ${scrolled ? "w-[85%] sm:w-[70%]" : "w-[90%] sm:w-[75%] "}`} >
            <Image src={"/icon.png"} width={55} height={80} alt="Logo" priority={true}  className="p-1" />
        </header>
    )
}