import { FETCH_ERROR, FETCH_SUCCESS, FETCH_REQUEST } from "../actions/userAction";
const initialState = {
    isLoading: false,
    users: {},
    error: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                isLoading: false,
                users: action.payload,
                error: ''
            };
            break;
        case FETCH_SUCCESS:
            return {
                isLoading: false,
                users: action.payload,
                error: ''
            };
            break;
        case FETCH_ERROR:
            return {
                isLoading: false,
                users: {},
                error: action.payload
            };
            break;
        default:
            return state;
            break;
    }
}
export default userReducer;