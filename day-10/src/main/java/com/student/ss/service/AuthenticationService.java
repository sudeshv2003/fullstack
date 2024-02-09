package com.student.ss.service;

import com.student.ss.dto.request.Loginrequest;
import com.student.ss.dto.request.RegisterRequest;
import com.student.ss.dto.response.LoginResponse;
import com.student.ss.dto.response.RegisterResponse;

public interface AuthenticationService {

    RegisterResponse register(RegisterRequest request);

    LoginResponse login(Loginrequest request);

}
