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

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserResponseDTO createUser(UserCreateRequestDTO userCreateRequestDTO){
        if(userRepository.findByEmail(userCreateRequestDTO.email()).isPresent()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Email já em uso");
        }
        User user = UserMapper.createToEntity(userCreateRequestDTO);
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return UserMapper.toResponse(user);
    }
}
