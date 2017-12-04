package com.example.demo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.domain.Name;

@CrossOrigin
public interface NameRepository extends MongoRepository<Name, String> {
	public List<Name> findByFirstName(@PathVariable String firstName);
	public List<Name> findByLastName(@PathVariable String lastName);
}
