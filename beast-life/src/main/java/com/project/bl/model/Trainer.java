package com.project.bl.model;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
@Entity
public class Trainer {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@NotBlank(message = "name is required")
	private String name;

	@Column(unique = true, nullable = false)
	@NotBlank(message = "Phone number is required")
	@Pattern(regexp = "\\d{10}", message = "Phone number must contain exactly 10 digits")
	private String phoneNumber;

	@NotNull(message = "Experience is required") // Ensures the value is not null
	@Min(value = 0, message = "Experience must be at least 0 years")
	private Integer experience;
	
	@OneToMany(mappedBy = "trainer", cascade = CascadeType.ALL)
	@JsonIgnore
	private Set<Member> members;


}
