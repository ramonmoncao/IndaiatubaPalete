'use client';

import { Bebas_Neue } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import './about.css';
import './catalog.css';
import './contact.css';
import './header.css';
import './home.css';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
    useEffect(() => {
        // Altera o título da página
        document.title = "Home | Indaiatuba Palete";
    }, []);
    const aboutSection = useRef<HTMLDivElement | null>(null);
    const catalogSection = useRef<HTMLDivElement | null>(null);
    const homeSection = useRef<HTMLDivElement | null>(null);

    const [activeSection, setActiveSection] = useState('home');
    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>, sectionName: string) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveSection(sectionName);
    };

    useEffect(() => {
        const sections = [
            { ref: homeSection, name: 'home' },
            { ref: aboutSection, name: 'about' },
            { ref: catalogSection, name: 'catalog' },
        ];

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const section = sections.find(sec => sec.ref.current === entry.target);
                    if (section) setActiveSection(section.name);
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            if (section.ref.current) observer.observe(section.ref.current);
        });

        return () => observer.disconnect();
    }, []);

    return (
        
        <>
        
            <header>
                <nav id="navbar">
                    <div id="nav_logo">
                        <Image src="/ipicon.png" id="logo_icon" alt="Logo" width={50} height={50} />
                    </div>
                    <div id="nav_list">
                        <button className={`btn ${activeSection === 'home' ? 'active' : ''}`} onClick={() => scrollToSection(homeSection!, 'home')}>Início</button>
                        <button className={`btn ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection(aboutSection!, 'about')}>Sobre nós</button>
                        <button className={`btn ${activeSection === 'catalog' ? 'active' : ''}`} onClick={() => scrollToSection(catalogSection!, 'catalog')}>Catálogo</button>
                        <Link href={'/login'}><button id="btn-navbar">CONTATE-NOS</button></Link>
                        <Link href={'/login'}><button id="btn-navbar-mobile"><FaRegCircleUser size={24} color="var(--color-primary-1)" /></button></Link>
                    </div>
                </nav>
            </header>
            <main>
                <section id="home" ref={homeSection}>
                    <div id="home-div">
                        <Image src="/ipicon.png" alt="Logo" width={60} height={60} style={{ filter: 'brightness(1000%)' }} />
                        <h1 id="title" className={bebasNeue.className}>SEGURANÇA EM CADA<br /><span>CARGA.</span></h1>
                        <h1 id="subtitle">Paletes de alta qualidade para transporte seguro e eficiente.</h1>
                        <Link href={'/budget'}><div id="btn"><button id="btn-home">Faça seu orçamento agora →</button></div></Link>
                    </div>
                </section>

                <section id="about" ref={aboutSection}>
                    <div id="about-div">
                        <h1 className={bebasNeue.className}>Sobre nós</h1>
                        <div id="about-grid">
                            <div id="about-img">
                                <Image src="/Roberto.jpg" alt="Roberto Rosa Silva" width={300} height={200} />
                                Roberto Rosa Silva
                            </div>
                            <div id="about-text" ><strong>
                                Fundada em 2021 por Roberto Rosa Silva, a Indaiatuba Palete nasceu com um propósito claro: oferecer ao mercado soluções de alta qualidade em pallets, fundamentais para o transporte e armazenamento seguro de mercadorias.
                                </strong>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="catalog" ref={catalogSection}>
                    <div id='catalog-div'>
                        <h1 className={bebasNeue.className}>Nossos produtos</h1>
                        <div id="container">
                            <div className="item" key="paletes-madeira">
                                <Image src="/paMadeira.png" alt="Paletes de madeira" width={500} height={500}  className="rounded-lg shadow-md"/>
                                <div className="description">
                                    <h3 className={bebasNeue.className}>Paletes de madeira</h3>
                                    <h2>Os paletes de madeira são plataformas robustas, projetadas para armazenar, organizar
                                    e transportar cargas com eficiência. Sua resistência e praticidade fazem delas uma solução econômica e sustentável para diversas aplicações.</h2>
                                </div>
                            </div>
                            <div className="item" key="paletes-plastico">
                                <Image src="/paPlastico.png" alt="Paletes de plástico" width={500} height={500}  className="rounded-lg shadow-md"/>
                                <div className="description">
                                    <h3 className={bebasNeue.className}>Paletes de plástico</h3>
                                    <h2>Os paletes de plástico são plataformas leves, duráveis e resistentes à umidade,
                                    projetadas para facilitar o transporte, armazenamento e organização de mercadorias.
                                    Ideais para setores que exigem alta higiene e longa vida útil.</h2>
                                </div>
                            </div>
                            <div className="item" key="chapatex">
                                <Image src="/chapatex.png" alt="Chapatex" width={500} height={500}  className="rounded-lg shadow-md"/>
                                <div className="description">
                                    <h3 className={bebasNeue.className}>Chapatex</h3>
                                    <h2>O chapatex é um material versátil e econômico, amplamente utilizado na fabricação de
                                    móveis, embalagens, revestimentos e projetos de design. Oferecendo resistência, leveza e uma superfície uniforme.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact">
                    <div id='contact-div'>
                        <h1 id="title" className={bebasNeue.className}>VENHA AGORA FAZER SEU ORÇAMENTO<br /><span>COM A INDAIATUBA PALETE.</span></h1>
                        <h1 id="subtitle">os melhores paletes para suas necessidades.</h1>
                        <Link href={'/budget'}><div id="btn"><button id="btn-home">Faça seu orçamento agora →</button></div></Link>
                    </div>
                </section>
            </main>
        </>
    );
}