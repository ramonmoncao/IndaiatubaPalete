import type { Metadata } from "next";
import { Bebas_Neue, Geist, Geist_Mono, Ubuntu } from "next/font/google";
import Image from "next/image";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: "500"  
})
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
        className={`${ubuntu.variable} ${bebasNeue.variable}
          ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer id='footer'>
        <div id= "footer-div">
          <div id="footer-items">
              <div id="copyright">
                  <Image src="/ipicon.png" alt="LogoIP" width={100} height={100} style={{ filter: 'brightness(1000%)' }}/>
                  &copy; Indaiatuba Palete 2025 - Todos os direitos reservados
              </div>
              <ul id="footer_list">
                  <li>
                      <a href="/home#home">•Início</a>
                  </li>
                  <li>
                      <a href="/home#about">•Sobre nós</a>
                  </li>
                  <li>
                      <a href="/home#catalog">•Catálogo</a>
                  </li>
              </ul>
              <div id="footer-contents">
                  <h2>Indaiatuba palete</h2>
                  <h1>endereço aqui</h1>

                  <h1><strong>Fale conosco:</strong> +55 (19) 991328457 </h1>

                  <h1><strong>Whatsapp:</strong> +55 (19) 995000074</h1>

                  <h1>comercial@robertopaletes.com.br</h1>
              </div>
            </div>
        </div>
    </footer>

      </body>
    </html>
  );
}
