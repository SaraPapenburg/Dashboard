import { evaluationsData } from '../Data/StudentData';
import { individualData } from '../Data/IndividualData';

const initialState = {
    evaluations: evaluationsData,
    studentData: individualData
};

const studentDataReducer = (state = initialState, action) => {
    return state
};

export default studentDataReducer;