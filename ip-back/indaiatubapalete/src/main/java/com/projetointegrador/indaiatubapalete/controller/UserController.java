package com.projetointegrador.indaiatubapalete.controller;

import com.projetointegrador.indaiatubapalete.dto.request.UserCreateRequestDTO;
import com.projetointegrador.indaiatubapalete.dto.response.UserResponseDTO;
import com.projetointegrador.indaiatubapalete.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    @ResponseBody
    public UserResponseDTO createUser(@RequestBody UserCreateRequestDTO userCreateRequestDTO) {
        return userService.createUser(userCreateRequestDTO);
    }

    @GetMapping
    @ResponseBody
    public List<UserResponseDTO> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    @ResponseBody
    public UserResponseDTO getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }
}
