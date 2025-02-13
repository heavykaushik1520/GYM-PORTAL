package com.project.bl.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import com.project.bl.model.Member;
import com.project.bl.model.Trainer;
import com.project.bl.repository.MemberRepository;
import com.project.bl.repository.ReviewRepository;
import com.project.bl.repository.TrainerRepository;
import com.project.bl.responsewrapper.ResponseWrapper;

@Service
public class MemberService {

	@Autowired
	private MemberRepository memberRepository;

	@Autowired
	private ResponseWrapper responseWrapper;

	@Autowired
	private TrainerRepository trainerRepository;
	
	@Autowired
	private ReviewRepository reviewRepository;
	
	public Member authenticateByEmailAndPassword(String email, String password) {
        return memberRepository.findByEmailAndPassword(email, password)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid email or password"));
    }

	public ResponseEntity<?> createMember(Member member) {
		if (member.getTrainer() != null && member.getTrainer().getId() != null) {
			Trainer trainer = trainerRepository.findById(member.getTrainer().getId())
					.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
							"Trainer not found with id " + member.getTrainer().getId()));
			member.setTrainer(trainer);
		}

		Member savedMember = memberRepository.save(member);
		responseWrapper.setMessage("Member Created Successfully");
		responseWrapper.setData(savedMember);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}

	public ResponseEntity<?> getAllMembers() {
		List<Member> allMembers = memberRepository.findAll();
		responseWrapper.setMessage("Following are the members : ");
		responseWrapper.setData(allMembers);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}

	public ResponseEntity<?> getMemberById(Integer id) {
		Member memberFound = memberRepository.findById(id).orElseThrow(() -> {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No member found with id " + id);
		});
		responseWrapper.setMessage("Member Found");
		responseWrapper.setData(memberFound);
		return new ResponseEntity<>(memberFound, HttpStatus.OK);
	}

	public ResponseEntity<?> updateMemberById(Integer id, Member updatedMember) {
		Member memberFound = memberRepository.findById(id).orElseThrow(() -> {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No member found with id " + id);
		});

		if (updatedMember.getTrainer() != null && updatedMember.getTrainer().getId() != null) {
			Trainer trainer = trainerRepository.findById(updatedMember.getTrainer().getId())
					.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
							"Trainer not found with id " + updatedMember.getTrainer().getId()));
			memberFound.setTrainer(trainer);
		} else {
			memberFound.setTrainer(null); 
		}

		memberFound.setName(updatedMember.getName());
		memberFound.setEmail(updatedMember.getEmail());
		memberFound.setPassword(updatedMember.getPassword());
		memberFound.setAddress(updatedMember.getAddress());
		memberFound.setAge(updatedMember.getAge());
		memberFound.setWeight(updatedMember.getWeight());

		Member member = memberRepository.save(memberFound);
		responseWrapper.setMessage("Member updated successfully");
		responseWrapper.setData(member);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}

//	public ResponseEntity<?> deleteMemberById(Integer id) {
//		Member memberFound = memberRepository.findById(id).orElseThrow(() -> {
//			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No member found with id " + id);
//		});
//
//		memberRepository.delete(memberFound);
//		responseWrapper.setMessage("Member Deleted Successfully");
//		responseWrapper.setData(null);
//		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
//
//	}
	
	 @Transactional
	    public ResponseEntity<?> deleteMemberById(Integer id) {
	        Member member = memberRepository.findById(id).orElseThrow(() -> {
				throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No member found with id " + id);
	    		});
	        // Handle the Review relationship
	        if (member.getReview() != null) {
	            reviewRepository.delete(member.getReview()); 
	        }

	        // Delete the Member
	        memberRepository.delete(member);

			responseWrapper.setMessage("Member Deleted Successfully");
			responseWrapper.setData(null);
			return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	    }

	public ResponseEntity<?> getMembersByName(String name) {

		List<Member> members = memberRepository.findAll();

		List<Member> filteredMembers = members.stream()
				.filter(member -> member.getName().toLowerCase().contains(name.toLowerCase())).toList();

		if (filteredMembers.isEmpty()) {
			responseWrapper.setMessage("No members found with the name: " + name);
			responseWrapper.setData(null);
			return new ResponseEntity<>(responseWrapper, HttpStatus.NOT_FOUND);
		}

		responseWrapper.setMessage("Following are the members with the name: " + name);
		responseWrapper.setData(filteredMembers);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}
	
	public ResponseEntity<?> getMembersByEmail(String email) {
	    List<Member> members = memberRepository.findAll(); 

	    List<Member> filteredMembers = members.stream()
	            .filter(member -> member.getEmail() != null && member.getEmail().toLowerCase().contains(email.toLowerCase()))
	            .collect(Collectors.toList());

	    if (filteredMembers.isEmpty()) {
	        responseWrapper.setMessage("No members found with the email: " + email);
	        responseWrapper.setData(null);
	        return new ResponseEntity<>(responseWrapper, HttpStatus.NOT_FOUND);
	    }

	    responseWrapper.setMessage("Following are the members with the email: " + email);
	    responseWrapper.setData(filteredMembers);
	    return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}


}
