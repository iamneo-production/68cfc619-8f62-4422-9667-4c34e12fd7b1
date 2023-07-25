package com.example.demo.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Feedback;
import com.example.demo.repository.FeedbackRepo;
@Service
public class FeedbackService {
    @Autowired
    private FeedbackRepo studentRepository;
    public List<Feedback> getAllStudents() {
        return studentRepository.findAll();
    }
    public Feedback getStudentById(Integer id) {
        return studentRepository.findById(id).get();
    }
    public boolean createStudent(Feedback student) {
        return studentRepository.save(student) != null? true:false;
    }
    public Feedback updateStudent(Integer id, Feedback student) {
        Feedback stu = studentRepository.findById(id).get();
        stu.setFirstname(student.getFirstname());
        stu.setLastname(student.getLastname());
        stu.setEmail(student.getEmail());
        stu.setPhone(student.getPhone());
        stu.setQuery(student.getQuery());
      return studentRepository.save(stu);
    }
    public boolean deleteStudent(Integer id) {
        if(studentRepository.findById(id).isPresent()){
            studentRepository.deleteById(id);
          return true;
        } 
        return false;
    }
}
