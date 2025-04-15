package org.musica.controller;

import lombok.RequiredArgsConstructor;
import org.musica.model.ProductItem;
import org.musica.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ProductController {
    @Autowired
    private final ProductService productService;

    @GetMapping("/products")
    public List<ProductItem> getAll() {
        return productService.getAll();
    }
}
