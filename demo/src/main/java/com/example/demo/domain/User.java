/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.domain;

import java.io.Serializable;
import java.util.List;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 *
 * @author uraju
 */
@Data
public class User  implements Serializable{
    private static final long serialVersionUID = 4L;
    @Field("lastName")
    private String lastname;
    private String firstName;
    private Integer age;
    private String occupation;
    private List<Phone> contacts;
    private List<Address> addresses;
}
