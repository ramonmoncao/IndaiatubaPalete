package com.projetointegrador.indaiatubapalete.entity;

import jakarta.persistence.*;

/**
 * Entidade que representa o subtotal de um produto em uma solicitação de orçamento.
 */
@Entity
public class SubTotal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private int quantity;

    /**
     * Obtém o produto associado ao subtotal.
     *
     * @return Produto associado.
     */
    public Product getProduct() {
        return product;
    }

    /**
     * Define o produto associado ao subtotal.
     *
     * @param product Produto associado.
     */
    public void setProduct(Product product) {
        this.product = product;
    }

    /**
     * Obtém a quantidade do produto no subtotal.
     *
     * @return Quantidade do produto.
     */
    public int getQuantity() {
        return quantity;
    }

    /**
     * Define a quantidade do produto no subtotal.
     *
     * @param quantity Quantidade do produto.
     */
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
