import React, { useRef, useEffect } from "react";

function FocusInput() {

    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    },[]);
    return (
        <input type="text" ref={inputRef}></input>
    )
}

export default FocusInput;