package com.student.ss.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.student.ss.dto.response.BasicResponse;
import com.student.ss.dto.response.UserResponse;
import com.student.ss.model.User;
import com.student.ss.repository.UserRepository;
import com.student.ss.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public BasicResponse<UserResponse> getAllUser() {
        List<User> users = userRepository.findAll();
        List<UserResponse> userResponses = users.stream().map(user -> UserResponse.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole())
                // .address(user.getAddress())
                // .phoneNumber(user.getPhoneNumber())
                .build()).collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder().message("User Data Fetched Sucessfully!").data(userResponses)
                .build();
    }
}