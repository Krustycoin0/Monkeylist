package com.tokenpromotion.services;

import com.tokenpromotion.models.Token;
import com.tokenpromotion.repositories.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TokenService {

    @Autowired
    private TokenRepository tokenRepository;

    public List<Token> getAllTokens(){
        return tokenRepository.findAll();
    }
}
