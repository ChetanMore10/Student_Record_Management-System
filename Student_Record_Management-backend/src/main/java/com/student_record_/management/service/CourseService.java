package com.student_record_.management.service;

import com.student_record_.management.entity.Course;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CourseService {
    Course addCourse(Course course);
    List<Course> viewAllCourse();
}
