import React, { useReducer, useEffect } from "react";
import axios from "axios";

function DataFetchUseReducer() {

    const initialState = {
        isLoading: true,
        data: {},
        error: ''
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case "FETCH_SUCCESS":
                return {
                    isLoading: false,
                    data: action.data,
                    error: ''
                };
                break;
            case "FETCH_ERROR":
                return {
                    isLoading: false,
                    data: {},
                    error: 'something went wrong'
                };
                break;
            default:
                return state;
                break;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        const getData = async () => {
            try {
                const user = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
                dispatch({ type: 'FETCH_SUCCESS', data: user.data })
            } catch (error) {
                dispatch({ type: 'FETCH_ERROR' })
            }
        }
        getData();
    }, [])
    return (
        <div>
            {state.isLoading ? 'loading' : state.data.title}
            {state.error ? state.error : null}
        </div>
    )
}
export default DataFetchUseReducer;