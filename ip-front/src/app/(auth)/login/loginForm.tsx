"use client";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
        await fetchWrapper("/auth/login", {
            method: "POST",
            body: JSON.stringify(form),
        });
        router.push("/home");
        } catch (error) {
            if(error ==404){
                alert("NotFound")
            }
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
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
        <button type="submit" className="sendbtn">
            LOGIN
        </button>
        </form>
    );
    }
