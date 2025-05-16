"use client";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Product {
    id: number;
    name: string;
    description: string;
    type: string;
}

interface ProductItem {
    productId: number;
    quantity: number;
    productDetails?: Product; // Adicionando detalhes do produto para exibição
}

type ProductList = ProductItem[];

export default function BudgetForm() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<number | "">("");
    const [quantity, setQuantity] = useState<number>(1);
    const [productList, setProductList] = useState<ProductList>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [form, setForm] = useState({
        products: [] as ProductList
    });

    const id = 1;
    const router = useRouter();

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchWrapper("/products", {
                    method: "GET"
                });
                setProducts(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to load products:", error);
                setIsLoading(false);
            }
        };
        
        loadProducts();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAddProduct = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (selectedProduct === "" || quantity < 1) return;
        
        const productToAdd = products.find(p => p.id === selectedProduct);
        
        if (!productToAdd) return;
        
        const existingProductIndex = productList.findIndex(
            item => item.productId === selectedProduct
        );
        
        if (existingProductIndex >= 0) {
            
            const updatedList = [...productList];
            updatedList[existingProductIndex].quantity += quantity;
            setProductList(updatedList);
        } else {
            setProductList([
                ...productList,
                {
                    productId: selectedProduct,
                    quantity,
                    productDetails: productToAdd
                }
            ]);
        }
        
        setSelectedProduct("");
        setQuantity(1);
    };

    const handleRemoveProduct = (productId: number) => {
        setProductList(productList.filter(item => item.productId !== productId));
    };

    const handleSubmitBudget = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            
            const payload = productList.map(item => ({
                productId: item.productId,  
                quantity: item.quantity,
            }));


            await fetchWrapper(`/budgets/user/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                },
                body: JSON.stringify(payload),
            });
            router.push("/home");
        } catch (error) {
            console.error("Submission failed:", error);
            alert("Error submitting budget. Check console for details.");
        }
    };
        

    return (
        <section id="budget">
            <div id="budget-div">
                <div className="box">
                    <h1>Orçamento</h1>
                    <h2>faça seu orçamento.</h2>
                    <form className="form" onSubmit={handleAddProduct}>
                        <div className="input-select">
                            <label>Produto</label>
                            {isLoading ? (
                                <p>Carregando produtos...</p>
                            ) : (
                                <select
                                    value={selectedProduct}
                                    onChange={(e) => setSelectedProduct(Number(e.target.value))}
                                    required
                                >
                                    <option value="">Selecione um produto</option>
                                    {products.map((product) => (
                                        <option key={product.id} value={product.id}>
                                            {product.type}-{product.name}
                                        </option>
                                    ))}
                                </select>
                            )}
                            <div id="line"></div>
                        </div>
                        <div className="input-select">
                            <label>Quantidade</label>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                required
                            />
                            <div id="line"></div>
                        </div>
                        <button type="submit" className="sendbtn">
                            Adicionar produto
                        </button>
                    </form>
                    {productList.length > 0 && (
                        <div className="product-table">
                            <h3>Produtos no Orçamento</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Produto</th>
                                        <th>Tipo</th>
                                        <th>Quantidade</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productList.map((item) => (
                                        <tr key={item.productId}>
                                            <td>{item.productDetails?.name || "Produto não encontrado"}</td>
                                            <td>{item.productDetails?.type || "-"}</td>
                                            <td>{item.quantity}</td>
                                            <td>
                                                <button 
                                                    type="button" 
                                                    onClick={() => handleRemoveProduct(item.productId)}
                                                    className="remove-btn"
                                                >
                                                    Remover
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button 
                                type="button" 
                                onClick={handleSubmitBudget}
                                className="sendbtn"
                            >
                                Enviar orçamento
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}