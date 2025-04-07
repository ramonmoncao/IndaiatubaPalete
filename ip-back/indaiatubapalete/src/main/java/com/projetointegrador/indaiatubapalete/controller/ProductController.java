package com.projetointegrador.indaiatubapalete.controller;

import com.projetointegrador.indaiatubapalete.dto.request.ProductCreateRequestDTO;
import com.projetointegrador.indaiatubapalete.dto.response.ProductResponseDTO;
import com.projetointegrador.indaiatubapalete.service.ProductService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    @ResponseBody
    public ProductResponseDTO createProduct(@RequestBody ProductCreateRequestDTO productCreateRequestDTO) {
        return productService.createProduct(productCreateRequestDTO);
    }

    @GetMapping
    @ResponseBody
    public List<ProductResponseDTO> getAllProducts() {
        return productService.getAllProducts();
    }
    @GetMapping("/{id}")
    @ResponseBody
    public ProductResponseDTO getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

}
