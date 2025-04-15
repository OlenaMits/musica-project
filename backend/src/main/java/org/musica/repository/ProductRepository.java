package org.musica.repository;

import org.musica.model.ProductItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends MongoRepository<ProductItem, String> {
//    public List<ProductItem> findAll() {
//        return Arrays.asList(
//            new ProductItem("T-Shirt", "M", 19.99),
//            new ProductItem("Jeans", "L", 49.99),
//            new ProductItem("Jacket", "S", 89.99)
//        );
//    }
}
