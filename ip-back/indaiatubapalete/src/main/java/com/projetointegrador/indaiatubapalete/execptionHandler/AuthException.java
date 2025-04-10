package com.projetointegrador.indaiatubapalete.execptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class AuthException extends ResponseStatusException {
    public AuthException(HttpStatus httpStatus, String message) {
        super(httpStatus, message);
    }
}
