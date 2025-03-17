import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import './signup.css'

export const metadata: Metadata = {
    title: "Signup"
}
export default function Login(){

    return(
        <>
        <header className='header'>
            <Link href={'/home'}><Image src="/ipicon.png" alt="Palete" width={100} height={100} style={{filter : 'brightness(1000%)'}} /></Link>
        </header>
        <main>
            <div id="signup-div">
                <div id="images">
                    <Image src="/palete.png" id="palete" alt="Palete" width={600} height={600} /></div>
                <div className = "box">
                <h1>Registre-se</h1>
                    <form className ="form">
                        <div className='input-group'>
                        <label>Nome</label>
                        <input></input>
                        <div id='line'></div>
                        </div>
                        <div className='input-group'>
                        <label>Email</label>
                        <input></input>
                        <div id='line'></div>
                        </div>
                        <div className='input-group'>
                        <label>Senha</label>
                        <input type='password'></input>
                        <div id='line'></div>
                        </div>
                        <button className="sendbtn">prosseguir</button>
                    </form>
                    <div id="options">
                        <p>já tem uma conta? <Link className="link" href={"/login"}>login</Link></p>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}