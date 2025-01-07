package com.project.bl.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.bl.model.Member;
import com.project.bl.model.Trainer;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer>{
	
	
	 
	
	List<Member> findAllByTrainer(Trainer trainer);
	
	Optional<Member> findByEmailAndPassword(String email, String password);
	
	



}
