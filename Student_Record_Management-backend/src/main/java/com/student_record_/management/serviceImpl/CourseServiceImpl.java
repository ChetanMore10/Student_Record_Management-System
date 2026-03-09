package com.student_record_.management.serviceImpl;

import com.student_record_.management.entity.Course;
import com.student_record_.management.repository.CourseRepo;
import com.student_record_.management.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    private CourseRepo courseRepo;

    @Override
    public Course addCourse(Course course) {
        System.out.println("Course Added Successfully..!");
        return courseRepo.save(course);
    }

    @Override
    public List<Course> viewAllCourse() {
        return courseRepo.findAll();
    }
}
