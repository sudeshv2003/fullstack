package com.student.ss.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.student.ss.model.Course;

public interface CourseRepository extends JpaRepository<Course, String> {

    
}
