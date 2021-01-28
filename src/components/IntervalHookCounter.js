import React, { useState, useEffect } from "react";

function IntervalHookCounter() {

    const [counter, setCounter] = useState(0);

   

    useEffect(() => {
        const tick = () => {
            setCounter(counter + 1);
        }
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [counter])

    return (
        <div>{counter}</div>
    )
}
export default IntervalHookCounter;