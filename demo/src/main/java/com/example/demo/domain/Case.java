/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.domain;

import java.util.List;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author uraju
 */
@Data
@Document(collection = "Cases")
public class Case extends Node {
    private static final long serialVersionUID = 3L;
    private String caseId;
    private List<User> users;
}
