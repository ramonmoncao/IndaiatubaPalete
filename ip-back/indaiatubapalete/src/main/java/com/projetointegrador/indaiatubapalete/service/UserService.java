package com.projetointegrador.indaiatubapalete.service;

import com.projetointegrador.indaiatubapalete.dto.request.UserCreateRequestDTO;
import com.projetointegrador.indaiatubapalete.dto.request.UserUpdateRequestDTO;
import com.projetointegrador.indaiatubapalete.dto.response.UserResponseDTO;
import com.projetointegrador.indaiatubapalete.entity.User;
import com.projetointegrador.indaiatubapalete.execptionHandler.UserException;
import com.projetointegrador.indaiatubapalete.mapper.UserMapper;
import com.projetointegrador.indaiatubapalete.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;


    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public List<UserResponseDTO> getAllUsers(){
        List<User> users = userRepository.findAll();
        return UserMapper.toResponseDTO(users);
    }
    public UserResponseDTO getUserById(Long id){
        User user = userRepository.findById(id)
                .orElseThrow(()-> new UserException(HttpStatus.NOT_FOUND, "User not found."));
        return UserMapper.toResponseDTO(user);
    }
    public UserResponseDTO updateUser(Long id, UserUpdateRequestDTO userUpdateRequestDTO){
        User user = userRepository.findById(id)
                .orElseThrow(()-> new UserException(HttpStatus.NOT_FOUND, "User not found."));
        UserMapper.update(user, userUpdateRequestDTO);
        return UserMapper.toResponseDTO(user);
    }
}
