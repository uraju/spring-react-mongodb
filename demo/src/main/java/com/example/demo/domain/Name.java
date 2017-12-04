package com.example.demo.domain;

import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Data;

@Data
@Document
public class Name extends Node {
	
	private static final long serialVersionUID = 2L;
	
	@Indexed
	private String firstName;
	@Indexed
	private String lastName;
	@Field("Age")
	private Integer age;
	@Field("Occupation")
	private String jobDescription;
}
