package com.projetointegrador.indaiatubapalete.entity;

import com.projetointegrador.indaiatubapalete.repository.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

/**
 * Filtro responsável por interceptar requisições HTTP e validar o token JWT.
 * Este filtro é executado uma vez por requisição.
 */
@Component
public class JwtFilter extends OncePerRequestFilter {

    private final JwtProvider jwtProvider;
    private final UserRepository userRepository;

    /**
     * Construtor para injetar dependências.
     *
     * @param jwtProvider Provedor responsável por manipular tokens JWT.
     * @param userRepository Repositório para buscar informações do usuário.
     */
    public JwtFilter(JwtProvider jwtProvider, UserRepository userRepository) {
        this.jwtProvider = jwtProvider;
        this.userRepository = userRepository;
    }

    /**
     * Método que intercepta a requisição, valida o token JWT e autentica o usuário.
     *
     * @param request Objeto da requisição HTTP.
     * @param response Objeto da resposta HTTP.
     * @param filterChain Cadeia de filtros para continuar o processamento da requisição.
     * @throws ServletException Caso ocorra um erro durante o processamento do filtro.
     * @throws IOException Caso ocorra um erro de entrada/saída.
     */
    @Override
    public void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            String email = jwtProvider.getEmailFromToken(token);

            UserDetails userDetails = userRepository.findByEmail(email)
                    .map(user -> User.withUsername(user.getEmail())
                            .password(user.getPassword())
                            .build())
                    .orElse(null);

            if (userDetails != null) {
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        }
        filterChain.doFilter(request, response);
    }
}
