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
public class Phone  implements Serializable{
    private static final long serialVersionUID = 5L;
    private String type;
    private String number;
}
