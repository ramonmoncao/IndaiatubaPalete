package com.projetointegrador.indaiatubapalete.service;

import com.projetointegrador.indaiatubapalete.dto.request.LoginRequestDTO;
import com.projetointegrador.indaiatubapalete.dto.request.UserCreateRequestDTO;
import com.projetointegrador.indaiatubapalete.dto.response.AuthResponseDTO;
import com.projetointegrador.indaiatubapalete.dto.response.UserResponseDTO;
import com.projetointegrador.indaiatubapalete.entity.JwtProvider;
import com.projetointegrador.indaiatubapalete.entity.User;
import com.projetointegrador.indaiatubapalete.execptionHandler.AuthException;
import com.projetointegrador.indaiatubapalete.execptionHandler.UserException;
import com.projetointegrador.indaiatubapalete.mapper.UserMapper;
import com.projetointegrador.indaiatubapalete.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtProvider jwtProvider;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtProvider jwtProvider) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtProvider = jwtProvider;
    }
    public UserResponseDTO register(UserCreateRequestDTO userCreateRequestDTO){
        if(userRepository.findByEmail(userCreateRequestDTO.email()).isPresent()){
            throw new UserException(HttpStatus.CONFLICT,"Email already in use.");
        }
        User user = UserMapper.toEntity(userCreateRequestDTO);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User saved = userRepository.save(user);
        return UserMapper.toResponseDTO(saved);
    }

    public AuthResponseDTO login(LoginRequestDTO loginRequestDTO) {
        User user = userRepository.findByEmail(loginRequestDTO.email())
                .orElseThrow(()-> new AuthException(HttpStatus.NOT_FOUND, "User not found."));
        if(!passwordEncoder.matches(loginRequestDTO.password(), user.getPassword())){
            throw new AuthException(HttpStatus.UNAUTHORIZED, "Invalid credentials.");
        }
        String token = jwtProvider.generateToken(user.getEmail());
        return new AuthResponseDTO(token);
    }

}
