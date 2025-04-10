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

@Controller
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }
    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login(@RequestBody LoginRequestDTO loginRequestDTO) {
        return ResponseEntity.ok(authService.login(loginRequestDTO));
    }

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
