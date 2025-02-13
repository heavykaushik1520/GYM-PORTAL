package com.project.bl.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.bl.model.Trainer;
import com.project.bl.services.TrainerService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/trainers")
@CrossOrigin("*")
public class TrainerController {

	@Autowired
	private TrainerService trainerService;

	@PostMapping
	public ResponseEntity<?> createTrainer(@RequestBody Trainer trainer) {
		return trainerService.createTrainer(trainer);
	}

	@GetMapping
	public ResponseEntity<?> getAllTrainers() {
		return trainerService.getAllTrainers();
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getTrainerById(@PathVariable("id") Integer id) {
		return trainerService.getTrainerById(id);
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> updateTrainerById(@PathVariable Integer id, @RequestBody @Valid Trainer trainer) {
		return trainerService.updateTrainerById(id, trainer);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteTrainer(@PathVariable Integer id) {
		return trainerService.deleteTrainerById(id);
	}

	@GetMapping("/name")
	public ResponseEntity<?> getTrainersByName(@RequestParam String name) {
		return trainerService.getTrainersByName(name);
	}

	@GetMapping("/sorted-by-experience")
	public ResponseEntity<?> getTrainersSortedByExperience() {
		return trainerService.getTrainersSortedByExperience();
	}

}
