 package com.projetointegrador.indaiatubapalete.runner;

import com.projetointegrador.indaiatubapalete.entity.User;
import com.projetointegrador.indaiatubapalete.entity.UserType;
import com.projetointegrador.indaiatubapalete.repository.UserRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AdminRegister implements ApplicationRunner {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    public AdminRegister(UserRepository userRepository, PasswordEncoder passwordEncoder ){
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }
    @Override
    public void run(ApplicationArguments args) throws Exception{
        User user= new User(
                "admin@email.com",
                "admin",
                passwordEncoder.encode("admin123"),
                null, UserType.ADMIN);
        userRepository.save(user);
        System.out.println("Admin criado");
    }
}
