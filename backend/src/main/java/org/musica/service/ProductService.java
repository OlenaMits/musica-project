package org.musica.service;

import lombok.RequiredArgsConstructor;
import org.musica.model.ProductItem;
import org.musica.repository.CatalogRepository;
import org.musica.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {
    @Autowired
    private final ProductRepository productRepository;
    @Autowired
    private final CatalogRepository catalogRepository;

    public List<ProductItem> getAll() {
        return productRepository.findAll();
    }
}
