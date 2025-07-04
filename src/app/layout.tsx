import type { Metadata } from "next";
import { Inter, Montserrat} from "next/font/google";
import "@/styles/global.css"
import { UseProvider } from "@/lib/ContextProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "Code12 | Dev. Michel",
    description: "Code12 é um portfólio de Michel. Desenvolvimento de Websites incríveis.",
    authors: [{name: "Michel", url: "https://code12.vercel.app/"}],
    keywords: [
        "Code12", "Desenvolvimento", "Web", "WebSites", "Sites", "Sites dinâmicos",
        "WebApp", "landing pages", "Páginas", "Programador", "Sistemas",
        "FullStack", "Next.js", "React", "JavaScript", "TypeScript", "Tailwind CSS",
        "Node.js", "Criação de sites", "Aplicações web", "Portfólios profissionais",
        "Web design", "Sites responsivos", "Programador web", "Desenvolvedor freelance",
        "Freelancer de sites", "SEO", "Integrações com API", "Site para empresas",
        "Site moderno", "Desenvolvimento personalizado"
    ],
    robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
        <head>
            <meta name="author" content="Code12 | Dev. Michel" />
            <meta name="keywords" content="Code12, Michel, Desenvolvimento, Web, WebSites, Programador, Sistemas, Páginas, Sites"></meta>
            <meta name="description" content="Code12 é um portfólio de Michel. Desenvolvimento de Websites incríveis."></meta>
            <meta name="title" content="Code12"></meta>
            <meta name="robots" content="index, follow"></meta>
            {/* FACEBOOK */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://code12.vercel.app/" />
            <meta property="og:title" content="Code12 | Dev. Michel" />
            <meta property="og:description" content="Code12 é um portfólio de Michel. Desenvolvimento de Websites incríveis." />
            <meta property="og:image" content="https://i.imgur.com/zEFwEA8.png"></meta>
            {/* TWITTER */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://code12.vercel.app/"/>
            <meta property="twitter:title" content="Code12 | Dev. Michel"/>
            <meta property="twitter:description" content="Code12 é um portfólio de Michel. Desenvolvimento de Websites incríveis."/>
            <meta property="twitter:image" content="https://i.imgur.com/zEFwEA8.png"></meta>


            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />

            <meta name="google-site-verification" content="DcS2F4DIyz9q4hteSY5vr2ekHekRbhcrDGHzqnydvRU" />

        </head>
        <body
            className={`${inter.variable} ${montserrat.variable} antialiased`}
        >
            <UseProvider>
                {children}
            </UseProvider>
        </body>
    </html>
  );
}
