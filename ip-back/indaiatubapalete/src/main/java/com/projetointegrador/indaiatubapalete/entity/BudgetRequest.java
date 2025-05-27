package com.projetointegrador.indaiatubapalete.entity;

import jakarta.persistence.*;

import java.util.List;

/**
 * Entidade que representa uma solicitação de orçamento no sistema.
 */
@Entity
public class BudgetRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "budget_id")
    private List<SubTotal> subTotal;

    @Enumerated(EnumType.STRING)
    private BudgetRequestStatus status;

    /**
     * Obtém o ID da solicitação de orçamento.
     *
     * @return ID da solicitação de orçamento.
     */
    public Long getId() {
        return id;
    }

    /**
     * Define o ID da solicitação de orçamento.
     *
     * @param id ID da solicitação de orçamento.
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * Obtém a lista de subtotais associados à solicitação de orçamento.
     *
     * @return Lista de subtotais.
     */
    public List<SubTotal> getSubTotal() {
        return subTotal;
    }

    /**
     * Define a lista de subtotais associados à solicitação de orçamento.
     *
     * @param subTotal Lista de subtotais.
     */
    public void setSubTotal(List<SubTotal> subTotal) {
        this.subTotal = subTotal;
    }

    /**
     * Obtém o usuário associado à solicitação de orçamento.
     *
     * @return Usuário associado.
     */
    public User getUser() {
        return user;
    }

    /**
     * Define o usuário associado à solicitação de orçamento.
     *
     * @param user Usuário associado.
     */
    public void setUser(User user) {
        this.user = user;
    }

    /**
     * Obtém o status da solicitação de orçamento.
     *
     * @return Status da solicitação de orçamento.
     */
    public BudgetRequestStatus getStatus() {
        return status;
    }

    /**
     * Define o status da solicitação de orçamento.
     *
     * @param status Status da solicitação de orçamento.
     */
    public void setStatus(BudgetRequestStatus status) {
        this.status = status;
    }
}
