package com.projetointegrador.indaiatubapalete.mapper;

import com.projetointegrador.indaiatubapalete.dto.request.ProductCreateRequestDTO;
import com.projetointegrador.indaiatubapalete.dto.response.ProductResponseDTO;
import com.projetointegrador.indaiatubapalete.entity.Product;

import java.util.ArrayList;
import java.util.List;

public class ProductMapper {
    public static Product createToEntity(ProductCreateRequestDTO ProductCreateRequestDTO) {
        return new Product(
                ProductCreateRequestDTO.name(),
                ProductCreateRequestDTO.description()
        );
    }
    public static ProductResponseDTO toResponse(Product Product) {
        return new ProductResponseDTO(
                Product.getId(),
                Product.getName(),
                Product.getDescription());
    }
    public static List<ProductResponseDTO> toResponseList(List<Product> Products) {
        List<ProductResponseDTO> ProductResponseDTOs = new ArrayList<>();
        for (Product product : Products) {
            ProductResponseDTOs.add(toResponse(product));
        }
        return ProductResponseDTOs;
    }
}
