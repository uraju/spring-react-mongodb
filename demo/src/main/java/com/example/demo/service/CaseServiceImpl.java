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
        // NOTE: Search starts with 'lastName', ignores case
        final Query query = new Query(Criteria.where("user.lastName").regex("^"+lastName, "i"));  
        log.info("Search mogodb query : ", query.toString());
        return this.mongoTemplate.find(query, Case.class);    }

    @Override
    public List<Case> findByFirstName(String firstName) {
        log.info("Search by First Name:{}", firstName);
        // NOTE: Search contain 'firstName', returns, ignores case
        final Query query = new Query(Criteria.where("user.firstName").regex(firstName+".*", "i"));  
        log.info("Search mogodb query : ", query.toString());
        return this.mongoTemplate.find(query, Case.class);
    }

    
}
