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
  description: "Code12 é um portfolio de Michel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
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
