package com.student.ss.service.impl;



import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.student.ss.dto.request.CourseRequest;
import com.student.ss.dto.response.BasicResponse;
import com.student.ss.dto.response.CourseResponse;
import com.student.ss.model.Course;
import com.student.ss.repository.CourseRepository;
import com.student.ss.service.CourseService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService{

    private final CourseRepository courseRepository;

    @Override
    public BasicResponse<CourseResponse> getAllCourse() {
        List<Course> courses = courseRepository.findAll();
        List<CourseResponse>  courseResponses= courses.stream().map(course-> CourseResponse.builder()
                    // .courseId(course.getCourseId())
                    // .courseName(course.getCourseName())
                    // .description(course.getDescription())
                    .id(course.getId())
                    .course(course.getCourse())
                    .credit(course.getCredit())
                    .cost(course.getCost())
                    .duration(course.getDuration())
                    .build())
                            .collect(Collectors.toList());

        return BasicResponse.<CourseResponse>builder()
                .message("Course Data fetched").data(courseResponses).build();
    }
    @Override
    public BasicResponse<CourseResponse> updateCourse(String courseId, CourseRequest courseRequest) {
        BasicResponse<CourseResponse> response = new BasicResponse<>();
        try {
            Optional<Course> optionalCourse = courseRepository.findById(courseId);
            if (optionalCourse.isPresent()) {
                Course existingCourse = optionalCourse.get();
                // existingCourse.setCourseName(courseRequest.getCourseName());
                // existingCourse.setDescription(courseRequest.getDescription());
                existingCourse.setCost(courseRequest.getCost());
                existingCourse.setDuration(courseRequest.getDuration());
                courseRepository.save(existingCourse);
                response.setMessage("Course updated successfully");
            } else {
                response.setMessage("Course not found with ID: " + courseId);
            }
        } catch (Exception e) {
            response.setMessage("Failed to update course: " + e.getMessage());
        }
        return response;
    }

    @Override
    public CourseResponse register(CourseRequest request) {
       Course course = Course.builder().course(request.getCourse()).cost(request.getCost()).courseImage(request.getCourseImage()).duration(request.getDuration()).credit(request.getCredit()).build();
        courseRepository.save(course);
        return CourseResponse.builder()
                .build();
    }

    @Override
    public BasicResponse<CourseResponse> deletecourse(String courseId) {
        // TODO Auto-generated method stub
        if (courseRepository.existsById(courseId)) {
            courseRepository.deleteById(courseId);
            return BasicResponse.<CourseResponse>builder()
                    .message("Course deleted successfully")
                    .build();
        } else {
            return BasicResponse.<CourseResponse>builder()
                    .message("Course not found with ID: " + courseId)
                    .build();
        }
    }

}
