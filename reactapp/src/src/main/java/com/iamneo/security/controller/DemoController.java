package com.iamneo.security.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.User;
import com.iamneo.security.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/demo")
@RequiredArgsConstructor
public class DemoController {

    private final AuthenticationService authenticationService;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(Authentication authentication) {
        List<User> userList = authenticationService.getAllUsers();
        return ResponseEntity.ok(userList);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUserById(@PathVariable Long id) {
        authenticationService.deleteUserById(id);
        return ResponseEntity.ok("User with ID " + id + " deleted successfully.");
    }
}