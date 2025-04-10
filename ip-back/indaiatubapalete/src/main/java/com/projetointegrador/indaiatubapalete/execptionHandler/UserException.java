package com.projetointegrador.indaiatubapalete.execptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class UserException extends ResponseStatusException {
    public UserException(HttpStatus httpStatus, String message) {
        super(httpStatus, message);
    }
}
