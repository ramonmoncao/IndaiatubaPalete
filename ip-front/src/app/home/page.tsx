'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import './about.css';
import './catalog.css';
import './contact.css';
import './header.css';
import './home.css';

export default function Home() {
    useEffect(() => {
        // Altera o título da página
        document.title = "Home | Indaiatuba Palete";
    }, []);
    const aboutSection = useRef<HTMLDivElement | null>(null);
    const catalogSection = useRef<HTMLDivElement | null>(null);
    const homeSection = useRef<HTMLDivElement | null>(null);

    const [activeSection, setActiveSection] = useState('home');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>, sectionName: string) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveSection(sectionName);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        console.log(formData);
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
                        <h1 id="title">SEGURANÇA EM CADA<br /><span>CARGA.</span></h1>
                        <h1 id="subtitle">Paletes de alta qualidade para transporte seguro e eficiente.</h1>
                        <div id="btn"><button id="btn-home">Faça seu orçamento agora →</button></div>
                    </div>
                </section>

                <section id="about" ref={aboutSection}>
                    <div id="about-div">
                        <h1>Sobre nós</h1>
                        <div id="about-grid">
                            <div id="about-img">
                                <Image src="/Roberto.jpg" alt="Roberto Rosa Silva" width={300} height={200} />
                                Roberto Rosa Silva
                            </div>
                            <div id="about-text">
                                Fundada em 2021 por Roberto Rosa Silva, a Indaiatuba Palete nasceu com um propósito claro: oferecer ao mercado soluções de alta qualidade em pallets, fundamentais para o transporte e armazenamento seguro de mercadorias.
                            </div>
                        </div>
                    </div>
                </section>

                <section id="catalog" ref={catalogSection}>
                    <div id='catalog-div'>
                        <h1>Nossos produtos</h1>
                        <div id="container">
                            <div className="item" key="paletes-madeira">
                                <Image src="/Roberto.jpg" alt="Paletes de madeira" width={300} height={200} />
                                <div className="description">
                                    <h3>Paletes de madeira</h3>
                                    <h2>Os paletes de madeira são plataformas robustas, projetadas para armazenar, organizar
                                    e transportar cargas com eficiência. Sua resistência e praticidade fazem delas uma solução econômica e sustentável para diversas aplicações.</h2>
                                </div>
                            </div>
                            <div className="item" key="paletes-plastico">
                                <Image src="/Roberto.jpg" alt="Paletes de plástico" width={300} height={200} />
                                <div className="description">
                                    <h3>Paletes de plástico</h3>
                                    <h2>Os paletes de plástico são plataformas leves, duráveis e resistentes à umidade,
                                    projetadas para facilitar o transporte, armazenamento e organização de mercadorias.
                                    Ideais para setores que exigem alta higiene e longa vida útil.</h2>
                                </div>
                            </div>
                            <div className="item" key="chapatex">
                                <Image src="/Roberto.jpg" alt="Chapatex" width={300} height={200} />
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
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                id="message-name"
                                placeholder="Insira seu nome"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <input
                                type="email"
                                id="message-email"
                                placeholder="seu@email.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            <input
                                type="text"
                                id="message-text"
                                placeholder="Qual sua mensagem?"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                            <button id="btn-submit" type="submit">Enviar</button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}