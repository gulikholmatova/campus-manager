import axios from 'axios';

// action types
export const GET_STUDENT = 'GET_STUDENT';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';

// action creators
export function getStudent(student) {
    return {
        type: GET_STUDENT,
        payload: student
    }
}

export function updateStudent(student) {
    return {
        type: UPDATE_STUDENT,
        payload: student
    }
}

// thunks
export function fetchStudent(id) {
    return async function (dispatch) {
        const responseFromServer = await axios.get(`/api/students/${id}`)
        const student = responseFromServer.data;
        const action = getStudent(student);
        dispatch(action)
    }
}

export function updateStudentInTheDatabase(id, studentBody) {
    return async function (dispatch) {
        const responseFromServer = await axios.put(`/api/students/${id}`, studentBody)
        const student = responseFromServer.data;
        const action = updateStudent(student);
        dispatch(action)
    }
}

export default function students(state = {}, action) {

    switch (action.type) {
        case GET_STUDENT:
            state.student = action.payload;
            return state.student

        case UPDATE_STUDENT:
            state.student = action.payload;
            return state.student

        default:
            return state;
    }
}




