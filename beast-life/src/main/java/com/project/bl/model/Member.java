package com.project.bl.model;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@EntityListeners(AuditingEntityListener.class)
@Data
@Entity
public class Member {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@NotBlank(message = "Name is required")
	private String name;

	@NotBlank(message = "Email is required")
	@Email(message = "Email should be valid")
	private String email;

	@NotBlank(message = "Password is required")
	@Size(min = 8, message = "password should have at least 8 characters")
	private String password;

	@NotBlank(message = "address is required")
	private String address;

	@NotNull(message = "Age is required")
	@Min(value = 16, message = "age must be equal to or greater than 16")
	private Integer age;

	@NotNull(message = "Weight is required")
	@Min(value = 25, message = "age must be equal to or greater than 25")
	private Double weight;
//	gender

//	@ManyToOne
//	@JoinColumn(name = "trainer_id", referencedColumnName = "id")
//	private Trainer trainer;
	@ManyToOne
	@JoinColumn(name = "trainer_id", referencedColumnName = "id", nullable = true)
	private Trainer trainer; 
	

	@OneToOne(mappedBy = "member")
	@JsonIgnore
    private Review review;



}
