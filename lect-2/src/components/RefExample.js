import { useRef, useEffect } from "react";

// useRef позволяет привязать тэг как querySelector()
const RefExample = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };

    useEffect(() => {   //  Фокусирует поле сразу при загрузке
        inputRef?.current.focus();
    }, []);

    return (
        <div>
            <input type="text" ref={inputRef}></input>
            <button onClick={handleClick}>Фокус</button>
        </div>
    );
}

export default RefExample;