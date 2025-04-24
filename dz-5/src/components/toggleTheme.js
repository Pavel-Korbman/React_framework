import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { liteTheme, darkTheme } from './themes';

const ToggleTheme = () => {
    const toggle = useSelector(state => state);
    const dispatch = useDispatch();


    const change = () => {
        dispatch({ type: 'TOGGLE_THEME' });
    };

    return (
        <div style={toggle ? darkTheme : liteTheme}>
            <div className="page">
                <h1>Переключение темы оформления</h1>
                <button onClick={change}>Сменить тему</button>
            </div>
        </div>
    );
}

export default ToggleTheme;


