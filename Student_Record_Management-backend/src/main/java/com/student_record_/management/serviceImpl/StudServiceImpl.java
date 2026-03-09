package com.student_record_.management.serviceImpl;

import com.student_record_.management.entity.Course;
import com.student_record_.management.entity.Student;
import com.student_record_.management.repository.CourseRepo;
import com.student_record_.management.repository.StudentRepo;
import com.student_record_.management.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudServiceImpl implements StudentService {

    @Autowired
    private StudentRepo studentRepo;

    @Autowired
    private CourseRepo courseRepo;

    @Override
    public Student addNewStudent(Student student) {

        Integer courseId = student.getCourse().getId();
        Course course = courseRepo.findById(courseId)
                .orElseThrow(()-> new RuntimeException("Course not found with id: " + courseId));
        student.setCourse(course);
        System.out.println("Student Details Save Successfully...!");
        return studentRepo.save(student);
    }

    @Override
    public List<Student> viewAllStud() {
        return studentRepo.findAll();
    }

    @Override
    public Student viewStudentById(Integer id) {
        return studentRepo.findById(id)
                .orElseThrow(()-> new RuntimeException("Student Not Found with ID: \" + id"));
    }

    @Override
    public Student updateStudent(Integer id, Student student) {
        Student students = studentRepo.findById(id)
                .orElseThrow(()-> new RuntimeException("Student Not found with ID..."+id));
        students.setName(student.getName());
        students.setEmail(student.getEmail());
        students.setAge(student.getAge());
        students.setGender(student.getGender());
        students.setAddress(student.getAddress());
        students.setMobileNumber(student.getMobileNumber());
        students.setAdmissionDate(student.getAdmissionDate());

        return studentRepo.save(students);
    }

    @Override
    public String deleteStud(Integer id) {
        Student student = studentRepo.findById(id)
                .orElseThrow(()-> new RuntimeException("Student not found with: "+ id));
        studentRepo.deleteById(id);
        return "Student Recorde Delete Successfully..";
    }
}
