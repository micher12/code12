import { useInView } from "framer-motion";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes, useRef } from "react";
import Image from "next/image";
import List from "../List";
import Link from "next/link";

interface listItems {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
    title: string,
    content: string,
}

interface itemProps{
    titulo: string;
    about: string;
    image: string;
    list: listItems[];
    link: string;
}

export default function SingleItem({item, index}: {item: itemProps, index: number}){

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount: 0.4})

    return(
        <div ref={ref} key={index} className={`opacity-0 ${isInView && "fadeInQuickUp"} `} >
            <h2 className="font-bold text-white text-xl sm:text-3xl">{item.titulo}</h2>
            <p className="mt-5 max-w-[600px]">{item.about}</p>
            <div className={`min-h-[400px] flex flex-col ${index%2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} lg:justify-between items-center gap-2 lg:gap-20`}>
                <div className="w-full">
                    <Image src={item.image} width={500} height={100} alt="Projeto" quality={100} priority={true} className="mt-5 lg:w-full mx-auto" />
                </div>
                <div className="flex flex-col w-full">
                    <List items={item.list} />
                    {index > 0 && <Link target="_blank" href={item.link} className="w-fit bg-blue-500 font-bold px-12 py-1.5 text-lg rounded mt-5 cursor-pointer">VER PROJETO {index === 1 && "REAL"}</Link>}
                </div>
            </div>
        </div>
    )
}