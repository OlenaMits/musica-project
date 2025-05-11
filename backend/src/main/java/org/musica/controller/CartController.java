package org.musica.controller;

import lombok.RequiredArgsConstructor;
import org.musica.model.CartItem;
import org.musica.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class CartController {
    @Autowired
    private final CartService cartService;

    @GetMapping("/cart")
    public List<CartItem> getAll() {
        return cartService.getAll();
    }
}
