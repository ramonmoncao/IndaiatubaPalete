'use client';
import Image from 'next/image';
import { useRef } from 'react';
import './about.css';
import './catalog.css';
import './contact.css';
import './header.css';
import './home.css';
export default function Home() {
    const aboutSection = useRef<HTMLDivElement | null>(null);
    const catalogSection = useRef<HTMLDivElement | null>(null);
    const homeSection = useRef<HTMLDivElement | null>(null);
    
    const scrollToAbout = () => {
        aboutSection.current?.scrollIntoView();
    };

    
    const scrollToCatalog = () => {
        catalogSection.current?.scrollIntoView();
    };
    const scrollToHome = () => {
        if (homeSection.current) {
            window.scrollTo({
                top: homeSection.current.offsetTop - 80,
            });
        }
    };
return (
    
    <><header>
        <nav id="navbar">
            <div id="nav_logo">
                <img src="/ipicon.png" id="logo_icon" />
            </div>

            <div id="nav_list">
                <button className="btn"onClick={scrollToHome}>Início</button>
                <button className="btn" onClick={scrollToAbout}>Sobre nós</button>
                <button className="btn"onClick={scrollToCatalog}>Catálogo</button>
                <button id="btn-navbar">
                    CONTATE-NOS
                </button>

            </div>
        </nav>
    </header>
    <main>
            <section id="home" ref={homeSection}>
                <div id="home-div">
                    <h1 id="logo">
                        Indaiatuba paletes
                    </h1>
                    <h1 id="title">
                        SEGURANÇA EM CADA<br />
                        <span>CARGA.</span>
                    </h1>
                    <h1 id="subtitle">Paletes de alta qualidade para transporte seguro e eficiente.</h1>
                    <div id="btn"><button id="btn-home">Faça seu orçamento agora →</button></div>
                </div>
            </section>

            <section id="about" ref={aboutSection}>
                <div id="about-div">
                    <h1>Sobre nós</h1>
                    <div id="about-grid">
                        <div id="about-img"><Image src={"/Roberto.jpg"}
                            alt="img"
                            width={300}
                            height={200} />Roberto Rosa Silva</div>
                        <div id="about-text">
                            Fundada em 2021 por Roberto Rosa Silva,
                            a Indaiatuba Palete nasceu com um propósito claro: oferecer ao mercado soluções de alta qualidade em pallets, fundamentais para o transporte e armazenamento seguro de mercadorias.
                            Desde o início, a empresa se destacou por seu compromisso com a excelência,
                            fornecendo produtos que unem robustez e durabilidade,
                            essenciais para uma logística eficiente.</div>

                    </div>
                </div>
            </section>

            <section id="catalog" ref={catalogSection}>
                <div id='catalog-div'>
                    <h1>Catálogo</h1>
                    
                    <div id="container">
    <div className="item">
        <Image src={"/Roberto.jpg"} alt="img" width={300} height={200} />
        <div className="description">
            <h3>Paletes de madeira</h3>
            <h2>Os paletes de madeira são plataformas robustas, projetadas para armazenar, organizar
                e transportar cargas com eficiência. Sua resistência e praticidade fazem delas uma solução econômica e sustentável para diversas aplicações.</h2>
        </div>
    </div>

    <div className="item">
        <Image src={"/Roberto.jpg"} alt="img" width={300} height={200} />
        <div className="description">
            <h3>Paletes de plástico</h3>
            <h2>Os paletes de plástico são plataformas leves, duráveis e resistentes à umidade,
                projetadas para facilitar o transporte, armazenamento e organização de mercadorias.
                Ideais para setores que exigem alta higiene e longa vida útil.</h2>
        </div>
    </div>

    <div className="item">
        <Image src={"/Roberto.jpg"} alt="img" width={300} height={200} />
        <div className="description">
            <h3>Chapatex</h3>
            <h2>O chapatex é um material versátil e econômico, amplamente utilizado na fabricação de
                móveis, embalagens, revestimentos e projetos de design. Oferecendo resistência, leveza e uma superfície uniforme.</h2>
        </div>
    </div>
</div>

                </div>
            </section>

            <section id="contact">
                <div id='contact-div'>
                    <h1>Entre em contato conosco</h1>
                    <div id="social-media">
                        <a></a>
                        <a></a>
                        <a></a>
                    </div>
                    <h2>ou deixe-nos uma mensagem</h2>
                    <div>
                        <form>
                            <label>
                                <input type="text" id="message-name" placeholder="Insira seu nome"></input>
                            </label>
                            <label>
                                <input type="email" id="message-email" placeholder="seu@email.com"></input>
                            </label>
                            <label>
                                <input type="text" id="message-text" placeholder="Qual sua mensagem?"></input>
                            </label>
                        </form>
                        <button id="btn-submit">Enviar</button>
                    </div>
                </div>
            </section>
        </main></>
);
}
