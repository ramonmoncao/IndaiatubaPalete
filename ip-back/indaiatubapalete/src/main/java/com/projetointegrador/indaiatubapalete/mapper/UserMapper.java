package com.projetointegrador.indaiatubapalete.mapper;

import com.projetointegrador.indaiatubapalete.dto.request.UserCreateRequestDTO;
import com.projetointegrador.indaiatubapalete.dto.request.UserUpdateRequestDTO;
import com.projetointegrador.indaiatubapalete.dto.response.UserResponseDTO;
import com.projetointegrador.indaiatubapalete.entity.User;
import com.projetointegrador.indaiatubapalete.entity.UserType;

import java.util.ArrayList;
import java.util.List;

public class UserMapper {

    public static User toEntity(UserCreateRequestDTO userCreateRequestDTO) {
        return new User(
                userCreateRequestDTO.email(),
                userCreateRequestDTO.name(),
                userCreateRequestDTO.password(),
                userCreateRequestDTO.phone(),
                UserType.CLIENT
        );
    }
    public static UserResponseDTO toResponseDTO(User user) {
        return new UserResponseDTO(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getPhoneNumber(),
                user.getUserType()
        );
    }
    public static List<UserResponseDTO> toResponseDTO(List<User> users) {
        List<UserResponseDTO> userResponseDTOs = new ArrayList<>();
        for (User user : users) {
            userResponseDTOs.add(toResponseDTO(user));
        }
        return userResponseDTOs;
    }

    public static void update(User user, UserUpdateRequestDTO userUpdateRequestDTO) {
        if(userUpdateRequestDTO.name() != null) {
            user.setName(userUpdateRequestDTO.name());
        }
        if(userUpdateRequestDTO.phone() != null){
            user.setPhoneNumber(userUpdateRequestDTO.phone());
        }
    }
}
