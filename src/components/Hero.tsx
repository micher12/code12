
export default function Hero(){
    return(
        <main className="min-h-screen py-36 relative myHero">
            <div className="container-xl relative z-10 h-screen">
                <h2 className="w-fit animateText text-3xl sm:text-5xl xl:text-7xl font-bold bg-gradient-to-r from-amber-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">Olá, eu sou Michel!</h2>
                <h2 className="text-3xl xl:text-5xl font-bold italic mt-2">Desenvolvedor FullStack</h2>
                <p className="text-4xl sm:text-5xl mt-12 max-w-[300px] sm:max-w-[50%] font-semibold italic montserrat">Transformando ideias em experiências digitais excepcionais.</p>
                <h2 className="cursor-pointer myTransition-ease scale mt-10 font-bold bg-gradient-to-r from-amber-500 via-purple-500 to-pink-500 w-fit px-12 text-white rounded-full py-2 animateText hover:shadow-lg shadow-cyan-800/60">Ver projetos</h2>
            </div>
        </main>
    )
}