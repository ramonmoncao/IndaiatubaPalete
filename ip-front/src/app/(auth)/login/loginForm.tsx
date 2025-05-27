"use client";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { parseJwt } from "@/utils/jwt";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get('redirect');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const data = await fetchWrapper<{ token: string }>("/auth/login", {
                method: "POST",
                body: JSON.stringify(form),
            });

            const token = data.token;
            document.cookie = `auth-token=${encodeURIComponent(data.token)}; path=/; max-age=86400`;
            console.log("TOKEN DO BACKEND:", data.token);

            const decoded = parseJwt(token);
            const userType = decoded?.UserType;
            

            let targetPath = "/";

            if (redirectTo) {
                targetPath = redirectTo;
            } else if (userType === "ADMIN") {
                targetPath = "/admin";
            } else if (userType === "CLIENT") {
                targetPath = `/budget/`;
            }

            router.push(targetPath);
            router.refresh();
        } catch (error) {
            if (error === 401) {
                setError("Credenciais incorretas");
            } else if (error === 404) {
                setError("Usuário não cadastrado");
            } else {
                setError("Erro ao fazer login");
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
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="sendbtn">
                LOGIN
            </button>
        </form>
    );
}