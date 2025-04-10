package com.projetointegrador.indaiatubapalete.dto.request;

public record UserCreateRequestDTO(
        String email,
        String name,
        String password,
        Integer phone
) {
}
