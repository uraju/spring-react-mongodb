package com.example.demo.config;

import java.util.List;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
//import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.demo.domain.Case;
import com.example.demo.repository.CaseRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class DataLoader implements ApplicationRunner {

    private final CaseRepository controller;

    /** {@inheritDoc} */
    @Override
    public void run(ApplicationArguments args) throws Exception {
    	System.out.println("DEMO: in app start - run");
        //final Long cnt = controller.count();
		List<Case> nameList = controller.findAll();
		if (nameList != null) {
			for(Case name: nameList) {
				System.out.println(name);
			}
		} else {
			System.out.println("DEMO: Name collection empty");
		}
    }
//	@Autowired
//	public DataLoader(NameRepository repository) {
//		this.nameRepo = repository;
//	}
//	@Override
//	public void run(String... arg0) throws Exception {
//		List<Name> nameList = nameRepo.findAll();
//		if (nameList != null) {
//			for(Name name: nameList) {
//				System.out.println(name);
//			}
//		} else {
//			System.out.println("Name collection empty");
//		}
//	}

}
