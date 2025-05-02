package com.projetointegrador.indaiatubapalete.controller;

import com.projetointegrador.indaiatubapalete.dto.request.UserCreateRequestDTO;
import com.projetointegrador.indaiatubapalete.dto.request.UserUpdateRequestDTO;
import com.projetointegrador.indaiatubapalete.dto.response.UserResponseDTO;
import com.projetointegrador.indaiatubapalete.execptionHandler.UserException;
import com.projetointegrador.indaiatubapalete.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

/**
 * Controlador responsável por gerenciar as operações relacionadas aos usuários.
 */
@Controller
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    /**
     * Construtor para injetar o serviço de usuários.
     *
     * @param userService Serviço responsável pelas operações de usuários.
     */
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * Recupera todos os usuários cadastrados.
     *
     * @return Lista de usuários encapsulada em um {@link ResponseEntity}.
     */
    @GetMapping
    public ResponseEntity<List<UserResponseDTO>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    /**
     * Recupera um usuário pelo ID.
     *
     * @param id ID do usuário a ser recuperado.
     * @return Usuário encontrado ou {@code 404 Not Found} se não existir.
     */
    @GetMapping("/{id}")
    public ResponseEntity<UserResponseDTO> getUserById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(userService.getUserById(id));
        }
        catch (UserException e){
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Atualiza os dados de um usuário existente.
     *
     * @param id ID do usuário a ser atualizado.
     * @param userUpdateRequestDTO Dados para atualização do usuário.
     * @return Usuário atualizado ou {@code 404 Not Found} se não existir.
     */
    @PutMapping("/{id}")
    public ResponseEntity<UserResponseDTO> updateUser(@PathVariable Long id, @RequestBody UserUpdateRequestDTO userUpdateRequestDTO) {
        try{
            return ResponseEntity.ok(userService.updateUser(id, userUpdateRequestDTO));
        }
        catch (UserException e){
            return ResponseEntity.notFound().build();
        }
    }
}
