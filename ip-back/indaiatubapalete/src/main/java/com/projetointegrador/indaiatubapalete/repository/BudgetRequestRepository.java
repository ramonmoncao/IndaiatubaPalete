package com.projetointegrador.indaiatubapalete.repository;

import com.projetointegrador.indaiatubapalete.entity.BudgetRequest;
import com.projetointegrador.indaiatubapalete.entity.BudgetRequestStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BudgetRequestRepository extends JpaRepository<BudgetRequest,Long> {

    @Query("SELECT b FROM BudgetRequest b WHERE b.status = :status")
    List<BudgetRequest> getBudgets(@Param("status") BudgetRequestStatus status);
}