package com.tokenpromotion.models;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Token {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private String symbol;
  private String description;
  @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Advisor> advisors;

    // Costruttori, getters e setters
   public Token(){}
  public Token(String name, String symbol, String description, List<Advisor> advisors) {
      this.name = name;
      this.symbol = symbol;
      this.description = description;
      this.advisors = advisors;
  }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Advisor> getAdvisors() {
        return advisors;
    }

    public void setAdvisors(List<Advisor> advisors) {
        this.advisors = advisors;
    }
}
