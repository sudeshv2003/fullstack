package com.student.bala.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseRequest {
     private String id;

    
    private String course;

   
    private String credit;

   
    private String courseImage;

    private String cost;

   
    private String duration; 

}
