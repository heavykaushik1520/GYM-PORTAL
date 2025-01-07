package com.project.bl.services;

import com.project.bl.model.Member;
import com.project.bl.model.Review;
import com.project.bl.repository.MemberRepository;
import com.project.bl.repository.ReviewRepository;
import com.project.bl.responsewrapper.ResponseWrapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository reviewRepository;

	@Autowired
	private ResponseWrapper responseWrapper;

	@Autowired
	private MemberRepository memberRepository;



	public ResponseEntity<?> getPaginatedReviews(int page, int size) {
	    Pageable pageable = PageRequest.of(page, size);
	    Page<Review> paginatedReviews = reviewRepository.findAll(pageable);

	    if (paginatedReviews.isEmpty()) {
	        responseWrapper.setMessage("No reviews found");
	        responseWrapper.setData(null);
	        return new ResponseEntity<>(responseWrapper, HttpStatus.NOT_FOUND);
	    }

	    responseWrapper.setMessage("Paginated reviews fetched successfully.");
	    responseWrapper.setData(paginatedReviews);
	    return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}
	public ResponseEntity<?> addOrUpdateReview(Review review) {
		if (review.getMember() == null || review.getMember().getId() == null) {
			responseWrapper.setMessage("Review must be associated with a valid Member.");
			responseWrapper.setData(null);
			return new ResponseEntity<>(responseWrapper, HttpStatus.BAD_REQUEST);
		}

		// Fetch the member to ensure it exists
		Member member = memberRepository.findById(review.getMember().getId())
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Member not found"));

		// Associate the member with the review
		review.setMember(member);

		Review savedReview = reviewRepository.save(review);

		responseWrapper.setMessage("Review added/updated successfully.");
		responseWrapper.setData(savedReview);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}
	
//	public ResponseEntity<?> createReview(Review review) {
//	    // Ensure the member exists in the database
//	    Integer memberId = review.getMember().getId();
//	    Member member = memberRepository.findById(memberId).orElseThrow(() -> {
//	        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No member found with id " + memberId);
//	    });
//
//	    // Associate the managed Member entity with the Review
//	    review.setMember(member);
//
//	    // Save the Review
//	    Review savedReview = reviewRepository.save(review);
//
//	    // Prepare response
//	    responseWrapper.setMessage("Review Created Successfully");
//	    responseWrapper.setData(savedReview);
//		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
//	}


	// Get all reviews
	public ResponseEntity<?> getAllReviews() {
		List<Review> allReviews = reviewRepository.findAll();
		if (allReviews.isEmpty()) {
			responseWrapper.setMessage("No reviews found");
			responseWrapper.setData(null);
			return new ResponseEntity<>(responseWrapper, HttpStatus.NOT_FOUND);
		}
		responseWrapper.setMessage("Following are the reviews:");
		responseWrapper.setData(allReviews);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}

	// Get a review by ID
	public ResponseEntity<?> getReviewById(Integer id) {
		Review review = reviewRepository.findById(id).orElseThrow(() -> {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No review found with id " + id);
		});
		responseWrapper.setMessage("Review Found");
		responseWrapper.setData(review);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}

	// Update a review by ID
	public ResponseEntity<?> updateReviewById(Integer id, Review updatedReview) {
		Review review = reviewRepository.findById(id).orElseThrow(() -> {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No review found with id " + id);
		});

		review.setDescription(updatedReview.getDescription());

		Review savedReview = reviewRepository.save(review);
		responseWrapper.setMessage("Review Updated Successfully");
		responseWrapper.setData(savedReview);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}

	// Delete a review by ID
	public ResponseEntity<?> deleteReviewById(Integer id) {
		Review review = reviewRepository.findById(id).orElseThrow(() -> {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No review found with id " + id);
		});

		reviewRepository.delete(review);
		responseWrapper.setMessage("Review Deleted Successfully");
		responseWrapper.setData(null);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}
}
