package com.projetointegrador.indaiatubapalete.execptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class ProductException extends ResponseStatusException {
    public ProductException(HttpStatus httpStatus, String message) {
        super(httpStatus, message);
    }
}
