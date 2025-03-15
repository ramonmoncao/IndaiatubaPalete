import "./home.css";
export default function Home() {
  return (
    <main>
        <section id="home">
            <h1 id="title">
                SEGURANÇA EM CADA<br/>
                <span>CARGA.</span>
            </h1>
            <h1 id="subtitle">Paletes de alta qualidade para transporte seguro e eficiente.</h1>
            <div id="btn"><button id="btn-home">Faça seu orçamento agora →</button></div>
        </section>

        <section id="about">
            <h1>Sobre nós</h1>
            <div id="text">Fundada em 2021 por Roberto Rosa Silva, 
                a Indaiatuba Palete nasceu com um propósito claro: oferecer ao mercado soluções de alta qualidade em pallets, fundamentais para o transporte e armazenamento seguro de mercadorias. 
                Desde o início, a empresa se destacou por seu compromisso com a excelência, 
                fornecendo produtos que unem robustez e durabilidade, 
                essenciais para uma logística eficiente.
            </div>
        </section>

        <section id="catalog">
            <h1>Nossos produtos</h1>
            <div id="id">
                <div id="content">
                    <div>
                        <img src="" id="product-img"/>
                        <h3>Paletes de madeira</h3>
                        <h2>Os paletes de madeira são plataformas robustas, projetadas para armazenar, organizar 
                            e transportar cargas com eficiência. 
                            Sua resistência e praticidade fazem delas uma solução econômica e sustentável para diversas aplicações.</h2>
                    </div>
                    <div>
                        <img src="" id="product-img"/>
                        <h3>Paletes de plástico</h3>
                        <h2>Os paletes de plástico são plataformas leves, duráveis e resistentes à umidade, 
                            projetadas para facilitar o transporte, armazenamento e organização de mercadorias. 
                            Ideais para setores que exigem alta higiene e longa vida útil.</h2>
                    </div>
                    <div>
                        <img src="" id="product-img"/>
                        <h3>Chapatex</h3>
                        <h2>O chapatex é um material versátil e econômico, amplamente utilizado na fabricação de 
                            móveis, embalagens, revestimentos e projetos de design. Ele é produzido a partir de fibras de 
                            madeira prensadas, oferecendo resistência, leveza e uma superfície uniforme. </h2>
                    </div>
                </div>
                <button id="btn-download">Baixe nosso catálogo completo</button>
            </div>
        </section>

        <section id="contact">
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
        </section>
    </main>
  );
}
