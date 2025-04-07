package com.projetointegrador.indaiatubapalete.entity;

import jakarta.persistence.*;

import java.util.List;

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

    private BudgetRequestStatus status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<SubTotal> getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(List<SubTotal> subTotal) {
        this.subTotal = subTotal;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public BudgetRequestStatus getStatus() {
        return status;
    }

    public void setStatus(BudgetRequestStatus status) {
        this.status = status;
    }
}
