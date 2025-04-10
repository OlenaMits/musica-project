package org.musica.controller;

import lombok.RequiredArgsConstructor;
import org.musica.model.CatalogItem;
import org.musica.service.CatalogService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class CatalogController {
    private final CatalogService catalogService;

    @GetMapping("/catalog")
    public List<CatalogItem> getAll() {
        return catalogService.getAll();
    }
}
