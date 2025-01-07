package com.project.bl.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.project.bl.model.Admin;
import com.project.bl.repository.AdminRepository;
import com.project.bl.responsewrapper.ResponseWrapper;

@Service
public class AdminService {
	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private ResponseWrapper responseWrapper;
	
	public ResponseEntity<?> createAdmin(Admin admin) {
        // Save admin details in the database
        Admin savedAdmin = adminRepository.save(admin);
        responseWrapper.setMessage("Admin created successfully.");
        responseWrapper.setData(savedAdmin);
        return new ResponseEntity<>(responseWrapper, HttpStatus.CREATED);
    }

    // Get Admin by ID
    public ResponseEntity<?> getAdminById(Integer id) {
        // Fetch admin from the database
        Admin admin = adminRepository.findById(id).orElseThrow(() -> {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No admin found with ID: " + id);
        });

        responseWrapper.setMessage("Admin found.");
        responseWrapper.setData(admin);
        return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
    }
}


