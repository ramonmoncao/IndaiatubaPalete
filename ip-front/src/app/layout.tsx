import type { Metadata } from "next";
import { Bebas_Neue, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: {
    default: 'Indaiatuba Palete',
    template: '%s | Indaiatuba Palete'

  },
  description: "Os melhores paletes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
        <nav id="navbar">
            <div id="nav_logo">
                <img src="/ipicon.png" id="logo_icon"/>
            </div>

            <div id="nav_list">
                <button className="btn">Início</button>
                <button className="btn">Sobre nós</button>
                <button className="btn">Catálogo</button>
                <button id="btn-navbar">
                  <strong>CONTATE-NOS</strong>
                </button>
                
            </div>
        </nav>
    </header>
        {children}
        <footer>
        <div id="footer_items">
            <span id="copyright">
                &copy 2024 Pallets Indaiatuba - Todos os direitos reservados
            </span>
            <ul id="footer_list">
                <li>
                    <a href="#home">Início</a>
                </li>
                <li>
                    <a href="#about">Sobre nós</a>
                </li>
                <li>
                    <a href="#catalog">Catálogo</a>
                </li>
                <li>
                    <a href="#contact">Contate-nos</a>
                </li>
            </ul>
            <div id="footer-contents">
                <h2>Indaiatuba palete</h2>
                <h1>endereço aqui</h1>
                <br />
                <h1><strong>Fale conosco:</strong> +55 (19) 991328457 </h1>
                <br />
                <h1><strong>Whatsapp:</strong> +55 (19) 995000074</h1>
                <br />
                <h1>comercial@robertopaletes.com.br</h1>
            </div>
        </div>
    </footer>

      </body>
    </html>
  );
}
