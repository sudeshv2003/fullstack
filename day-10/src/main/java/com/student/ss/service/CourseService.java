package com.student.ss.service;

import com.student.ss.dto.request.CourseRequest;
import com.student.ss.dto.response.BasicResponse;
import com.student.ss.dto.response.CourseResponse;

public interface CourseService {

    BasicResponse<CourseResponse> getAllCourse();

    CourseResponse register(CourseRequest request);

    BasicResponse<CourseResponse> updateCourse(String courseId, CourseRequest courseRequest);

    BasicResponse<CourseResponse> deletecourse(String courseId);
    
}
