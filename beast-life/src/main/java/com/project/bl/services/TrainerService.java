package com.project.bl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import com.project.bl.model.Member;
import com.project.bl.model.Trainer;
import com.project.bl.repository.MemberRepository;
import com.project.bl.repository.TrainerRepository;
import com.project.bl.responsewrapper.ResponseWrapper;

@Service
public class TrainerService {

	@Autowired
	private TrainerRepository trainerRepository;

	@Autowired
	private ResponseWrapper responseWrapper;

	@Autowired
	private MemberRepository memberRepository;

	public ResponseEntity<?> createTrainer(Trainer trainer) {
		Trainer savedTrainer = trainerRepository.save(trainer);
		responseWrapper.setMessage("Trainer Created Successfully");
		responseWrapper.setData(savedTrainer);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}

	// Get All Trainers
	public ResponseEntity<?> getAllTrainers() {
		List<Trainer> allTrainers = trainerRepository.findAll();
		responseWrapper.setMessage("Following are the trainers:");
		responseWrapper.setData(allTrainers);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}

	public ResponseEntity<?> getTrainerById(Integer id) {
		Trainer trainerFound = trainerRepository.findById(id).orElseThrow(() -> {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No trainer found with id " + id);
		});
		responseWrapper.setMessage("Trainer Found");
		responseWrapper.setData(trainerFound);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}

	public ResponseEntity<?> updateTrainerById(Integer id, Trainer updatedTrainer) {
		Trainer trainerFound = trainerRepository.findById(id).orElseThrow(() -> {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No trainer found with id " + id);
		});

		trainerFound.setName(updatedTrainer.getName());
		trainerFound.setPhoneNumber(updatedTrainer.getPhoneNumber());
		trainerFound.setExperience(updatedTrainer.getExperience());

		Trainer trainer = trainerRepository.save(trainerFound);
		responseWrapper.setMessage("Trainer Updated Successfully");
		responseWrapper.setData(trainer);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}

//	public ResponseEntity<?> deleteTrainerById(Integer id) {
//		Trainer trainerFound = trainerRepository.findById(id).orElseThrow(() -> {
//			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No trainer found with id " + id);
//		});
//
//		trainerRepository.delete(trainerFound);
//		responseWrapper.setMessage("Trainer Deleted Successfully");
//		responseWrapper.setData(null);
//		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
//	}

	@Transactional
	public ResponseEntity<?> deleteTrainerById(Integer id) {
	    // Find the trainer to delete
	    Trainer trainerToDelete = trainerRepository.findById(id)
	            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "No trainer found with id " + id));

	    // Find all members assigned to this trainer
	    List<Member> membersToUpdate = memberRepository.findAllByTrainer(trainerToDelete);

	    // Set the trainer to null for all members
	    for (Member member : membersToUpdate) {
//	        member.setTrainer(null);
	    }
	    memberRepository.saveAll(membersToUpdate); // Save the updated members

	    // Delete the trainer
	    trainerRepository.delete(trainerToDelete);

	    // Return success response
	    responseWrapper.setMessage("Trainer deleted successfully, and members' trainer set to null.");
	    responseWrapper.setData(null);
	    return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}

	
	public ResponseEntity<?> getTrainersByName(String name) {

		List<Trainer> members = trainerRepository.findAll();

		List<Trainer> filteredTrainers = members.stream()
				.filter(member -> member.getName().toLowerCase().contains(name.toLowerCase())).toList();

		if (filteredTrainers.isEmpty()) {
			responseWrapper.setMessage("No members found with the name: " + name);
			responseWrapper.setData(null);
			return new ResponseEntity<>(responseWrapper, HttpStatus.NOT_FOUND);
		}

		responseWrapper.setMessage("Following are the members with the name: " + name);
		responseWrapper.setData(filteredTrainers);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}
	
	public ResponseEntity<?> getTrainersSortedByExperience() {
	    List<Trainer> trainers = trainerRepository.findAll();

	    List<Trainer> sortedTrainers = trainers.stream()
	            .sorted((t1, t2) -> t2.getExperience().compareTo(t1.getExperience()))
	            .toList();

	    if (sortedTrainers.isEmpty()) {
	        responseWrapper.setMessage("No trainers found.");
	        responseWrapper.setData(null);
	        return new ResponseEntity<>(responseWrapper, HttpStatus.NOT_FOUND);
	    }

	    responseWrapper.setMessage("Trainers sorted by experience.");
	    responseWrapper.setData(sortedTrainers);
	    return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}


}
