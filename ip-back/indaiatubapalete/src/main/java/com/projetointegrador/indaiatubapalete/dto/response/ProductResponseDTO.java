package com.projetointegrador.indaiatubapalete.dto.response;

import com.projetointegrador.indaiatubapalete.entity.ProductType;

public record ProductResponseDTO(
        Long id,
        String name,
        String description,
        ProductType type
) {
}
