package org.musica.controller;

import lombok.RequiredArgsConstructor;
import org.musica.model.OrderItem;
import org.musica.service.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class OrdersController {
    @Autowired
    private final OrdersService ordersService;

    @GetMapping("/orders")
    public List<OrderItem> getAll() {
        return ordersService.getAll();
    }
}
