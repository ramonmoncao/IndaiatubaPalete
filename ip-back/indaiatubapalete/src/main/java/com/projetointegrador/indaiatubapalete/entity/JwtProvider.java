package com.projetointegrador.indaiatubapalete.entity;

import com.projetointegrador.indaiatubapalete.repository.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import java.util.Date;

/**
 * Classe responsável por gerar e validar tokens JWT.
 */
@Component
public class JwtProvider {

    /**
     * Tempo de expiração do token em milissegundos (1 dia).
     */
    private final long EXPIRATION_TIME = 86400000;
    private final UserRepository userRepository;
    /**
     * Chave secreta usada para assinar os tokens JWT.
     * O valor é configurado no arquivo de propriedades da aplicação.
     */
    @Value("${jwt.secret}")
    private String SECRET;

    public JwtProvider(UserRepository userRepository){
        this.userRepository =  userRepository;
    }

    /**
     * Gera um token JWT com base no email do usuário.
     *
     * @param email Email do usuário para o qual o token será gerado.
     * @return Token JWT gerado.
     */
    public String generateToken(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(()-> new ResponseStatusException
                        (HttpStatus.NOT_FOUND,"Email não cadastrado"));
        return Jwts.builder()
                .setSubject(email)
                .claim("UserType", user.getUserType())
                .claim("Id",user.getId())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
    }

    /**
     * Obtém o email do usuário a partir de um token JWT.
     *
     * @param token Token JWT do qual o email será extraído.
     * @return Email do usuário contido no token.
     */
    public String getEmailFromToken(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}
