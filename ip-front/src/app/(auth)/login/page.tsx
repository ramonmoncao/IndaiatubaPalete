import Image from 'next/image'
import Link from 'next/link'
import './login.css'
export default function Login(){

    return(
        <>
        <main>
            <div id="login-div">
                <div id="images">
                    <Link href={'/home'}><Image src="/ipicon.png" alt="Palete" width={100} height={100} style={{filter : 'brightness(1000%)'}} /></Link>
                    <Image src="/palete.png" alt="Palete" width={600} height={600} /></div>
                <div id = "box">
                    <form id ="form">
                        <label>Usuário</label>
                        <input></input>
                        <label>Senha</label>
                        <input></input>
                    </form>
                </div>
            </div>
        </main>
        </>
    )
}