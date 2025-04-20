import { useState } from "react";

function ParentCounter() {
    const [count, setCount] = useState(0);
    
    function updateCount() {
        setCount(count => count+1);        
    }

    return (
        <div>
            <h3>Родительский компонент.</h3>
            <ChildCounter count={count}/>
            <button onClick={updateCount}>Плюс 1</button>
        </div>
    );
}

function ChildCounter({ count }) {
    return (
        <div>
            <p>Счётчик внутри другого компонента. </p>
            <p>Значение счётчика: {count} </p>
        </div>
    );
}



export default ParentCounter;
