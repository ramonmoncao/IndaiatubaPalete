package com.projetointegrador.indaiatubapalete.controller;

import com.projetointegrador.indaiatubapalete.dto.request.LoginRequestDTO;
import com.projetointegrador.indaiatubapalete.dto.request.UserCreateRequestDTO;
import com.projetointegrador.indaiatubapalete.dto.response.AuthResponseDTO;
import com.projetointegrador.indaiatubapalete.dto.response.UserResponseDTO;
import com.projetointegrador.indaiatubapalete.execptionHandler.UserException;
import com.projetointegrador.indaiatubapalete.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.net.URI;

/**
 * Controlador responsável por gerenciar as operações de autenticação e registro de usuários.
 */
@Controller
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    /**
     * Construtor para injetar o serviço de autenticação.
     *
     * @param authService Serviço responsável pelas operações de autenticação.
     */
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    /**
     * Realiza o login de um usuário.
     *
     * @param loginRequestDTO Objeto contendo as credenciais de login do usuário.
     * @return Um {@link ResponseEntity} contendo o token de autenticação.
     */
    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login(@RequestBody LoginRequestDTO loginRequestDTO) {
        return ResponseEntity.ok(authService.login(loginRequestDTO));
    }

    /**
     * Registra um novo usuário no sistema.
     *
     * @param userCreateRequestDTO Objeto contendo os dados necessários para criar um novo usuário.
     * @return Um {@link ResponseEntity} contendo o usuário criado e o cabeçalho de localização,
     * ou {@code 400 Bad Request} caso ocorra um erro.
     */
    @PostMapping("/register")
    public ResponseEntity<UserResponseDTO> register(@RequestBody UserCreateRequestDTO userCreateRequestDTO) {
        try {
            UserResponseDTO createdUser = authService.register(userCreateRequestDTO);
            URI location = URI.create("/user/" + createdUser.id());
            return ResponseEntity.created(location).body(createdUser);
        }
        catch (UserException e){
            return ResponseEntity.badRequest().build();
        }
    }
}
