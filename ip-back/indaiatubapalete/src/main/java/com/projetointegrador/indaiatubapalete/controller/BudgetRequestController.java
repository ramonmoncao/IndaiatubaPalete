package com.projetointegrador.indaiatubapalete.controller;

import com.projetointegrador.indaiatubapalete.dto.request.SubTotalRequestDTO;
import com.projetointegrador.indaiatubapalete.dto.response.BudgetResponseDTO;
import com.projetointegrador.indaiatubapalete.execptionHandler.BudgetException;
import com.projetointegrador.indaiatubapalete.execptionHandler.ProductException;
import com.projetointegrador.indaiatubapalete.execptionHandler.UserException;
import com.projetointegrador.indaiatubapalete.service.BudgetRequestService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RequestMapping("/budgets")
@Controller
public class BudgetRequestController {

    private final BudgetRequestService budgetRequestService;

    public BudgetRequestController(BudgetRequestService budgetRequestService) {
        this.budgetRequestService = budgetRequestService;
    }

    @PostMapping("/user/{id}")
    public ResponseEntity<BudgetResponseDTO> createBudget(@PathVariable Long id, @RequestBody List<SubTotalRequestDTO> subTotalRequestDTOS) {
        try {
            BudgetResponseDTO createdBudget = budgetRequestService.createBudgetRequest(id, subTotalRequestDTOS);
            URI location = URI.create("/budget-request/" + createdBudget.id());
            return ResponseEntity.created(location).body(createdBudget);
        }
        catch (BudgetException e){
            return ResponseEntity.badRequest().build();
        }
    }
    @GetMapping
    public ResponseEntity<List<BudgetResponseDTO>> getAllBudgets() {
        return ResponseEntity.ok(budgetRequestService.getAllBudgetRequests());
    }
    @GetMapping("/{id}")
    public ResponseEntity<BudgetResponseDTO> getBudgetById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(budgetRequestService.getBudgetRequestById(id));
        }
        catch (BudgetException e){
            return ResponseEntity.notFound().build();
        }
    }
}
