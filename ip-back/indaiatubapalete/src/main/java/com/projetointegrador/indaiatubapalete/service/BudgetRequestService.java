package com.projetointegrador.indaiatubapalete.service;

import com.projetointegrador.indaiatubapalete.dto.request.SubTotalDTO;
import com.projetointegrador.indaiatubapalete.dto.response.BudgetResponseDTO;
import com.projetointegrador.indaiatubapalete.entity.*;
import com.projetointegrador.indaiatubapalete.mapper.BudgetRequestMapper;
import com.projetointegrador.indaiatubapalete.repository.BudgetRequestRepository;
import com.projetointegrador.indaiatubapalete.repository.ProductRepository;
import com.projetointegrador.indaiatubapalete.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class BudgetRequestService {

    private final BudgetRequestRepository budgetRequestRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    public BudgetRequestService(BudgetRequestRepository budgetRequestRepository, UserRepository userRepository, ProductRepository productRepository) {
        this.budgetRequestRepository = budgetRequestRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }

    public BudgetResponseDTO createBudgetRequest(Long userId, List<SubTotalDTO> subTotalsDTOs) {
        User user = userRepository .findById(userId)
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND,"User not found"));

        List<SubTotal> subTotals = subTotalsDTOs.stream().map(dto -> {
            SubTotal subTotal = new SubTotal();
            subTotal.setQuantity(dto.quantity());
            Product product = productRepository.findById(dto.productId())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));
            subTotal.setProduct(product);

            return subTotal;
        }).toList();

        BudgetRequest budgetRequest = new BudgetRequest();
        budgetRequest.setUser(user);
        budgetRequest.setStatus(BudgetRequestStatus.PENDING);
        budgetRequest.setSubTotal(subTotals);

        BudgetRequest saved = budgetRequestRepository.save(budgetRequest);

        return BudgetRequestMapper.toResponseDTO(saved);
    }

    public List<BudgetResponseDTO> getAllBudgetRequests() {
        List<BudgetRequest> budgetRequests = budgetRequestRepository.findAll();
        return BudgetRequestMapper.toResponseDTO(budgetRequests);
    }

    public BudgetResponseDTO getBudgetRequestById(Long id) {
        BudgetRequest budgetRequest = budgetRequestRepository.findById(id)
                .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Budget request not found"));
        return BudgetRequestMapper.toResponseDTO(budgetRequest);
    }
}
