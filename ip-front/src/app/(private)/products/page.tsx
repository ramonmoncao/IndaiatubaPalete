"use client";

import { fetchWrapper } from "@/utils/fetchWrapper";
import PrivateRoute from "@/utils/PrivateRoute";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import './products.css';

interface Product {
    id: number;
    name: string;
    description: string;
    type: string;
}

export default function ProductManagementPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        type: "CHAPATEX"
    });

    const productTypes = [
        { value: "CHAPATEX", label: "Chapatex" },
        { value: "PALLET_PLASTICO", label: "Pallet de Plástico" },
        { value: "PALLET_MADEIRA", label: "Pallet de Madeira" }
    ];

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const data = await fetchWrapper<Product[]>("/products", { method: "GET" });
            setProducts(data);
            setIsLoading(false);
        } catch (error) {
            console.error("Erro ao carregar produtos:", error);
            setIsLoading(false);
        }
    };

    const handleAddProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetchWrapper("/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProduct),
            });
            alert("Produto adicionado com sucesso!");
            setNewProduct({ name: "", description: "", type: "CHAPATEX" });
            loadProducts();
        } catch (error) {
            console.error("Erro ao adicionar produto:", error);
            alert("Falha ao adicionar produto!");
        }
    };

    const handleDeleteProduct = async (productId: number) => {
        if (!confirm("Tem certeza que deseja excluir este produto?")) return;
        
        try {
            await fetchWrapper(`/products/${productId}`, { method: "DELETE" });
            alert("Produto removido com sucesso!");
            loadProducts();
        } catch (error) {
            console.error("Erro ao remover produto:", error);
            alert("Falha ao remover produto!");
        }
    };

    return (
        <>
        <PrivateRoute requiredUserType="ADMIN">
        <header className='header'>
            <Link href={'/home'}><Image src="/ipicon.png" alt="Palete" width={100} height={100} style={{filter : 'brightness(1000%)'}} /></Link>
        </header>
        <main>
        <section id="product">
            <div id="product-div">
                <div className="box">
                    <h1>Gerenciamento de Produtos</h1>
                    <h2>Adicione ou remova produtos</h2>

                    <form className="form" onSubmit={handleAddProduct}>
                        <div className="input-select">
                            <label>Nome do Produto</label>
                            <input
                                type="text"
                                value={newProduct.name}
                                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                required
                            />
                            <div id="line"></div>
                        </div>
                        <div className="input-select">
                            <label>Tipo</label>
                            <select
                                value={newProduct.type}
                                onChange={(e) => setNewProduct({ ...newProduct, type: e.target.value })}
                                required
                            >
                                {productTypes.map((type) => (
                                    <option key={type.value} value={type.value}>
                                        {type.label}
                                    </option>
                                ))}
                            </select>
                            <div id="line"></div>
                        </div>
                        <div className="input-select">
                            <label>Descrição</label>
                            <input
                                type="text"
                                value={newProduct.description}
                                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                required
                            />
                            <div id="line"></div>
                        </div>
                        <button type="submit" className="sendbtn">
                            Adicionar Produto
                        </button>
                    </form>

                    <div className="product-table">
                        <h3>Produtos Cadastrados</h3>
                        {isLoading ? (
                            <p>Carregando produtos...</p>
                        ) : products.length === 0 ? (
                            <p>Nenhum produto cadastrado.</p>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Tipo</th>
                                        <th>Descrição</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td>{product.name}</td>
                                            <td>
                                                {productTypes.find(t => t.value === product.type)?.label || product.type}
                                            </td>
                                            <td>{product.description}</td>
                                            <td>
                                                <button
                                                    onClick={() => handleDeleteProduct(product.id)}
                                                    className="remove-btn"
                                                >
                                                    Excluir
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </section>
        </main>
    </PrivateRoute>
    </>
    );
}