import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Studentfilter.css'

function StudentFilter() {
    const ratings = useSelector(state => state.students.evaluations);

    const studentNames = ratings.map((student) => {
        return student.name
    });

    const filteredStudents = [...new Set(studentNames)].map((name, index) => {
        return {
            name: name,
            id: index + 1
        }
    });


    return (
        <div className="filterstudents">
            <h2>Student Dashboard</h2>
            <p>Click on a student to see their ratings</p>
            <nav>
                {filteredStudents.map((student) => {
                    return (
                        <Link to={`/student/${student.name}`} key={student.id}>
                            <span>{student.name}</span>
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}

export default StudentFilter;