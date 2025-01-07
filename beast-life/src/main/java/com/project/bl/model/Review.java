package com.project.bl.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
public class Review {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@Size(min = 3, max = 50, message = "Password should have at least 8 characters")
	private String description;

	@OneToOne
	@JoinColumn(name = "member_id", referencedColumnName = "id", nullable = true)
	private Member member;

}
