import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './StudentOverview.css';
import LineGraph from './LineGraph';
import BarGraph from './BarGraph';

function StudentOverview() {
    const { studentName } = useParams();
    const ratings = useSelector(state => state.students.evaluations);
    const studentInfo = useSelector(state => state.students.studentData);

    const filteredStudent = studentInfo.find((student) => {
        return student.first_name === studentName
    });

    //Students Individual Ratings 
    const studentRatings = ratings.filter((student) => {
        return student.name === studentName
    });

    //Graph info.
    const labelArray = studentRatings.map((assignment) => {
        return assignment.assignment
    });

    const difficultyArray = studentRatings.map((assignment) => {
        return assignment.difficulty
    });

    const enjoymentArray = studentRatings.map((assignment) => {
        return assignment.enjoyment
    });



    return (
        <div className="studentoverview">
            <div className="studentinfo">
                <div>
                    <img src={filteredStudent.avatar} alt={filteredStudent.first_name} />
                    <Link to="/">
                        <button>previous</button>
                    </Link>
                </div>
                <ul>
                    <li><span>Name:</span> {filteredStudent.first_name} {filteredStudent.last_name}</li>
                    <li><span>Age:</span> {filteredStudent.age}</li>
                    <li><span>Email:</span> {filteredStudent.email}</li>
                </ul>
            </div>
            <BarGraph labels={labelArray} difficultyData={difficultyArray} enjoymentData={enjoymentArray} title={`Ratings of ${studentName}`} />
            <LineGraph labels={labelArray} difficultyData={difficultyArray} enjoymentData={enjoymentArray} />
        </div>
    )
}

export default StudentOverview;