import React, { useState, useEffect } from "react";

function Samples() {
    const getDateObj = (id) => {
        const dt = new Date();
        const item = {
            id: Math.floor(Math.random() * Math.floor(1000000)),
            date: dt.toDateString(),
            hour: dt.getHours(),
            min: dt.getMinutes(),
            sec: dt.getSeconds()
        };
        return item;
    }

    const [items, setItems] = useState([getDateObj(1)]);
    const sort = (toggle) => {
        if (toggle) {
            setItems([...items].sort((a, b) => {
                return a['sec'] - b['sec'];
            }));
        } else {
            setItems([...items].reverse());
        }
    };
    const deleteItem = (id) => {
        console.log(id);
        const filterd = items.filter((item, index, arr) => {
            return item.id !== id;
        });
        setItems([...filterd])
    }
    useEffect(() => {
        const tick = () => {
            setItems([...items, getDateObj(items.length + 1)]);
        };
        const interval = setInterval(tick, 10000);
        return () => {
            clearInterval(interval);
        };
    }, [items]);
    const toggle = true;
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Hour</th>
                        <th>Min</th>
                        <th onClick={() => sort(!toggle)} style={{ cursor: "pointer" }}>Sec</th>
                    </tr>
                </thead>
                <tbody>
                    {items.length > 0 &&
                        items.map((el) => {
                            return (
                                <tr key={el.id} style={{ cursor: "pointer" }}
                                    onClick={() => deleteItem(el.id)}>
                                    <td>{el.date}</td>
                                    <td>{el.hour}</td>
                                    <td>{el.min}</td>
                                    <td >{el.sec}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
}
export default Samples;
