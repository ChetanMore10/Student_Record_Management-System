package com.student_record_.management.service;

import com.student_record_.management.entity.Student;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface StudentService {

    Student addNewStudent(Student student);
    List<Student> viewAllStud();
    Student viewStudentById(Integer id);
    Student updateStudent(Integer id, Student student);
    String deleteStud(Integer id);
}
