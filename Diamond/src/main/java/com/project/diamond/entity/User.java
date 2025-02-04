package com.project.diamond.entity;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import lombok.Data;


@Entity
@Data
public class User {
	
	@Id
	private int id;
	
	private String name;
	
	private String phone;
}
