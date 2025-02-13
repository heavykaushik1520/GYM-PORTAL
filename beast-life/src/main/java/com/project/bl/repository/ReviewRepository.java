package com.project.bl.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.project.bl.model.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer>{
//	Page<Review> findAll(Pageable pageable);

}
