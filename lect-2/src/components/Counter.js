import '../Counter.css';
import { useState } from 'react';

function Counter() {
const [count, setCount] = useState(0);
    return (
        <div class = 'counter'>
            <span>{count}</span>
            <button onClick={()=>{setCount(count+1)}}>+1</button>
        </div>
    );
}

export default Counter;
