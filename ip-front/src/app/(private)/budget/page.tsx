"use client";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  type: string;
}

interface ProductItem {
  productId: number;
  productName: string;
  quantity: number;
}

export default function ProductForm() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<number | "">("");
  const [quantity, setQuantity] = useState<number>(1);
  const [productList, setProductList] = useState<ProductItem[]>([]);

  // Busca produtos da API ao carregar o componente
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchWrapper("/products", {
          method: "GET"
        });
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedProduct === "") return;
    
    const productToAdd = products.find(p => p.id === selectedProduct);
    if (!productToAdd) return;

    setProductList([...productList, {
      productId: selectedProduct,
      productName: productToAdd.name,
      quantity: quantity
    }]);

    // Reset form
    setSelectedProduct("");
    setQuantity(1);
  };

  const handleRemoveProduct = (index: number) => {
    setProductList(productList.filter((_, i) => i !== index));
  };

  return (
    <div className="form">
      <form onSubmit={handleAddProduct}>
        <div className="input-group">
          <label>Produto</label>
          <select
            className="input-field"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(Number(e.target.value))}
            required
          >
            <option value="">Selecione um produto</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name} - {product.type}
              </option>
            ))}
          </select>
          <div id="line"></div>
        </div>

        <div className="input-group">
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
          ADICIONAR PRODUTO
        </button>
      </form>

      <div className="product-list">
        <h3>Produtos Adicionados</h3>
        {productList.length === 0 ? (
          <p>Nenhum produto adicionado</p>
        ) : (
          <ul>
            {productList.map((item, index) => (
              <li key={index}>
                {item.productName} - Qtd: {item.quantity}
                <button 
                  type="button" 
                  onClick={() => handleRemoveProduct(index)}
                  className="remove-btn"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}