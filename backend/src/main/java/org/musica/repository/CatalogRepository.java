package org.musica.repository;

import org.musica.model.CatalogItem;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;

@Repository
public class CatalogRepository {
    public List<CatalogItem> findAll() {
        return Arrays.asList(
            new CatalogItem("T-Shirt", "M", 19.99),
            new CatalogItem("Jeans", "L", 49.99),
            new CatalogItem("Jacket", "S", 89.99)
        );
    }
}
