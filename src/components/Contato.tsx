"use client";

import getToken from "@/lib/getToken";
import { InputMask } from 'primereact/inputmask';
import { ContextProvider, GetContext } from "@/lib/ContextProvider";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
        

export default function Contato(){

    const { setAlert, setLoading } = GetContext() as ContextProvider;

    async function sendMail(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        try {
            setLoading(true);

            const form = new FormData(e.currentTarget);

            const nome = form.get("nome");
            const email = form.get("email");
            const message = form.get("message");
            const telefone = form.get("telefone");

            if(!nome || !email || !message || !telefone || nome.toString().trim() === "" || email.toString().length < 9 || message.toString().trim() === "" || telefone.toString().includes("_"))
                return  setAlert("erro", "Preencha todos os campos corretamente");

            const response = await fetch("/api/sendmail",{
                method: "POST",
                body: JSON.stringify({nome, email, message, telefone}),
                headers:{
                    "Content-type":"application/json",
                    "Authorization": `Bearer ${await getToken()}`
                }
            }).then(res => res.json());

            if(!response.sucesso)
                return setAlert("erro", response.erro);

            setAlert("sucesso", "Contato enviado com sucesso!");

        } finally  {
            setLoading(false);
        }

    }

    return(
        <div id="contato" className="relative overflow-hidden py-28">
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-[30rem] w-[30rem] rounded-full glow-teal blur-3xl opacity-25" />

            <div className="container-xl relative z-10">
                <p className="eyebrow">03 · Contato</p>
                <h2 className="display mt-5 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
                    Vamos construir <span className="text-amber-300">juntos</span>.
                </h2>
                <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
                    Tem um projeto em mente? Me conte a ideia — respondo o quanto antes.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                    {[
                        { icon: <Github className="h-5 w-5" />, href: "https://www.github.com/micher12", label: "GitHub" },
                        { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/michel-alves-da-silva-0a1834212/", label: "LinkedIn" },
                        { icon: <Mail className="h-5 w-5" />, href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=Contato&body=Olá vim pelo website!`, label: "Email" },
                        { icon: <FontAwesomeIcon className="h-5 w-5" icon={faWhatsapp} />, href: `https://wa.me/${process.env.NEXT_PUBLIC_TELEFONE}?text=Olá%20vim%20pelo%20website!`, label: "Whatsapp" },
                        { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/micher.12/", label: "Instagram" },
                    ].map((s, i) => (
                        <Link key={i} target="_blank" href={s.href} aria-label={s.label}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400/60 hover:text-teal-300">
                            {s.icon}
                        </Link>
                    ))}
                </div>

                <form onSubmit={sendMail} className="mt-12 w-full max-w-xl space-y-6 rounded-2xl border border-white/10 bg-surface/70 p-8 backdrop-blur sm:p-10">
                    <h3 className="display text-xl font-semibold">Envie uma mensagem</h3>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="nome" className="text-sm font-medium">Nome</label>
                        <input id="nome" name="nome" type="text"
                            className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-slate-600 focus:border-amber-400/60"
                            placeholder="Seu nome" required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input id="email" name="email" type="email"
                            className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-slate-600 focus:border-amber-400/60"
                            placeholder="voce@email.com" required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="telefone" className="text-sm font-medium">Whatsapp</label>
                        <InputMask id="telefone" mask="(99) 99999-9999" autoClear={false} name="telefone"
                            className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-slate-600 focus:border-amber-400/60"
                            placeholder="(13) 92222-2222" required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
                        <textarea id="message" name="message"
                            className="h-[120px] rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-slate-600 focus:border-amber-400/60"
                            placeholder="Conte sobre seu projeto..." required />
                    </div>

                    <input type="submit" value="Enviar mensagem"
                        className="btn btn-primary w-full cursor-pointer justify-center !py-3 text-base" />
                </form>
            </div>
        </div>
    )
}