'use client' 

import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import './login.css';
import LoginForm from './loginForm';


export default function Login() {
    return (
        <>
            <header className='header'>
                <Link href={'/home'}>
                    <Image
                        src="/ipicon.png"
                        alt="Palete"
                        width={100}
                        height={100}
                        style={{ filter: 'brightness(1000%)' }}
                    />
                </Link>
            </header>
            <main>
                <section id="login">
                    <div id="login-div">
                        <div className="box">
                            <h1>Olá!</h1>
                            <h2>Seja bem vindo novamente.</h2>
                            <Suspense fallback={<div>Carregando formulário...</div>}>
                                <LoginForm />
                            </Suspense>
                            <div className="options">
                                <p>novo por aqui? <Link className="link" href={"/register"}>registre-se</Link></p>
                                <Link className="link" href={"/password/recovery"}><p>esqueci minha senha.</p></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}