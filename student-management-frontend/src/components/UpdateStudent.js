import React, { useEffect, useState } from "react";
import StudentService from "../services/StudentService";
import CourseService from "../services/CourseService";
import { useParams, useNavigate } from "react-router-dom";

function UpdateStudent() {

    const { id } = useParams();
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

        StudentService.getStudentById(id)
            .then(res => {
                const s = res.data;

                setStudent({
                    name: s.name,
                    email: s.email,
                    age: s.age,
                    gender: s.gender,
                    address: s.address,
                    mobileNumber: s.mobileNumber,
                    admissionDate: s.admissionDate,
                    courseId: s.course?.id
                });
            });

        CourseService.getAllCourses()
            .then(res => setCourses(res.data));

    }, [id]);

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const updateStudent = (e) => {
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

        StudentService.updateStudent(id, payload)
            .then(() => navigate("/"))
            .catch(err => console.log(err));
    };

    return (
        <div className="container mt-4">

            <h3>Update Student</h3>

            <input name="name" value={student.name} className="form-control mb-2" onChange={handleChange} />
            <input name="email" value={student.email} className="form-control mb-2" onChange={handleChange} />
            <input name="age" value={student.age} className="form-control mb-2" onChange={handleChange} />
            <input name="gender" value={student.gender} className="form-control mb-2" onChange={handleChange} />
            <input name="address" value={student.address} className="form-control mb-2" onChange={handleChange} />
            <input name="mobileNumber" value={student.mobileNumber} className="form-control mb-2" onChange={handleChange} />

            <input
                type="date"
                name="admissionDate"
                value={student.admissionDate}
                className="form-control mb-2"
                onChange={handleChange}
            />

            <select
                name="courseId"
                value={student.courseId}
                className="form-control mb-3"
                onChange={handleChange}
            >
                <option value="">Select Course</option>

                {
                    courses.map(course => (
                        <option key={course.id} value={course.id}>
                            {course.courseName}
                        </option>
                    ))
                }
            </select>

            <button className="btn btn-success" onClick={updateStudent}>
                Update
            </button>

        </div>
    );
}

export default UpdateStudent;
