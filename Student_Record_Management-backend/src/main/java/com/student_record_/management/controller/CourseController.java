package com.student_record_.management.controller;

import com.student_record_.management.entity.Course;
import com.student_record_.management.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
public class CourseController {

    @Autowired
    private CourseService courseService;

    // GET ALL COURSES
    @GetMapping
    public List<Course> getAllCourses() {
        return courseService.viewAllCourse();
    }

    // ADD COURSE
    @PostMapping
    public Course addCourse(@RequestBody Course course) {
        return courseService.addCourse(course);
    }
}
