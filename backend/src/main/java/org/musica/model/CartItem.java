package org.musica.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
//@Document(collection = "carts")
public class CartItem {

    @Id
    private String id;
    private List<ProductItem> cartProducts = new ArrayList<>();

}
