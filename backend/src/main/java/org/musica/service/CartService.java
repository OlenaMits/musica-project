package org.musica.service;

import lombok.RequiredArgsConstructor;
import org.musica.model.CartItem;
import org.musica.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartService {
    @Autowired
    private final CartRepository cartRepository;

    public List<CartItem> getAll() { return cartRepository.findAll(); }

    public Optional<CartItem> getById(String id) { return cartRepository.findById(id); }
}
