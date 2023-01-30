import { evaluationData } from '../Data/StudentData';
import { studentData } from '../Data/IndividualData';

const initialState = {
    evaluations: evaluationData,
    studentData: studentData
};

const studentDataReducer = (state = initialState, action) => {
    return state
};

export default studentDataReducer;