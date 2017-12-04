package com.example.demo.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Name;

@CrossOrigin
@RestController
@RequestMapping("search")
public class NameSearchController {
	@Autowired
	private  NameRepository nameRepo;
	
	@RequestMapping("fname/{firstName}")
	public List<Name> getNameByFirstName(@PathVariable String firstName) {
		System.out.println("DEMO: Search Param: " + firstName);
		List<Name> nameList = nameRepo.findByFirstName(firstName);
		
		return nameList;
	}
	@RequestMapping("lname/{lastName}")
	public List<Name> getNameByLastName(@PathVariable String lastName) {
		System.out.println("DEMO: Search Param: " + lastName);
		List<Name> nameList = nameRepo.findByLastName(lastName);
		
		return nameList;
	}
	

}
