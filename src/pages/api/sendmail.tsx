import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer"
import jwt from "jsonwebtoken";

const requestStore: { [ip: string]: number } = {};

export default async function sendmail(req: NextApiRequest, res: NextApiResponse){

    if(req.method !== "POST")
        return res.status(405).json({erro: "Método inválido!"})

    if(!req.headers.authorization)
        return res.status(401).json({erro: "Acesso negado"})

    if(!req.body || !req.body.nome || !req.body.email || !req.body.message || !req.body.telefone)
        return res.status(404).json({erro: "Requisição errada."})

    try {

        const token = req.headers.authorization.split("Bearer ")[1];

        if(!token)
            return res.status(401).json({erro: "Acesso negado"})

        const decoded = jwt.verify(token, process.env.JWT_TOKEN as string) as jwt.JwtPayload;

        if(decoded.exp as number > Date.now())
            return res.status(401).json({erro: "Acesso negado!"})

        const ip = req.headers['x-forwarded-for'] as string || 'anonymous';

        if(requestStore[ip]){
            const date = requestStore[ip];
            const result = (Date.now() - date) < 5 * 60 * 1000 // 5 minutos

            if(result)
                return res.status(429).json({erro: "Aguarde um momento!"})
        }

        requestStore[ip] = Date.now();

        const nome = req.body.nome;
        const email = req.body.email;
        const message = req.body.message;
        const telefone = req.body.telefone;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "contatocode12@gmail.com",
                pass: process.env.GMAIL_PASSWORD,
            },
        });

        const body = `
        <!DOCTYPE html>
        <html lang="pt-br">
            <head>
            <meta charset="UTF-8" />
            <style>
                body {
                font-family: Arial, sans-serif;
                background-color: #f9f9f9;
                color: #333;
                padding: 20px;  
                }
                .container {
                    background-color: #1d293d;
                    border: 1px solid #e5e5e5;
                    border-radius: 8px;
                    padding: 20px;
                    max-width: 1140px;
                    margin: auto;
                }
                h1 {
                color: #ffffff;
                font-size: 20px;
                margin-bottom: 20px;
                }
                p {
                font-size: 16px;
                line-height: 1.5;
                }
                .label {
                font-weight: bold;
                color: #ffffff;
                }
                .value {
                    margin-bottom: 15px;
                    color: #d0e4ff;
                    font-weght: 500;
                }
            </style>
            </head>
            <body>
            <div class="container">
                <h1>📩 Novo contato recebido</h1>
                <p><span class="label">Nome:</span><br/><span class="value">${nome}</span></p>
                <p><span class="label">E-mail:</span><br/><span class="value">${email}</span></p>
                <p><span class="label">Telefone:</span><br/><span class="value">${telefone}</span></p>
                <p><span class="label">Mensagem:</span><br/><span class="value">${message}</span></p>
            </div>
            </body>
        </html>
        `

        await transporter.sendMail({
            from: '"Code12" <contatocode12@gmail.com>',
            to: "contatocode12@gmail.com",
            subject: "Contato recebido ✅",
            text: "Novo contato recebido",
            html: body, 
        });

        return res.status(200).json({sucesso: "ok"})

    } catch (error)  {
        const erro = error as Error;
        if(erro.message.includes("jwt expired"))
            return res.status(401).json({erro: "Acesso negado!"})
        return res.status(400).json({erro: "Algo deu errado"})
    }

}

setInterval(() => {
    console.log("CHAMEI")
    const now = Date.now();
    for (const ip in requestStore) {
        if (now - requestStore[ip] > (5 * 60 * 1000)) {
            delete requestStore[ip];
        }
    }
}, 60 * 60 * 1000); // Limpa a cada hora