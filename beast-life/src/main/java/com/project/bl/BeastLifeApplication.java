package com.project.bl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class BeastLifeApplication {

	public static void main(String[] args) {
		SpringApplication.run(BeastLifeApplication.class, args);
	}

}
