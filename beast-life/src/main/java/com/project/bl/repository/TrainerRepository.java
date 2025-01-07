package com.project.bl.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.bl.model.Trainer;

@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Integer> {

}
