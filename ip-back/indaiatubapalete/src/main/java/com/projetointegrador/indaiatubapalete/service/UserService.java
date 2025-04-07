package com.projetointegrador.indaiatubapalete.service;

import com.projetointegrador.indaiatubapalete.dto.request.UserCreateRequestDTO;
import com.projetointegrador.indaiatubapalete.dto.response.UserResponseDTO;
import com.projetointegrador.indaiatubapalete.entity.User;
import com.projetointegrador.indaiatubapalete.mapper.UserMapper;
import com.projetointegrador.indaiatubapalete.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserResponseDTO createUser(UserCreateRequestDTO userCreateRequestDTO){
        if(userRepository.findByEmail(userCreateRequestDTO.email()).isPresent()){
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Email already exists");
        }
        User user = UserMapper.toEntity(userCreateRequestDTO);
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User saved = userRepository.save(user);
        return UserMapper.toResponseDTO(saved);
    }
    public List<UserResponseDTO> getAllUsers(){
        List<User> users = userRepository.findAll();
        return UserMapper.toResponseDTO(users);
    }
    public UserResponseDTO getUserById(Long id){
        User user = userRepository.findById(id)
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND,"User not found"));
        return UserMapper.toResponseDTO(user);
    }
}
