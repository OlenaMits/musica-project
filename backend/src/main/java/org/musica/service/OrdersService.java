package org.musica.service;

import lombok.RequiredArgsConstructor;
import org.musica.model.OrderItem;
import org.musica.repository.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrdersService {
    @Autowired
    private final OrdersRepository ordersRepository;

    public List<OrderItem> getAll() { return ordersRepository.findAll(); }

    public Optional<OrderItem> getById(String id) { return ordersRepository.findById(id); }
}
