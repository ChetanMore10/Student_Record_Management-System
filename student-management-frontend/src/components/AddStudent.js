import React, { useEffect, useState } from "react";
import StudentService from "../services/StudentService";
import CourseService from "../services/CourseService";
import { useNavigate } from "react-router-dom";

function AddStudent() {

    const navigate = useNavigate();

    const [student, setStudent] = useState({
        name: "",
        email: "",
        age: "",
        gender: "",
        address: "",
        mobileNumber: "",
        admissionDate: "",
        courseId: ""
    });

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        CourseService.getAllCourses()
            .then(res => setCourses(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const saveStudent = (e) => {
        e.preventDefault();

        const payload = {
            name: student.name,
            email: student.email,
            age: student.age,
            gender: student.gender,
            address: student.address,
            mobileNumber: student.mobileNumber,
            admissionDate: student.admissionDate,
            course: { id: student.courseId }
        };

        StudentService.addStudent(payload)
            .then(() => navigate("/"))
            .catch(err => console.log(err));
    };

    return (
        <div className="container mt-4">

            <h3>Add Student</h3>

            <input name="name" className="form-control mb-2" placeholder="Name" onChange={handleChange} />

            <input name="email" className="form-control mb-2" placeholder="Email" onChange={handleChange} />

            <input name="age" className="form-control mb-2" placeholder="Age" onChange={handleChange} />

            <input name="gender" className="form-control mb-2" placeholder="Gender" onChange={handleChange} />

            <input name="address" className="form-control mb-2" placeholder="Address" onChange={handleChange} />

            <input name="mobileNumber" className="form-control mb-2" placeholder="Mobile" onChange={handleChange} />

            {/* ADMISSION DATE FIELD (MISSING BEFORE) */}

            <input
                type="date"
                name="admissionDate"
                className="form-control mb-2"
                onChange={handleChange}
            />

            <select name="courseId" className="form-control mb-3" onChange={handleChange}>
                <option value="">Select Course</option>
                {
                    courses.map(course => (
                        <option key={course.id} value={course.id}>
                            {course.courseName}
                        </option>
                    ))
                }
            </select>

            <button className="btn btn-success" onClick={saveStudent}>
                Save
            </button>

        </div>
    );
}

export default AddStudent;
