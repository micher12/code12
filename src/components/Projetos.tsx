"use client";

import { ChartLine, ChevronsLeftRightEllipsis, CircleQuestionMark, Cog, File, Gauge, LayoutDashboard, LoaderPinwheel, Lock, LucideProps, MonitorSmartphone, Palette, Pencil, ReceiptText, ScanQrCode, SearchCheck, UserRoundPlus } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import List from "./List";
import Image from "next/image";
import Link from "next/link";

interface listItems {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
    title: string,
    content: string,
}

const itemsList: listItems[][] = [
    [   
        {title: "Dashboard", icon: LayoutDashboard, content: "O dashboard gera todas as métricas necessárias para CSM, dessa forma é possível ver a quantidade de clientes, ordens em aberto, o faturamento bruto e líquido do mês e comparar com os 6 meses anteriores. Dessa forma tendo mais controle financeiro."},
        {title: "Criar OS", icon: UserRoundPlus, content: "É possível buscar um cliente cadastrado pelo Nome, Email, Telefone ou CEP se existir ele será listado. Caso não exista será criado junto com a OS. Ao digitar o CEP será buscado automaticamente pelo endereço do cliente, faltando apenas o complemento para maiores detalhes."},
        {title: "Gerar OS", icon: File, content: "Faz a expedição de um PDF com todos os dados do cliente, produto e empresa."},
        {title: "Gerar Recibo", icon: ReceiptText, content: "Faz a expedição do recibo através de um PDF sobre os dados da ordem, confirmando o pagamento e finalização do serviço"},
        {title: "QR Code", icon: ScanQrCode, content: "A ordem de serviço tem um QR Code tanto para o cliente, quanto para a empresa. O QR Code do cliente é possível ver o Status da ordem: \"Em análise\" ou \"Finalizada\". Para a empresa pelo WebApp é possível utilizar a câmera do celular para obter todos os dados da ordem e finalizar ou editar pelo celular"},
    ],
    [
        {title: "PWA (Progressive Web App)", icon: LoaderPinwheel, content: "É realizado toda a otimização necessária para o Website funcionar perfeitamente como App. Utilizando PWA é possível deixar \"instalado\" e acessar em qualquer lugar a qualquer hora desde que se tenha internet."},
        {title: "Velocidade", icon: Gauge, content: "Para manter a velocidade e desempenho, cada requisição é pensada e otimizada utilizando estrutura de dados para retornar o menor tempo possível."},
        {title: "Segurança", icon: Lock, content: "Para manter a segurança em sessões privadas, foi utilizado o JWT para crias hash das sessões e foram armazenados em Cookies HttpOnly e Strict, antes  de realizar qualquer ação é realizado toda a verificação do hash pelo back-end para validar essa sessão. A parte de gerenciamente de autenticação são realizadas pelo Firebase Admin Auth"},
        {title: "Tecnologias", icon: ChevronsLeftRightEllipsis, content: "Vários projetos foram desenvolvidos, dentre eles já utilizei as seguintes tecnologias: NextJS, ReactJS, TypeScript, JavaScript, PHP, MySQL, PostgreSQL, DynamoDB, D1, Firebase, TailWindCSS, BootStrap"},
    ],
    [
        {title: "Desempenho", icon: ChartLine, content: "A partir de vários treinamentos conseguiu como média 97% de acurácia."},
        {title: "Implementação", icon: Pencil, content: "A partir de uma API, foi possível disponibilizar a interação da IA com um website. No website mostra os resultados das notícias recentemente classificadas, possuí um histórico contendo todas as classificações realizadas anteriormente podendo ser filtradas pela classificação e palavra."},
        {title: "Configurações", icon: Cog, content: "Foi desenvolvido com Python, utilizando como rede neural o CNN (Convolutional Neural Network) + BERTimbau da Neuralmind para realizar PLN (Processamento de Linguagem Natural)."},
    ],
    [
        {title: "Problema / Solução", icon: CircleQuestionMark, content: "Ordenar de fato as imagens não é a solução direta, isso porque tentar colocar 100 mil imagens na memória para conseguir ordernar não é viável. A solução é ordenar algum metadado relacionado e recuperar a imagem correspondente através do ID."},
        {title: "Desempenho", icon: ChartLine, content: "Com o total de 103.117 mil dados cada um com 2 imagens, foi possível ordenar através de um código gerado aleatoriamente na hora do cadastro, com um tempo total de 32ms pelo MergeSort."},
        {title: "Tecnologias", icon: ChevronsLeftRightEllipsis, content: "Projeto desenvolvido com Java e MySQL."},
    ],
    [
        {title: "Interface", icon: MonitorSmartphone, content: "Totalmente responsiva."},
        {title: "Design", icon: Palette, content: "Atrativo, moderno e desempenho otimizado."},
        {title: "SEO", icon: SearchCheck, content: "SEO otimizado, seja encontrado pelas pesquisas, ganhe mais cliques e acessos."},
    ],

]

const projetos = [
    {
        titulo: "Dashboard CSM", 
        about: "Trata-se do projeto de um WebApp real, no qual foi desenvolvido uma dashboard para expedição de ordens de serviço, com todas funcionalidades para gerencia-las.", 
        image: "/projeto1.png", 
        list: itemsList[0], 
        link: ""
    },
    {
        titulo: "WebApps", 
        about: "Websites dinâmicos, autenticação, criptografia, checkout, e-commerce, catálogos.", 
        image: "/projeto2.png", 
        list: itemsList[1], 
        link: "https://eletronicaowl.vercel.app/"
    },
    {
        titulo: "Inteligência Artificial", 
        about: "Desenvolvimento da PlanetAI, seu objetivo é analisar sentimentos de conteúdos relacionados ao meio ambiente, classificando-os como positivos, negativos ou irrelevantes, caso não tenham relação com o tema.", 
        image: "/projeto3.png", 
        list: itemsList[2], 
        link: "https://github.com/micher12/planetai"
    },
    {
        titulo: "Estrutura de dados", 
        about: "Projeto que tem como objetivo ordenar 100 mil imagens sobre o bioma do cerrado. Para isso foi implementado 3 estruturas de dados para ordenar com a maior eficiência possível, os métodos escolhidos foram: TimSort, HeapSort e MergeSort.", 
        image: "/projeto4.png", 
        list: itemsList[3], 
        link:"https://github.com/micher12/geoprocessamento"
    },
    {
        titulo: "Landing Page", 
        about: "Desenvolvidas para maximizar a conversão de vendas ou servir como um mostruário elegante e moderno para apresentação de produtos, serviços ou portfólio.", 
        image: "/projeto5.png", 
        list: itemsList[4], 
        link:"https://github.com/micher12/landingpage"
    },
]



export default function Projetos(){
    return(
        <div id="projetos" className="min-h-screen relative py-36 bg-gradient-to-tl from-amber-500/20 via-cyan-500/20 to-purple-500/20">
            <div className="container-xl">
                <h2 className="text-3xl sm:text-5xl font-bold text-white">Projetos</h2>

                <div className="flex flex-col mt-15 gap-20">
                    {projetos.map((item,index)=>(
                        <div key={index}>
                            <h2 className="font-bold text-white text-xl sm:text-3xl">{item.titulo}</h2>
                            <p className="mt-5 max-w-[600px]">{item.about}</p>
                            <div className={`flex flex-col ${index%2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} lg:justify-between items-center gap-2 lg:gap-20`}>
                                <div className="w-full">
                                    <Image src={item.image} width={500} height={100} alt="Proejoto" quality={100} className="mt-5 lg:w-full mx-auto" />
                                </div>
                                <div className="flex flex-col w-full">
                                    <List items={item.list} />
                                    {index > 0 && <Link target="_blank" href={item.link} className="w-fit bg-blue-500 font-bold px-12 py-1.5 text-lg rounded mt-5 cursor-pointer">VER PROJETO {index === 1 && "REAL"}</Link>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            
        </div>
    )
}