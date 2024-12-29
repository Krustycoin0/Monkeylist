package com.tokenpromotion.controllers;

import com.tokenpromotion.models.Token;
import com.tokenpromotion.services.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/tokens")
public class TokenController {

  @Autowired
  private TokenService tokenService;

    @GetMapping
    public ResponseEntity<List<Token>> getAllTokens(){
      return ResponseEntity.ok(tokenService.getAllTokens());
    }
}
