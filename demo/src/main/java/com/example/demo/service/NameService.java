package com.example.demo.service;

import java.util.List;

import com.example.demo.domain.Name;

public interface NameService {
	Long count();
	
	public void deleteAllCache();
	public Name updateById(String id, String first, String last);

	public Name findOne(String id);

	public void delete(String id);

	public Name save(Name name);

	public List<Name> findAll();

	public void deleteAllCollections();
}
