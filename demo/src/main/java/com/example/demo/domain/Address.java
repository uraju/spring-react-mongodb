/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.domain;

import java.io.Serializable;
import lombok.Data;

/**
 *
 * @author uraju
 */
@Data
public class Address  implements Serializable{
    private static final long serialVersionUID = 6L;
    private String type;
    private String street1;
    private String street2;
    private String city;
    private String state;
    private String zip;
}
