package com.projetointegrador.indaiatubapalete.service;

import com.projetointegrador.indaiatubapalete.dto.request.ProductCreateRequestDTO;
import com.projetointegrador.indaiatubapalete.dto.response.ProductResponseDTO;
import com.projetointegrador.indaiatubapalete.entity.Product;
import com.projetointegrador.indaiatubapalete.mapper.ProductMapper;
import com.projetointegrador.indaiatubapalete.repository.ProductRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public ProductResponseDTO createProduct(ProductCreateRequestDTO productCreateRequestDTO) {
        Product product = ProductMapper.toEntity(productCreateRequestDTO);
        Product saved = productRepository.save(product);
        return ProductMapper.toResponseDTO(saved);
    }

    public List<ProductResponseDTO> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return ProductMapper.toResponseDTO(products);
    }

    public ProductResponseDTO getProductById(Long id) {
        Product product = productRepository.findById(id)
            .orElseThrow(()->new  ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));
        return ProductMapper.toResponseDTO(product);
    }
}
