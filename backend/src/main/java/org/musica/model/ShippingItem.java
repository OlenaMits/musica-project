package org.musica.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ShippingItem {

    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String address;
    private String city;
    private String postalCode;
    private String email;
    private String phone;
    private String cardHolder;
    private String cardNumber;
    private String cardMonthExpire;
    private String cardYearExpire;
    private String cardCvvCode;

}
