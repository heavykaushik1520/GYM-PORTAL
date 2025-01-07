package com.project.bl.controller;

import com.project.bl.model.Admin;
import com.project.bl.services.AdminService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admins")
@CrossOrigin("*")
public class AdminController {
	
	@Autowired
    private AdminService adminService;

    // Create Admin
    @PostMapping
    public ResponseEntity<?> createAdmin(@RequestBody @Valid Admin admin) {
        return adminService.createAdmin(admin);
    }

    // Get Admin by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getAdminById(@PathVariable Integer id) {
        return adminService.getAdminById(id);
    }

}
