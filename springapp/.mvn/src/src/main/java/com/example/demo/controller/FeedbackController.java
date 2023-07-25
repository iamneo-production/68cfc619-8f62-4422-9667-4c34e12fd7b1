package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Feedback;
import com.example.demo.service.FeedbackService;
@CrossOrigin
@RequestMapping("/api/v1/feed")
@RestController
public class FeedbackController {
    @Autowired
    private FeedbackService apiService;

    @GetMapping("/showdetails")
    public List<Feedback> getAllStudents() {
        return apiService.getAllStudents();
    }

    @PostMapping("/adddetails")
    public boolean createStudent(@RequestBody Feedback student) {
        return apiService.createStudent(student);
    }

    @PutMapping("/editdetails/{id}") // Added @PathVariable annotation
    public Feedback updateStudent(@RequestBody Feedback student, @PathVariable Integer id) {
        return apiService.updateStudent(id, student);
    }

    @DeleteMapping("/removedetails/{id}")
    public boolean deleteStudent(@PathVariable Integer id) {
        return apiService.deleteStudent(id);
    }
}
