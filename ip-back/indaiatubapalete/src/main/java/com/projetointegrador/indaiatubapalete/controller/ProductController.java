package com.projetointegrador.indaiatubapalete.controller;

import com.projetointegrador.indaiatubapalete.dto.request.ProductCreateRequestDTO;
import com.projetointegrador.indaiatubapalete.dto.response.ProductResponseDTO;
import com.projetointegrador.indaiatubapalete.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@Controller
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public ResponseEntity<ProductResponseDTO> createProduct(@RequestBody ProductCreateRequestDTO productCreateRequestDTO) {
        ProductResponseDTO createdProduct = productService.createProduct(productCreateRequestDTO);
        URI location = URI.create("/product/" + createdProduct.id());
        return ResponseEntity.created(location).body(createdProduct);
    }

    @GetMapping
    public ResponseEntity<List<ProductResponseDTO>> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }
    @GetMapping("/{id}")
    public ResponseEntity<ProductResponseDTO> getProductById(@PathVariable Long id) {
        return ResponseEntity.ok(productService.getProductById(id));
    }

}
