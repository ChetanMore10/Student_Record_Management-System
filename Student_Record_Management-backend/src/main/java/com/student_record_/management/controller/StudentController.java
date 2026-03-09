package com.student_record_.management.controller;

import com.student_record_.management.entity.Student;
import com.student_record_.management.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @Autowired
    private StudentService studentService;

    // GET ALL STUDENTS
    @GetMapping
    public ResponseEntity<List<Student>> getAllStudents() {
        return ResponseEntity.ok(studentService.viewAllStud());
    }

    // ADD STUDENT
    @PostMapping
    public ResponseEntity<Student> addStudent(@RequestBody Student student) {
        return new ResponseEntity<>(
                studentService.addNewStudent(student),
                HttpStatus.CREATED
        );
    }

    // GET STUDENT BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Integer id) {
        return ResponseEntity.ok(studentService.viewStudentById(id));
    }

    // UPDATE STUDENT
    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(
            @PathVariable Integer id,
            @RequestBody Student student) {
        return ResponseEntity.ok(
                studentService.updateStudent(id, student)
        );
    }

    // DELETE STUDENT
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable Integer id) {
        return ResponseEntity.ok(studentService.deleteStud(id));
    }
}
