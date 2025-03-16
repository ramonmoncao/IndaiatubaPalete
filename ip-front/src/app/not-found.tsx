import Image from 'next/image'
import Link from 'next/link'
import './notfound.css'
export default function NotFound(){
    return(
        <>
        <main>
            <div id="notfound-div">
                <div id="images">
                    <Link href={'/home'}><Image src="/ipicon.png" alt="Palete" width={100} height={100} style={{filter : 'brightness(0)'}} /></Link>
                </div>
                <h1>Ops.<br/> Página não encontrada.</h1>
            </div>
        </main>
        </>
    )
}