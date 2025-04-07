package com.projetointegrador.indaiatubapalete.mapper;

import com.projetointegrador.indaiatubapalete.dto.request.ProductCreateRequestDTO;
import com.projetointegrador.indaiatubapalete.dto.response.ProductResponseDTO;
import com.projetointegrador.indaiatubapalete.entity.Product;

import java.util.ArrayList;
import java.util.List;

public class ProductMapper {
    public static Product toEntity(ProductCreateRequestDTO productCreateRequestDTO) {
        return new Product(
                productCreateRequestDTO.name(),
                productCreateRequestDTO.description(),
                productCreateRequestDTO.type()
        );
    }
    public static ProductResponseDTO toResponseDTO(Product product) {
        return new ProductResponseDTO(
                product.getId(),
                product.getName(),
                product.getDescription(),
                product.getProductType()
                );
    }
    public static List<ProductResponseDTO> toResponseDTO(List<Product> Products) {
        List<ProductResponseDTO> budgetResponseDTOS = new ArrayList<>();
        for (Product product : Products) {
            budgetResponseDTOS.add(toResponseDTO(product));
        }
        return budgetResponseDTOS;
    }
}
