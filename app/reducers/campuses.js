import axios from 'axios';

// action types
export const GET_CAMPUSES = 'GET_CAMPUSES';
export const CREATE_CAMPUS = 'CREATE_CAMPUS';
export const DELETE_CAMPUS = 'DELETE_CAMPUS';

// action creators
export function getCampuses(campuses) {
    return {
        type: GET_CAMPUSES,
        campuses
    };
}

export function createCampus(campus) {
    return {
        type: CREATE_CAMPUS,
        campus
    }
}

export function deletedCampus(campus) {
    // console.log('campus.id', campus.id)
    return {
        type: DELETE_CAMPUS,
        campus
    }
}

// thunks
export function fetchCampuses() {
    return async function (dispatch) {
        const responseFromServer = await axios.get('/api/campuses');
        const campuses = responseFromServer.data;
        const action = getCampuses(campuses);
        dispatch(action);
    };
};

export const sendCampus = campus => async (dispatch) => {
    const responseFromServer = await axios.post('/api/campuses', campus);
    const newCampus = responseFromServer.data;
    dispatch(createCampus(newCampus))
}

export const deleteCampusFromServer = id => async (dispatch) => {
    const campus = await axios.delete(`api/campuses/${id}`);
    dispatch(deletedCampus(campus))
}

const initialState = {
    campuses: []
}

export default function campuses(state = initialState, action) {
    const newState = { ...state }
    switch (action.type) {

        case GET_CAMPUSES:
            newState.campuses = action.campuses;
            return newState;

        case CREATE_CAMPUS:
            newState.campuses = [...newState.campuses, action.campus]
            return newState

        case DELETE_CAMPUS:
            newState.campuses = [...newState.campuses].filter(campus => { return campus.id !== action.campus.data.id })
            return newState

        default:
            return state;
    }
}




