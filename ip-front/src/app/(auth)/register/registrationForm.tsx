"use client";

import { fetchWrapper } from "@/utils/fetchWrapper";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
    const [form, setForm] = useState({
        email: "",
        name: "",
        password: "",
        phone: ""
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
        await fetchWrapper("/auth/register", {
            method: "POST",
            body: JSON.stringify(form),
        });
        alert("Usuário registrado com sucesso!");
        router.push("/login");
        } catch (error) {
            
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
            <label>Nome</label>
            <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            />
            <div id="line"></div>
        </div>
        <div className="input-group">
            <label>Email</label>
            <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            />
            <div id="line"></div>
        </div>
        <div className="input-group">
            <label>Senha</label>
            <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            />
            <div id="line"></div>
        </div>
        <div className="input-group">
            <label>Celular</label>
            <input
            name="phone"
            type="number"
            value={form.phone}
            onChange={handleChange}
            required
            />
            <div id="line"></div>
        </div>
        <button type="submit" className="sendbtn">
            Prosseguir
        </button>
        </form>
    );
    }
