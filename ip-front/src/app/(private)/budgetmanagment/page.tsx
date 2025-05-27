"use client";

import { fetchWrapper } from "@/utils/fetchWrapper";
import PrivateRoute from "@/utils/PrivateRoute";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import './budget.css';

interface Budget {
    id: number;
    status: "PENDING" | "RESPONDED";
    user: { name: string, phoneNumber: string };
    subTotals: { product: { name: string }, quantity: number }[];
    message: string;
}

export default function BudgetManagementPage() {
    const [budgets, setBudgets] = useState<Budget[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [expandedId, setExpandedId] = useState<number | null>(null);

    useEffect(() => {
        loadBudgets();
    }, []);

    const loadBudgets = async () => {
        try {
            const data = await fetchWrapper<Budget[]>("/budgets", { method: "GET" });
            setBudgets(data);
        } catch (error) {
            console.error("Erro ao carregar orçamentos:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSetAsResponded = async (id: number) => {
        try {
            await fetchWrapper(`/budgets/resolve/${id}`, { method: "POST" });
            alert("Orçamento respondido!");
            loadBudgets();
        } catch (error) {
            console.error("Erro ao marcar como respondido:", error);
            alert("Falha ao atualizar status!");
        }
    };

    return (
        <PrivateRoute requiredUserType="ADMIN">
            <header className='header'>
                <Link href={'/home'}>
                    <Image src="/ipicon.png" alt="Palete" width={100} height={100} style={{ filter: 'brightness(1000%)' }} />
                </Link>
            </header>

            <main>
                <section id="budget">
                    <div id="budget-div">
                    <div className="box">
                        <h1>Orçamentos Recebidos</h1>

                        {isLoading ? (
                            <p>Carregando...</p>
                        ) : budgets.length === 0 ? (
                            <p>Nenhum orçamento encontrado.</p>
                        ) : (
                            <table className="budget-table">
                                <thead>
                                    <tr>
                                        <th>Cliente</th>
                                        <th>Contato</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {budgets.map((budget) => (
                                        <React.Fragment key={budget.id}>
                                            <tr
                                                onClick={() => setExpandedId(expandedId === budget.id ? null : budget.id)}
                                                className="clickable-row"
                                            >
                                                <td>{budget.user.name}</td>
                                                <td>{budget.user.phoneNumber}</td>
                                                <td>Não Respondido</td>
                                            </tr>

                                            {expandedId === budget.id && (
                                                <tr className="details-row">
                                                    <td colSpan={2}>
                                                        <ul>
                                                            {budget.subTotals.map((sub, idx) => (
                                                                <li key={idx}>{sub.product.name} - Quantidade: {sub.quantity}</li>
                                                            ))}
                                                        </ul>
                                                        {budget.message && (
                                                            <p><strong>Mensagem:</strong> {budget.message}</p>
                                                        )}
                                                        {budget.status === "PENDING" && (
                                                            <button
                                                                className="respond-btn"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    handleSetAsResponded(budget.id);
                                                                }}
                                                            >
                                                                Marcar como Respondido
                                                            </button>
                                                        )}
                                                    </td>
                                                </tr>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                    </div>
                </section>
            </main>
        </PrivateRoute>
    );
}
