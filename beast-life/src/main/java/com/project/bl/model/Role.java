package com.project.bl.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Role {
	
	@Id
	private Integer id;
	
	@Column(nullable = false , unique = true)
	private String roleName;
	
	
	

}
