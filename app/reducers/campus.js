import axios from 'axios';


// action types
export const GET_CAMPUS = 'GET_CAMPUS';
export const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

// action creators
export function getCampus(campus) {
    return {
        type: GET_CAMPUS,
        payload: campus
    }
}

export function updateCampus(campus) {
    return {
        type: UPDATE_CAMPUS,
        payload: campus
    }
}

// thunks
export function fetchCampus(id) {
    return async function (dispatch) {
        const responseFromServer = await axios.get(`/api/campuses/${id}`)
        const campus = responseFromServer.data;
        const action = getCampus(campus);
        dispatch(action)
    }
}

export function updateCampusInTheDatabase(id, campusBody) {
    return async function (dispatch) {
        console.log('campusBody', campusBody)
        const responseFromServer = await axios.put(`/api/campuses/${id}`, campusBody)
        const campus = responseFromServer.data;
        const action = updateCampus(campus);
        dispatch(action)
    }
}

export default function campus(state = {}, action) {

    switch (action.type) {
        case GET_CAMPUS:
            state.campus = action.payload;
            return state.campus
        case UPDATE_CAMPUS:
            state.campus = action.payload;
            return state.campus
        default:
            return state;
    }
}




