package com.project.diamond.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.diamond.entity.User;
import com.project.diamond.service.UserServices;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserServices userServices;
	
	@PostMapping
	public ResponseEntity<?> createUser(@RequestBody User user){
		return userServices.createUser(user);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getUserById(@PathVariable int id){
		return userServices.getUserById(id);
	}
	
	@GetMapping
	public ResponseEntity<?> getAll(){
		return userServices.getAll();
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateUserById(@PathVariable int id,  @RequestBody User updatedUser){
		return userServices.updateUserById(id, updatedUser);
	}
	
	public ResponseEntity<?> deleteUserById(@PathVariable int id){
		return userServices.deleteUserById(id);
	}
	
	
}
