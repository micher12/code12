"use client";

import { LucideProps, MonitorSmartphone, Palette, SearchCheck } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import List from "./List";
import Image from "next/image";

interface listItems {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
    title: string,
    content: string,
}

const itemsList: listItems[][] = [
    [
        {title: "Interface", icon: MonitorSmartphone, content: "Totalmente responsivo"},
        {title: "Interface2", icon: MonitorSmartphone, content: "Totalmente responsivo"},
    ],
    [
        {title: "Interface", icon: MonitorSmartphone, content: "Totalmente responsiva"},
        {title: "Design", icon: Palette, content: "Atrativo, moderno e otimizado"},
        {title: "SEO", icon: SearchCheck, content: "SEO otimizado, seja encontrado pelas pesquisas, ganhe mais cliques e acessos."},
    ],

]

const projetos = [
    {titulo: "Dashboard CSM", image: "/projeto1.png", list: itemsList[0]},
    {titulo: "WebApps Dinâmicos", image: "/projeto1.png", list: itemsList[0]},
    {titulo: "Landing Page", image: "/projeto1.png", list: itemsList[1]}
]



export default function Projetos(){
    return(
        <div id="projetos" className="min-h-screen relative py-36 bg-gradient-to-tl from-amber-500/20 via-cyan-500/20 to-purple-500/20">
            <div className="container-xl">
                <h2 className="text-3xl sm:text-5xl font-bold text-white">Projetos</h2>

                <div className="flex flex-col mt-15 gap-20">
                    {projetos.map((item,index)=>(
                        <div>
                            <h2 className="font-bold text-white text-xl sm:text-3xl">{item.titulo}</h2>
                            <div key={index} className={`flex flex-col ${index%2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} lg:justify-between items-center gap-2 lg:gap-20`}>
                                <div className="w-full">
                                    <Image src={item.image} width={500} height={100} alt="Proejoto" quality={100} className="mt-5 lg:w-full mx-auto" />
                                </div>
                                <List items={item.list} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            
        </div>
    )
}