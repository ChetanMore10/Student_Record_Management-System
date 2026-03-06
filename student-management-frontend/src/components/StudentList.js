import React, { useEffect, useState } from "react";
import StudentService from "../services/StudentService";
import { useNavigate } from "react-router-dom";

function StudentList() {

    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        StudentService.getAllStudents()
            .then(res => setStudents(res.data))
            .catch(err => console.log(err));
    }, []);

    const deleteStudent = (id) => {
        StudentService.deleteStudent(id)
            .then(() => {
                setStudents(students.filter(s => s.id !== id));
            });
    };

    return (
        <div className="container mt-4">

            <h3>Student Records</h3>

            <button className="btn btn-primary mb-3"
                onClick={() => navigate("/add")}>
                Add Student
            </button>

            <table className="table table-bordered table-sm">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Mobile</th>
                        <th>Admission Date</th>
                        <th>Course</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        students.map(s => (
                            <tr key={s.id}>
                                <td>{s.name}</td>
                                <td>{s.email}</td>
                                <td>{s.age}</td>
                                <td>{s.gender}</td>
                                <td>{s.address}</td>
                                <td>{s.mobileNumber}</td>
                                <td>{s.admissionDate}</td>
                                <td>{s.course?.courseName}</td>

                                <td>
                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => navigate(`/update/${s.id}`)}>
                                        Edit
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteStudent(s.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>

        </div>
    );
}

export default StudentList;
