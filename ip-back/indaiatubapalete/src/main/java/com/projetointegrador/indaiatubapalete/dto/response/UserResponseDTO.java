package com.projetointegrador.indaiatubapalete.dto.response;

import com.projetointegrador.indaiatubapalete.entity.UserType;

public record UserResponseDTO(
        Long id,
        String name,
        String email,
        String phoneNumber,
        UserType userType
) {
}
