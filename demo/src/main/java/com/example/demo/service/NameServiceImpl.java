package com.example.demo.service;

import java.util.List;

import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import com.example.demo.domain.Name;
import com.example.demo.repository.NameRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RequiredArgsConstructor
@Service
@Slf4j
public class NameServiceImpl implements NameService {
    private final NameRepository repository;
    private final MongoTemplate mongoTemplate;
    
	@Override
	public Long count() {
		return this.repository.count();
	}

	@Override
	public void deleteAllCache() {
		log.info("Deleting Cache");
	}

	@Override
	public Name updateById(String id, String first, String last) {
        log.info("Updating Name F, S:{}, {}", first, last);
        final Query query = new Query(Criteria.where("id").is(id));
        final Update update = new Update().set("firstName", first)
        		.set("lastName", last);
        return this.mongoTemplate.findAndModify(query, update,
                new FindAndModifyOptions().returnNew(true).upsert(false), Name.class);
	}

	@Override
	public Name findOne(String id) {
		log.info("DEMO: in NameService, finding Name by id :{}", id);
		return this.repository.findOne(id);
	}

	@Override
	public void delete(String id) {
        log.info("deleting Name by id :{}", id);
        this.repository.delete(id);//ById(id);
	}

	@Override
	public Name save(Name name) {
		log.info("Saving Name :{}", name.toString());
		return this.repository.save(name);
	}

	@Override
	public List<Name> findAll() {
		log.info("finding Name collection");
		if (this.repository == null) {
			log.info("repository object null");
		} else {
			List<Name> names = this.repository.findAll();
			if (names != null)
				log.info("collection size " + names.size());
			else
				log.info("collection is null");
			return names;
		}
		return null;
	}
	
	public void deleteAllCollections() {
		this.repository.deleteAll();
	}
}
