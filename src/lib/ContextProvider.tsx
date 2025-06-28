"use client";

import { createContext, ReactNode, SetStateAction, useContext, useState } from "react"


export interface ContextProvider{
    navegation: (e: React.MouseEvent<HTMLAnchorElement>)=> void,
    path: string,
    mobileMenu: boolean,
    setMobileMenu: React.Dispatch<SetStateAction<boolean>>,
}

const ContextProvider = createContext<ContextProvider | null>(null);

export function UseProvider({children}: {children: ReactNode}){

    const [mobileMenu, setMobileMenu] = useState(false);
    const [path, setPath] = useState("/");

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

    const values: ContextProvider = {
        navegation,
        path,
        mobileMenu,
        setMobileMenu,
    }

    return(
        <ContextProvider value={values}>
            {children}
        </ContextProvider>
    )

}

export function GetContext(){
    return useContext(ContextProvider);
}