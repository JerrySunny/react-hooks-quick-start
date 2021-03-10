import React, { useReducer, useEffect } from "react";
import axios from 'axios';

function Trials() {
    const initialState = {
        loading: true,
        error: '',
        items: null
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS':
                return {
                    loading: false,
                    error: '',
                    items: action.data
                }
                break;
            case 'FETCH_ERROR':
                return {
                    loading: false,
                    error: 'something went wrong',
                    items: null
                }
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
                const list = await axios.get('https://jsonplaceholder.typicode.com/posts');
                dispatch({ type: 'FETCH_SUCCESS', data: list.data });
            } catch (error) {
                dispatch({ type: 'FETCH_ERROR' })
            }

        }
        getData();
    }, [])
    return (
        <div>
            {state.loading ? 'loading....' : ''}
            {state.items && <table>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                </tr>

                {state.items.map((item) => {
                    return (<tr>
                        <td>{item.userId}</td>
                        <td>{item.title.slice(0, 10)}</td>
                    </tr>)
                })}


            </table>}

            {state.error}

        </div>
    )

}
export default Trials;