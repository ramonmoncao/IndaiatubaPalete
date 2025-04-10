package com.projetointegrador.indaiatubapalete.dto.response;

import com.projetointegrador.indaiatubapalete.entity.BudgetRequestStatus;
import com.projetointegrador.indaiatubapalete.entity.SubTotal;

import java.util.List;

public record BudgetResponseDTO(
        Long id,
        BudgetRequestStatus status,
        UserResponseDTO user,
        List<SubTotal> subTotals
) {
}
