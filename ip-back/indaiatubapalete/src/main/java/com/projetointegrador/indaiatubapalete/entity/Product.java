package com.projetointegrador.indaiatubapalete.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

/**
 * Entidade que representa um produto no sistema.
 */
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    private ProductType productType;

    /**
     * Construtor com parâmetros.
     *
     * @param name Nome do produto.
     * @param description Descrição do produto.
     * @param productType Tipo do produto.
     */
    public Product(String name, String description, ProductType productType) {
        this.name = name;
        this.description = description;
        this.productType = productType;
    }

    /**
     * Construtor padrão.
     */
    public Product() {
    }

    /**
     * Obtém o tipo do produto.
     *
     * @return Tipo do produto.
     */
    public ProductType getProductType() {
        return productType;
    }

    /**
     * Define o tipo do produto.
     *
     * @param productType Tipo do produto.
     */
    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    /**
     * Obtém o ID do produto.
     *
     * @return ID do produto.
     */
    public Long getId() {
        return id;
    }

    /**
     * Define o ID do produto.
     *
     * @param id ID do produto.
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * Obtém o nome do produto.
     *
     * @return Nome do produto.
     */
    public String getName() {
        return name;
    }

    /**
     * Define o nome do produto.
     *
     * @param name Nome do produto.
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Obtém a descrição do produto.
     *
     * @return Descrição do produto.
     */
    public String getDescription() {
        return description;
    }

    /**
     * Define a descrição do produto.
     *
     * @param description Descrição do produto.
     */
    public void setDescription(String description) {
        this.description = description;
    }
}
