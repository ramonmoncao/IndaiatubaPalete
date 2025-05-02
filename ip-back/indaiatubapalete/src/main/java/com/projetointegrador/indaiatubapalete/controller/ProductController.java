package com.projetointegrador.indaiatubapalete.controller;

import com.projetointegrador.indaiatubapalete.dto.request.ProductCreateRequestDTO;
import com.projetointegrador.indaiatubapalete.dto.response.ProductResponseDTO;
import com.projetointegrador.indaiatubapalete.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

/**
 * Controlador responsável por gerenciar as operações relacionadas aos produtos.
 */
@Controller
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    /**
     * Construtor para injetar o serviço de produtos.
     *
     * @param productService Serviço responsável pelas operações de produtos.
     */
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    /**
     * Cria um novo produto.
     *
     * @param productCreateRequestDTO Objeto contendo os dados necessários para criar um novo produto.
     * @return Um {@link ResponseEntity} contendo o produto criado e o cabeçalho de localização.
     */
    @PostMapping
    public ResponseEntity<ProductResponseDTO> createProduct(@RequestBody ProductCreateRequestDTO productCreateRequestDTO) {
        ProductResponseDTO createdProduct = productService.createProduct(productCreateRequestDTO);
        URI location = URI.create("/product/" + createdProduct.id());
        return ResponseEntity.created(location).body(createdProduct);
    }

    /**
     * Recupera todos os produtos cadastrados.
     *
     * @return Um {@link ResponseEntity} contendo a lista de produtos.
     */
    @GetMapping
    public ResponseEntity<List<ProductResponseDTO>> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

    /**
     * Recupera um produto pelo ID.
     *
     * @param id ID do produto a ser recuperado.
     * @return Um {@link ResponseEntity} contendo o produto encontrado.
     */
    @GetMapping("/{id}")
    public ResponseEntity<ProductResponseDTO> getProductById(@PathVariable Long id) {
        return ResponseEntity.ok(productService.getProductById(id));
    }
}
