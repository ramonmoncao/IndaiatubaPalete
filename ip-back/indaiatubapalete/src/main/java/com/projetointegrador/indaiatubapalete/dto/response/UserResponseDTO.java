package com.projetointegrador.indaiatubapalete.dto.response;

import com.projetointegrador.indaiatubapalete.entity.UserType;

import java.util.Optional;

public record UserResponseDTO(
        Long id,
        String name,
        String email,
        int phoneNumber,
        UserType userType,
        Long orcamentoId
) {
}
