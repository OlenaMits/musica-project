package org.musica.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "products")
public class ProductItem {

    @Id
    private String id;

    private String title;


    private String catalogId;

    private double price;
    private String url;
    private int articul;
    private String color;

    private LocalDateTime createdAt;
}
