package com.projetointegrador.indaiatubapalete.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

/**
 * Entidade que representa um usuário no sistema.
 */
@Entity
@Table(name = "Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;

    private String password;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<BudgetRequest> budgetRequest;
    private String phoneNumber;
    private UserType userType;

    /**
     * Construtor com parâmetros.
     *
     * @param email Email do usuário.
     * @param name Nome do usuário.
     * @param password Senha do usuário.
     * @param phoneNumber Número de telefone do usuário.
     * @param userType Tipo do usuário.
     */
    public User(String email, String name, String password, String phoneNumber, UserType userType) {

        this.email = email;
        this.name = name;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.userType = userType;
    }

    /**
     * Construtor padrão.
     */
    public User() {
    }

    /**
     * Obtém o ID do usuário.
     *
     * @return ID do usuário.
     */
    public Long getId() {
        return id;
    }

    /**
     * Define o ID do usuário.
     *
     * @param id ID do usuário.
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * Obtém o email do usuário.
     *
     * @return Email do usuário.
     */
    public String getEmail() {
        return email;
    }

    /**
     * Define o email do usuário.
     *
     * @param email Email do usuário.
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Obtém o nome do usuário.
     *
     * @return Nome do usuário.
     */
    public String getName() {
        return name;
    }

    /**
     * Define o nome do usuário.
     *
     * @param name Nome do usuário.
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Obtém a senha do usuário.
     *
     * @return Senha do usuário.
     */
    public String getPassword() {
        return password;
    }

    /**
     * Define a senha do usuário.
     *
     * @param password Senha do usuário.
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * Obtém a lista de solicitações de orçamento associadas ao usuário.
     *
     * @return Lista de solicitações de orçamento.
     */
    public List<BudgetRequest> getOrcamentoRequest() {
        return budgetRequest;
    }

    /**
     * Obtém o número de telefone do usuário.
     *
     * @return Número de telefone do usuário.
     */
    public String getPhoneNumber() {
        return phoneNumber;
    }

    /**
     * Define o número de telefone do usuário.
     *
     * @param phoneNumber Número de telefone do usuário.
     */
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    /**
     * Obtém o tipo do usuário.
     *
     * @return Tipo do usuário.
     */
    public UserType getUserType() {
        return userType;
    }

    /**
     * Define o tipo do usuário.
     *
     * @param userType Tipo do usuário.
     */
    public void setUserType(UserType userType) {
        this.userType = userType;
    }
}
