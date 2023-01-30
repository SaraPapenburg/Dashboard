import { useSelector } from 'react-redux';
import './GraphContainer.css';
import LineGraph from './LineGraph';
import BarGraph from './BarGraph';
import Studentfilter from './Studentfilter';

function GraphContainer() {
    const evaluations = useSelector(state => state.students.evaluations);

    //Total ratings. 
    const assignmentArray = Object.values(evaluations.reduce((totalEval, { assignment, difficulty, enjoyment }) => {
        totalEval[assignment] = totalEval[assignment] || { assignment, difficulty: 0, enjoyment: 0, ratings: 0 };
        totalEval[assignment].difficulty += difficulty;
        totalEval[assignment].enjoyment += enjoyment;
        totalEval[assignment].ratings++
        return totalEval;
    }, []));

    //Average ratings.
    const averageRatingArray = assignmentArray.map(({ assignment, difficulty, enjoyment, ratings }) => {
        return {
            assignment,
            difficulty: difficulty / ratings,
            enjoyment: enjoyment / ratings,
            ratings
        }
    });

    //Graph Data.
    const labelArray = averageRatingArray.map((assignment) => {
        return assignment.assignment
    });

    const difficultyArray = averageRatingArray.map((assignment) => {
        return assignment.difficulty
    });

    const enjoymentArray = averageRatingArray.map((assignment) => {
        return assignment.enjoyment
    });


    return (
        <div className="graphContainer">
            <Studentfilter />
            <BarGraph labels={labelArray} difficultyData={difficultyArray} enjoymentData={enjoymentArray} title={"Average Ratings"} />
            <LineGraph labels={labelArray} difficultyData={difficultyArray} enjoymentData={enjoymentArray} />
        </div>
    )
}

export default GraphContainer;