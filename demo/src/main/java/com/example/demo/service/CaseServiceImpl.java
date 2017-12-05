/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.service;

import com.example.demo.domain.Case;
//import com.example.demo.repository.CaseRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
@Slf4j
public class CaseServiceImpl implements CaseService {
    //private final CaseRepository repository;
    private final MongoTemplate mongoTemplate;
    
    @Override
    public List<Case> findByLastName(String lastName) {
        log.info("Search by Last Name :{}", lastName);
        final Query query = new Query(Criteria.where("users.lastName").is(lastName));  
        return this.mongoTemplate.find(query, Case.class);    }

    @Override
    public List<Case> findByFirstName(String firstName) {
        log.info("Search by First Name:{}", firstName);
        final Query query = new Query(Criteria.where("users.firstName").is(firstName));  
        return this.mongoTemplate.find(query, Case.class);
    }

    
}
