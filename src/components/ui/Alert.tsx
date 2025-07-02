"use client";

import { ContextProvider, GetContext } from "@/lib/ContextProvider";
import { CircleAlert, CircleCheckIcon } from "lucide-react";
import { useEffect } from "react";

export default function Alert({type, message} : {type: "sucesso" | "erro" | null, message: string}){

    const { setAlert } = GetContext() as ContextProvider ;

    useEffect(()=>{
        if(!type) return;

        const time = setTimeout(()=>{
            setAlert(null, "");
        }, 3800);

        return ()=>{
            clearTimeout(time);
        }

    },[type]);

    if(type === "sucesso")
        return(
            <div className="backdrop-blur border-eborder rounded-lg border shadow-md border-gray-200/30 bg-linear-to-bl from-blue-500/30 via-amber-500/5 to-purple-500/20 px-4 py-2 fixed z-50 bottom-4 right-18 fadeInUp">
                <p className="text-sm text-white">
                    <CircleCheckIcon
                    className="me-3 -mt-0.5 inline-flex text-emerald-500"
                    size={16}
                    aria-hidden="true"
                    />
                    {message}
                </p>
            </div>
        )

    if(type === "erro")
        return(
            <div className="backdrop-blur border-eborder rounded-lg border shadow-md border-gray-200/30 bg-linear-to-bl from-red-500/5 via-amber-500/5 to-red-500/20 px-4 py-2 fixed z-50 bottom-4 right-18 fadeInUp">
                <p className="text-sm text-white">
                    <CircleAlert
                    className="me-3 -mt-0.5 inline-flex text-red-500"
                    size={16}
                    aria-hidden="true"
                    />
                    {message}
                </p>
            </div>
        )

    return null;

}