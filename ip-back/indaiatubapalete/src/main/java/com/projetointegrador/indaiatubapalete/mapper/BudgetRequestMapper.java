package com.projetointegrador.indaiatubapalete.mapper;

import com.projetointegrador.indaiatubapalete.dto.response.BudgetResponseDTO;
import com.projetointegrador.indaiatubapalete.entity.BudgetRequest;
import com.projetointegrador.indaiatubapalete.entity.BudgetRequestStatus;

import java.util.ArrayList;
import java.util.List;

public class BudgetRequestMapper {

    public static BudgetResponseDTO toResponseDTO(BudgetRequest budgetRequest) {
        BudgetResponseDTO budgetRequestDTO = new BudgetResponseDTO(
                budgetRequest.getId(),
                budgetRequest.getStatus(),
                UserMapper.toResponseDTO(budgetRequest.getUser()),
                budgetRequest.getSubTotal());
        return budgetRequestDTO;
    }

    public static List<BudgetResponseDTO> toResponseDTO(List<BudgetRequest> budgetRequests) {
        List<BudgetResponseDTO> budgetRequestDTOS = new ArrayList<>();
        for (BudgetRequest budgetRequest : budgetRequests) {
            budgetRequestDTOS.add(toResponseDTO(budgetRequest));
        }
        return budgetRequestDTOS;
    }
}
