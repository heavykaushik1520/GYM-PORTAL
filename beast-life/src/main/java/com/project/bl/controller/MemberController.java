package com.project.bl.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.project.bl.model.Member;
import com.project.bl.services.MemberService;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;

@RestController
@RequestMapping("/api/members")
@Validated
@CrossOrigin("*")
public class MemberController {

	@Autowired
	private MemberService memberService;
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");

        Member member = memberService.authenticateByEmailAndPassword(email, password);
        return ResponseEntity.ok(member);
    }

	@PostMapping
	public ResponseEntity<?> createMember(@RequestBody @Valid Member member) {
		return memberService.createMember(member);
	}

	@GetMapping
	public ResponseEntity<?> getAllMembers() {
		return memberService.getAllMembers();
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getMemberById(@PathVariable @Min(1) Integer id) {
		return memberService.getMemberById(id);
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> updateMemberById(@PathVariable @Min(1) Integer id,
			@RequestBody @Valid Member updatedMember) {
		return memberService.updateMemberById(id, updatedMember);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteMemberById(@PathVariable @Min(1) Integer id) {
		return memberService.deleteMemberById(id);
	}
	
	@GetMapping("/name")
	public ResponseEntity<?> getMembersByName(@RequestParam String name) {
	    return memberService.getMembersByName(name);
	}
	
	@GetMapping("/email")
    public ResponseEntity<?> getMembersByEmail(@RequestParam String email) {
        return memberService.getMembersByEmail(email);
    }

}
