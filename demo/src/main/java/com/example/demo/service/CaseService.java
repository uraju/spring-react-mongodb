/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.service;

import com.example.demo.domain.Case;
import java.util.List;

/**
 *
 * @author uraju
 */
public interface CaseService {
    public List<Case> findByLastName(String lastName);
    public List<Case> findByFirstName(String firstName);
}
