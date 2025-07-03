
const tecnologias = [
    {name: "NextJS", habilidade: 90},
    {name: "ReactJS", habilidade: 78},
    {name: "JS | TS", habilidade: 96},
    {name: "Java", habilidade: 80},
    {name: "PHP", habilidade: 75},
    {name: "Python", habilidade: 75},
    {name: "GIT", habilidade: 50},
]

const tecnologias2 = [
    {name: "HTML/CSS", habilidade: 100},
    {name: "TailWindCSS", habilidade: 95},
    {name: "SQL", habilidade: 98},
    {name: "Firebase", habilidade: 95},
    {name: "DynamoDB", habilidade: 80},
    {name: "CloudFlare D1", habilidade: 95},
]


export default function Sobre(){

    return(
        <div id="sobre" className="relative py-36 pb-50 bg-slate-900 bg-center bg-cover" style={{backgroundImage: "url('/gradient.png')"}}>
            <div className="container-xl relative z-10">
                <h2 className="text-3xl sm:text-5xl text-white font-bold">Sobre</h2>
                <div className="mt-10 flex flex-col items-center xl:items-stretch xl:flex-row w-full gap-8">
                    <div className="flex flex-col items-center w-full md:w-[50%] xl:w-[45%] rounded-2xl p-3 bg-slate-800 bg-[radial-gradient(ellipse_at_top,_rgba(0,255,189,0.2)_0%,_transparent_60%)] shadow-slate-700/30 shadow-xl border border-slate-200/5">
                        <div className="w-48 h-48 rounded-full bg-cover bg-center" style={{backgroundImage: "url('perfil.jpg')"}} />
                        <p className="text-sm font-bold mt-4">Michel Alves da Silva</p>
                        <p className="text-sm font-semibold italic ">Desenvolvedor FullStack</p>
                        <p className="w-full text-md font-semibold montserrat mt-4 p-2">Sou desenvolvedor FullStack especializado em WebApps completos, responsivo e back-end totalmente integrado. Atualmente, atuo como freelancer no desenvolvimento de sites completos.</p>
                    </div>
                    <div className="w-full bg-slate-800 rounded-2xl p-5 flex flex-col lg:flex-row justify-between gap-5 lg:gap-8 shadow-slate-700/30 border border-slate-200/5 shadow-xl">
                        <div className="w-full flex flex-col h-full gap-5 justify-evenly">
                            {tecnologias.map((item,index)=>(
                                <div key={index} className="w-full flex items-center gap-4">
                                    <h2 className="whitespace-nowrap w-38 lg:w-24">{item.name}</h2>
                                    <div className="w-full relative border rounded-full py-2.5">
                                        <div className={`absolute top-0 left-0 bg-gradient-to-r from-blue-200/20 via-slate-200/60 to-purple-200 h-full rounded-full `} style={{width: item.habilidade+"%"}} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full flex flex-col h-full justify-evenly gap-5">
                            {tecnologias2.map((item,index)=>(
                                <div key={index} className="w-full flex items-center gap-4">
                                    <h2 className="whitespace-nowrap w-38">{item.name}</h2>
                                    <div className="w-full relative border rounded-full py-2.5">
                                        <div className={`absolute top-0 left-0 bg-gradient-to-r from-blue-200/20 via-slate-200/60 to-purple-200 h-full rounded-full`} style={{width: item.habilidade+"%"}} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}