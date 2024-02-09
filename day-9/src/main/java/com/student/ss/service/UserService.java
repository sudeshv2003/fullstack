package com.student.ss.service;

import com.student.ss.dto.response.BasicResponse;
import com.student.ss.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}