package org.musica.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
//@Document(collection = "orders")
public class OrderItem {

    @Id
    private String id;
    private CartItem cart;
    private ShippingItem shippingDetails;

}
