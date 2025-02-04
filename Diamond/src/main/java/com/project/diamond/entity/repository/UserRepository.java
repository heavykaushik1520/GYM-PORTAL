package com.project.diamond.entity.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.diamond.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}
