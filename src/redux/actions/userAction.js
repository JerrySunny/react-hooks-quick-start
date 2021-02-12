
import axios from "axios";
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_REQUEST = 'FETCH_REQUEST';


export const getUserRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}
export const getUserSuccess = users => {
    return {
        type: FETCH_SUCCESS,
        payload: users
    }
}

export const getUserError = error => {
    return {
        type: FETCH_ERROR,
        payload: error
    }
}

export const getUsers = () => {
    return async dispatch => {
        dispatch(getUserRequest());
        try {
            const users = await axios.get('https://jsonplaceholder.typicode.com/posts');
            dispatch(getUserSuccess(users.data));
        } catch (error) {
            dispatch(getUserError());
        }
    }
}
