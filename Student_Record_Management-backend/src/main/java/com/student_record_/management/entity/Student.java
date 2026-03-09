package com.student_record_.management.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "Student_Data")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "s_id")
    private Integer id;
    private String name;
    private String email;
    private Integer age;
    private String gender;
    private String address;
    private Long mobileNumber;
    private LocalDate admissionDate;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

}
