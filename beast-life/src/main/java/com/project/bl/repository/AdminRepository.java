package com.project.bl.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.bl.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer>{}
