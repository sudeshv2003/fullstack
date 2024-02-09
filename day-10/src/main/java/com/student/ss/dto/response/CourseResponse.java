package com.student.ss.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseResponse {
 private String id;

    
    private String course;

   
    private String credit;

   
    private String courseImage;

    private String cost;

   
    private String duration;


    

}