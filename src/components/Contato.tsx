"use client";

import getToken from "@/lib/getToken";
import { InputMask } from 'primereact/inputmask';
import { ContextProvider, GetContext } from "@/lib/ContextProvider";

export default function Contato(){

    const { setAlert } = GetContext() as ContextProvider;

    async function sendMail(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

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
            return setAlert("erro", "Não foi possível enviar no momento");

        setAlert("sucesso", "Contato enviado com sucesso!")

    }

    return(
        <div id="contato" className="py-36 bg-radial-[at_75%_5%] from-cyan-500/40 via-slate-500/20 to-pink-800/20">
            <div className="container-xl">
                <h2 className="text-3xl sm:text-5xl font-bold">Contato</h2>
                <form onSubmit={sendMail} className="bg-radial-[at_80%_5%] from-slate-500/20 via-slate-500/20 to-slate-800/20 w-full sm:max-w-[500px] lg:max-w-[600px] mx-auto border border-gray-200/30 shadow-lg shadow-cyan-200/20 rounded-xl p-6 mt-10 flex flex-col gap-5 backdrop-blur">
                    <h2 className="font-bold text-white">Formulário de contato</h2>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-white">Nome</label>
                        <input name="nome" type="text" className="rounded outline-none px-3 montserrat bg-slate-500/30 py-1 border border-gray-200/5 text-white font-semibold text-sm" placeholder="Coloque seu nome" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-white">Email</label>
                        <input name="email" type="email" className="rounded outline-none px-3 montserrat bg-slate-500/30 py-1 border border-gray-200/5  text-white font-semibold text-sm" placeholder="Coloque seu email" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-white">Telefone Whatsapp</label>
                        <InputMask mask="(99) 99999-9999" autoClear={false} name="telefone" className="rounded outline-none px-3 montserrat bg-slate-500/30 py-1 border border-gray-200/5  text-white font-semibold text-sm" placeholder="(13) 92222-2222" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-white">Mensagem</label>
                        <textarea name="message" className="rounded outline-none px-3 montserrat bg-slate-500/30 py-1 border border-gray-200/5 text-white font-semibold text-sm h-[120px]" placeholder="Coloque sua mensagem" required />
                    </div>
                    <input type="submit" value={"Enviar"} className="bg-blue-500 py-1 font-bold text-xl cursor-pointer rounded" />
                </form>
            </div>
        </div>
    )
}