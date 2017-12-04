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

import com.example.demo.domain.Name;
import com.example.demo.service.NameService;

@CrossOrigin
@RestController
@RequestMapping("/name")
public class NameController {
	@Autowired
	private  NameService service;
	
    @PostMapping(value = "/save")
    public Name saveName(Name name) {
        return service.save(name);
    }
    
	@RequestMapping("/find")
	public List<Name> findAll() {
		return service.findAll();
	}
	

    @GetMapping(value = "/id/{id}")
    @Cacheable(value = "name", key = "#id", unless = "#result == null")
    public Name findById(@PathVariable String id) {
    	System.out.println("DEMO: in controller, findById: " + id);
        return service.findOne(id);
    }

    /**
     * <p>updateByTitle.</p>
     *
     * @param title a {@link java.lang.String} object.
     * @param author a {@link java.lang.String} object.
     * @return a {@link com.poc.mongodbredisintegration.document.Name} object.
     */
    @PutMapping(value = "/updateById/{id}/{first}/{last}")
    @CachePut(value = "name", key = "#id")
    public Name updateById(@PathVariable("id") String id,
    		@PathVariable("first") String first,
            @PathVariable("last") String last) {
        return service.updateById(id, first, last);
    }

    /**
     * <p>deleteNameByTitle.</p>
     *
     * @param title a {@link java.lang.String} object.
     * @return a {@link java.lang.String} object.
     */
    @DeleteMapping(value = "/deleteById/{id}")
    @CacheEvict(value = "name", key = "#id")
    public String deleteById(@PathVariable(value = "id") String id) {
        final Name name = this.service.findOne(id);
        if (null != name) {
            this.service.delete(id);
            return "Name with id " + id + " deleted";
        } else {
            return "Name with id " + id + " Not Found";
        }
    }

    /**
     * Deletes all cache
     */
    @GetMapping(value = "/deleteCache")
    @CacheEvict(value = "name", allEntries = true)
    public void deleteCache() {
        this.service.deleteAllCache();
    }

    /**
     * <p>count.</p>
     *
     * @return a {@link java.lang.Long} object.
     */
    public Long count() {
        return this.service.count();
    }



}
