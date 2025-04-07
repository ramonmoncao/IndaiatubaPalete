package com.projetointegrador.indaiatubapalete.controller;

import com.projetointegrador.indaiatubapalete.dto.request.SubTotalDTO;
import com.projetointegrador.indaiatubapalete.dto.response.BudgetResponseDTO;
import com.projetointegrador.indaiatubapalete.service.BudgetRequestService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/budgets")
@Controller
public class BudgetRequestController {

    private final BudgetRequestService budgetRequestService;

    public BudgetRequestController(BudgetRequestService budgetRequestService) {
        this.budgetRequestService = budgetRequestService;
    }

    @PostMapping("/user/{id}")
    @ResponseBody
    public BudgetResponseDTO createBudget(@PathVariable Long id, @RequestBody List<SubTotalDTO> subTotalDTOS) {
        return budgetRequestService.createBudgetRequest(id, subTotalDTOS);
    }
    @GetMapping
    @ResponseBody
    public List<BudgetResponseDTO> getAllBudgets() {
        return budgetRequestService.getAllBudgetRequests();
    }
    @GetMapping("/{id}")
    @ResponseBody
    public BudgetResponseDTO getBudgetById(@PathVariable Long id) {
        return budgetRequestService.getBudgetRequestById(id);
    }
}
