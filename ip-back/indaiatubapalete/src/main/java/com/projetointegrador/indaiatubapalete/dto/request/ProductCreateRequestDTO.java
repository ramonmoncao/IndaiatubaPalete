package com.projetointegrador.indaiatubapalete.dto.request;

import com.projetointegrador.indaiatubapalete.entity.ProductType;

public record ProductCreateRequestDTO(
        String name,
        String description,
        ProductType type
){
}
