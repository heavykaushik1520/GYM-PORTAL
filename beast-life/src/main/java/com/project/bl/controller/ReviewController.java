package com.project.bl.controller;

import com.project.bl.model.Review;
import com.project.bl.services.ReviewService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin("*")
public class ReviewController {

	@Autowired
	private ReviewService reviewService;

	@PostMapping
	public ResponseEntity<?> addOrUpdateReview(@RequestBody Review review) {
	    return reviewService.addOrUpdateReview(review);
	}

	@GetMapping
	public ResponseEntity<?> getAllReviews() {
		return reviewService.getAllReviews();
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getReviewById(@PathVariable Integer id) {
		return reviewService.getReviewById(id);
	}
	
	@GetMapping("/paginated")
	public ResponseEntity<?> getPaginatedReviews(
	        @RequestParam(defaultValue = "0") int page,
	        @RequestParam(defaultValue = "4") int size) {
	    return reviewService.getPaginatedReviews(page, size);
	}


	@PutMapping("/{id}")
	public ResponseEntity<?> updateReviewById(@PathVariable Integer id, @RequestBody @Valid Review review) {
		return reviewService.updateReviewById(id, review);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteReviewById(@PathVariable Integer id) {
		return reviewService.deleteReviewById(id);
	}
}
