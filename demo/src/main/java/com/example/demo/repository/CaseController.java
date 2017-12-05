package com.example.demo.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;

import com.example.demo.domain.Case;
import com.example.demo.service.CaseService;

@CrossOrigin
@RestController
@RequestMapping("/case")
public class CaseController {
	@Autowired
	private  CaseService service;
	
    @RequestMapping("/fname/{firstName}")
    //@CachePut(value = "case", key = "#firstName")
    public List<Case> findByFirstName(@PathVariable("firstName") String firstName) {
        return service.findByFirstName(firstName);
    }
    @RequestMapping("/lname/{lastName}")
    //@CachePut(value = "case", key = "#lastName")
    public List<Case> findByLastName(@PathVariable("lastName") String lastName) {
        return service.findByLastName(lastName);
    }
}
