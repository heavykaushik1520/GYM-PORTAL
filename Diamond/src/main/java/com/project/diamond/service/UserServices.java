package com.project.diamond.service;

import org.springframework.stereotype.Service;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.server.ResponseStatusException;

import com.project.diamond.entity.User;
import com.project.diamond.entity.repository.UserRepository;
import com.project.diamond.responsewrapper.ResponseWrapper;

@Service
public class UserServices {

	private ResponseWrapper responseWrapper;

	private UserRepository userRepository;

	public ResponseEntity<?> createUser(User user) {

		User createdUser = userRepository.save(user);
		responseWrapper.setMessage("User Created Successfully");
		responseWrapper.setData(createdUser);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}

	public ResponseEntity<?> getUserById(int id) {
		User getUser = userRepository.findById(id).orElseThrow(() -> {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No jwellery found with id " + id);
		});
		responseWrapper.setMessage("User Found");
		responseWrapper.setData(getUser);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}

	public ResponseEntity<?> getAll() {
		List<User> allUser = userRepository.findAll();
		responseWrapper.setMessage("Following are the jwelleries : ");
		responseWrapper.setData(allUser);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}

	public ResponseEntity<?> updateUserById(int id, User updatedUser) {
		User userFound = userRepository.findById(id).orElseThrow(() -> {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No jwellery found with id " + id);
		});

		userFound.setId(updatedUser.getId());
		userFound.setName(updatedUser.getName());
		userFound.setPhone(updatedUser.getPhone());
		

		User user = userRepository.save(userFound);

		responseWrapper.setMessage("User Updated Successfully");
		responseWrapper.setData(user);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);

	}

	public ResponseEntity<?> deleteUserById(int id) {
		User userFound = userRepository.findById(id).orElseThrow(() -> {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No jwellery found with id " + id);
		});

		userRepository.delete(userFound);
		responseWrapper.setMessage("User Deleted Succeccfully ");
		responseWrapper.setData(null);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}

}
