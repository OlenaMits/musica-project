package org.musica.service;

import lombok.RequiredArgsConstructor;
import org.musica.model.CatalogItem;
import org.musica.repository.CatalogRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CatalogService {
    private final CatalogRepository catalogRepository;

    public List<CatalogItem> getAll() {
        return catalogRepository.findAll();
    }
}
