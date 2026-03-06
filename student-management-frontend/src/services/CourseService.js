import axios from "axios";

const COURSE_URL = "http://localhost:8082/courses";

class CourseService {

    getAllCourses() {
        return axios.get(COURSE_URL);
    }
}

const courseService = new CourseService();
export default courseService;
    