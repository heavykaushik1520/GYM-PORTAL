package com.project.diamond.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.project.diamond.entity.Jwellery;
import com.project.diamond.entity.repository.JwelleryRepository;
import com.project.diamond.responsewrapper.ResponseWrapper;

@Service
public class JwelleryService {

	@Autowired
	private ResponseWrapper responseWrapper;
	
	@Autowired
	private JwelleryRepository jwelleryRepository;
	
	public ResponseEntity<?> createJwellery(Jwellery jwellery) {
		
		Jwellery createdJwellery = jwelleryRepository.save(jwellery);
		responseWrapper.setMessage("Jwellery Created Successfully");
		responseWrapper.setData(createdJwellery);
		return new ResponseEntity<>(responseWrapper , HttpStatus.OK);
	}
	
	public ResponseEntity<?> getJwelleryById(int id){
		Jwellery getJwellery = jwelleryRepository.findById(id).orElseThrow(()->{
			throw new ResponseStatusException(HttpStatus.NOT_FOUND , "No jwellery found with id " + id);
		});
		responseWrapper.setMessage("Member Found");
		responseWrapper.setData(getJwellery);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}
	
	public ResponseEntity<?> getAll(){
		List<Jwellery> allJwellery = jwelleryRepository.findAll();
		responseWrapper.setMessage("Following are the jwelleries : ");
		responseWrapper.setData(allJwellery);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}
	
	public ResponseEntity<?> updateJwelleryById(int id , Jwellery updatedJwellery){
		Jwellery jwelleryFound = jwelleryRepository.findById(id).orElseThrow(()->{
			throw new ResponseStatusException(HttpStatus.NOT_FOUND , "No jwellery found with id " + id);
		});
		
		jwelleryFound.setId(updatedJwellery.getId());
		jwelleryFound.setName(updatedJwellery.getName());
		jwelleryFound.setType(updatedJwellery.getType());
		jwelleryFound.setPrice(updatedJwellery.getPrice());
		
		Jwellery jwellery = jwelleryRepository.save(jwelleryFound);
		
		responseWrapper.setMessage("Jwellery Updated Successfully");
		responseWrapper.setData(jwellery);
		return new ResponseEntity<> (responseWrapper , HttpStatus.OK);
			
	}
	
	public ResponseEntity<?> deleteJwelleryById(int id){
		Jwellery jwelleryFound = jwelleryRepository.findById(id).orElseThrow(()->{
			throw new ResponseStatusException(HttpStatus.NOT_FOUND , "No jwellery found with id " + id);
		});
		
		jwelleryRepository.delete(jwelleryFound);
		responseWrapper.setMessage("Jwellery Deleted Succeccfully ");
		responseWrapper.setData(null);
		return new ResponseEntity<> (responseWrapper , HttpStatus.OK);
	}
	
	
}
