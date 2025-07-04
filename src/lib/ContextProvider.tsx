"use client";

import Alert from "@/components/ui/Alert";
import Loader from "@/components/ui/Loader";
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
    setLoading: Dispatch<SetStateAction<boolean>>,
    setPath: Dispatch<SetStateAction<string>>,
    ignoreScroll: boolean,
}

const ContextProvider = createContext<ContextProvider | null>(null);

export function UseProvider({children}: {children: ReactNode}){

    const [mobileMenu, setMobileMenu] = useState(false);
    const [path, setPath] = useState("/");
    const [ignoreScroll, setIgnoreScroll] = useState(false);
    const [typeAlert, setTypeAlert] = useState<"sucesso" | "erro" | null >(null);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    function navegation(e: React.MouseEvent<HTMLAnchorElement>){
        e.preventDefault();

        const id = (e.target as HTMLAnchorElement).pathname.split("/")[1];

        if(id.trim() === ""){
            setPath("/")
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            setMobileMenu(false);
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
        setIgnoreScroll(true);

        setTimeout(()=>{
            setIgnoreScroll(false);
        },1000);
        
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
        setLoading,
        setPath,
        ignoreScroll,
    }

    return(
        <ContextProvider value={values}>
            {children}
            <Alert type={typeAlert} message={message} />
            <Loader loading={loading} />
        </ContextProvider>
    )

}

export function GetContext(){
    return useContext(ContextProvider);
}