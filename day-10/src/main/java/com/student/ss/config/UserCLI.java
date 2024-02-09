package com.student.ss.config;

import static com.student.ss.enumerated.Role.ADMIN;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.student.ss.model.User;
import com.student.ss.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserCLI implements CommandLineRunner{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count() > 0)
            return;
        var user = User.builder()
            .name("Admin")
            .email("admin@gmail")
            .password(passwordEncoder.encode("123"))
            .role(ADMIN)
            .build();
        userRepository.save(user);
    }

}
