package com.student.ss.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.student.ss.model.User;

public interface UserRepository extends JpaRepository<User, String> {

    Optional<User> findByEmail(String email);
    
}
