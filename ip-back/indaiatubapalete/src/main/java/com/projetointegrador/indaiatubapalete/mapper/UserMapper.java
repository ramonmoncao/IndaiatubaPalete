package com.projetointegrador.indaiatubapalete.mapper;

import com.projetointegrador.indaiatubapalete.dto.request.UserCreateRequestDTO;
import com.projetointegrador.indaiatubapalete.dto.response.UserResponseDTO;
import com.projetointegrador.indaiatubapalete.entity.User;
import com.projetointegrador.indaiatubapalete.entity.UserType;

public class UserMapper {

    public static User createToEntity(UserCreateRequestDTO userCreateRequestDTO) {
        return new User(
                userCreateRequestDTO.email(),
                userCreateRequestDTO.name(),
                userCreateRequestDTO.password(),
                userCreateRequestDTO.phone(),
                UserType.CLIENT
        );
    }
    public static UserResponseDTO toResponse(User user) {
        return new UserResponseDTO(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getPhoneNumber(),
                user.getUserType(),
                user.getOrcamentoRequest() != null ?
                        user.getOrcamentoRequest().getId() : null
        );
    }
}
