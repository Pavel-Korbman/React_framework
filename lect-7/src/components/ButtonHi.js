import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sayHi } from "./actions";

function HiButton() {
    const text = useSelector(state => state.hiText);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(sayHi());
    };

    return (
        <div>
            <h1>{text}</h1>
            <button onClick={handleClick}>Поздороваться</button>
        </div>

    );
}

export default HiButton;