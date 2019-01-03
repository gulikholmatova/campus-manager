import axios from 'axios';

// action types:
export const GET_STUDENTS = 'GET_STUDENTS';
export const CREATE_STUDENT = 'CREATE_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';

// action creators:
export function getStudents(students) {
    return {
        type: GET_STUDENTS,
        students
    }
}

export function createStudent(student) {
    return {
        type: CREATE_STUDENT,
        student
    }
}

export function deletedStudent(student) {
    return {
        type: DELETE_STUDENT,
        student
    }
}

// thunks
export function fetchStudents() {
    return async function (dispatch) {
        const responseFromServer = await axios.get('/api/students');
        const students = responseFromServer.data;
        const action = getStudents(students);
        dispatch(action);
    }
}

export const sendStudent = student => async (dispatch) => {
    const responseFromServer = await axios.post('/api/students', student);
    const newStudent = responseFromServer.data;
    dispatch(createStudent(newStudent))
}

export const deleteStudentFromServer = id => async (dispatch) => {
    const student = await axios.delete(`/api/students/${id}`);
    const action = deletedStudent(student);
    dispatch(action);
}

const initialState = {
    students: []
}

export default function students(state = initialState, action) {
    const newState = { ...state }

    switch (action.type) {

        case GET_STUDENTS:
            newState.students = action.students;
            return newState

        case CREATE_STUDENT:
            newState.students = [...newState.students, action.student]
            return newState

        case DELETE_STUDENT:
            newState.students = [...newState.students].filter(student => student.id !== action.student.data.id)
            return newState

        default:
            return state;
    }
}




