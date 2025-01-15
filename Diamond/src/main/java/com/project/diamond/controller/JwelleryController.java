package com.project.diamond.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.diamond.entity.Jwellery;
import com.project.diamond.service.JwelleryService;

@RestController
@RequestMapping("/jwellery")
public class JwelleryController {
	
	@Autowired
	private JwelleryService jwelleryService;
	
	@PostMapping
	public ResponseEntity<?> createJwellery(@RequestBody Jwellery jwellery){
		return jwelleryService.createJwellery(jwellery);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getJwelleryById(@PathVariable int id){
		return jwelleryService.getJwelleryById(id);
	}
	
	@GetMapping
	public ResponseEntity<?> getAll(){
		return jwelleryService.getAll();
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> updateJwelleryById(@PathVariable int id , @RequestBody Jwellery updatedJwellery){
		return jwelleryService.updateJwelleryById(id, updatedJwellery);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteJwelleryById(@PathVariable int id){
		return jwelleryService.deleteJwelleryById(id);
	}
}
