import React, { useState, useEffect } from "react";
import axios from "axios";
function DataFetchUseState() {

    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [data, setData] = useState({});


    useEffect(() => {
        const getData = async () => {
            try {
                const user = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
                setLoading(false);
                setData(user.data);
                setError('');
            } catch (error) {
                setLoading(false);
                setError('something went wrong');
            }
        }
        getData();
    }, [])
    return (
        <div>
            {isLoading ? 'loading' : data.title}
            {error ? error : null}
        </div>
    )

}

export default DataFetchUseState;