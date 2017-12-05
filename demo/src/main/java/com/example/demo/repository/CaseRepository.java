package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.domain.Case;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public interface CaseRepository extends MongoRepository<Case, String> {

}
