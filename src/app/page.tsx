import BackToTop from "@/components/BackToTop";
import Contato from "@/components/Contato";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projetos from "@/components/Projetos";
import Sobre from "@/components/Sobre";

export default function Home() {

    return (
        <>
            <Header />
            <Hero />
            <Sobre />
            <Projetos />
            <Contato />
            <BackToTop />
        </>
    );
}
