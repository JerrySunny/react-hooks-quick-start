import React, { useRef, useEffect, useState } from "react";

function FocusInput() {

    const inputRef = useRef();

    const [name, setName] = useState('');
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <div>
            <input type="text" ref={inputRef} onChange={(e) => setName(e.target.value)}></input>
            <h1>{name}</h1>
        </div>
    )
}

export default FocusInput;