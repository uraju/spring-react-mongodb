package com.example.demo.domain;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import lombok.Data;

@Data
public class Node implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private @Id String id;
}
