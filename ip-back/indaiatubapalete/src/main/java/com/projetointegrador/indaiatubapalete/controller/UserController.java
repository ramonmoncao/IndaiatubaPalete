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

@Controller
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping
    public ResponseEntity<List<UserResponseDTO>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponseDTO> getUserById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(userService.getUserById(id));
        }
        catch (UserException e){
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<UserResponseDTO> updateUser(@PathVariable Long id, @RequestBody UserUpdateRequestDTO userUpdateRequestDTO) {
            return ResponseEntity.ok(userService.updateUser(id, userUpdateRequestDTO));
    }
}
