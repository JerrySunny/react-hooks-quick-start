//this is to achieve call useEffect once and clean up

import React, { useState, useEffect } from "react";

function HooksMouseMove() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition);
        return () => {
            window.removeEventListener("mousemove", logMousePosition);
        }
    }, [])

    return (
        <div>Cords X: {x} Y:{y}</div>
    )

}

export default HooksMouseMove;