import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./register.css";
import RegisterForm from "./registrationForm";
export const metadata: Metadata = {
title: "Signup",
};

export default function Register() {
return (
    <>
    <header className="header">
        <Link href={"/home"}>
        <Image
            src="/ipicon.png"
            alt="Palete"
            width={100}
            height={100}
            style={{ filter: "brightness(1000%)" }}
        />
        </Link>
    </header>
    <main>
        <section id="signup">
        <div id="signup-div">
            <div className="box">
            <h1>Registre-se</h1>
            <RegisterForm />
            <div className="options">
                <p>
                já tem uma conta?{" "}
                <Link className="link" href={"/login"}>
                    login
                </Link>
                </p>
            </div>
            </div>
        </div>
        </section>
    </main>
    </>
);
}
