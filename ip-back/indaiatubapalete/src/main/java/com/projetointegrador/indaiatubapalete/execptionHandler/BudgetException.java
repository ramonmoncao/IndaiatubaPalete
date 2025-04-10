package com.projetointegrador.indaiatubapalete.execptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class BudgetException extends ResponseStatusException {
    public BudgetException(HttpStatus httpStatus, String message) {
        super(httpStatus, message);
    }
}
