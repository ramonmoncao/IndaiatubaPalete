
import Image from 'next/image'
import Link from 'next/link'
import './password.css'
export default function PasswordRecovery(){
    return(
        <>
        <header className='header'>
            <Link href={'/home'}><Image src="/ipicon.png" alt="Palete" width={100} height={100} style={{filter : 'brightness(1000%)'}} /></Link>
        </header>
        <main>
            <section id ="password">
            <div id="recovery">
                <div className ="box">
                    <h1>recupere a senha</h1>
                    <form className='form'>
                        <div className="input-group">
                            <label>
                                Informe seu email
                            </label>
                            <input></input>
                        </div>
                            <button className="sendbtn">enviar</button>
                    </form>
                    <div className="options"><Link className="link" href={"/login"}>voltar</Link></div>
                </div>
            </div>
            </section>
        </main>
        </>
    )
}