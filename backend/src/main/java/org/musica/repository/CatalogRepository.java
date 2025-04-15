package org.musica.repository;

import org.musica.model.CatalogItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CatalogRepository extends MongoRepository<CatalogItem, String> {
}
