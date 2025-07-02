"use client";

import Alert from "@/components/ui/Alert";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"


export interface ContextProvider{
    navegation: (e: React.MouseEvent<HTMLAnchorElement>)=> void,
    path: string,
    mobileMenu: boolean,
    setMobileMenu: Dispatch<SetStateAction<boolean>>,
    setTypeAlert: Dispatch<SetStateAction<"sucesso" | "erro" | null>>
    typeAlert: "sucesso" | "erro" | null,
    message: string,
    setMessage: Dispatch<SetStateAction<string>>,
    setAlert: (type: "sucesso" | "erro" | null, message: string) => void
}

const ContextProvider = createContext<ContextProvider | null>(null);

export function UseProvider({children}: {children: ReactNode}){

    const [mobileMenu, setMobileMenu] = useState(false);
    const [path, setPath] = useState("/");
    const [typeAlert, setTypeAlert] = useState<"sucesso" | "erro" | null >(null);
    const [message, setMessage] = useState("");

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
        
        const altura = element.getBoundingClientRect().top + scrollY;

        window.scrollTo({
            top: altura,
            behavior: "smooth"
        })

        setPath("/"+id);
        
        if(mobileMenu)
            setMobileMenu(false);
    }

    function setAlert(type: "sucesso" | "erro" | null, message: string){
        setTypeAlert(type);
        setMessage(message);
    }

    const values: ContextProvider = {
        navegation,
        path,
        mobileMenu,
        setMobileMenu,
        message,
        setTypeAlert,
        setMessage,
        typeAlert,
        setAlert,
    }

    return(
        <ContextProvider value={values}>
            {children}
            <Alert type={typeAlert} message={message} />
        </ContextProvider>
    )

}

export function GetContext(){
    return useContext(ContextProvider);
}