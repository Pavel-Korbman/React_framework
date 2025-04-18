import '../Counter.css';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const updateCount = ()=>{setCount(count+1)}; 
    return (
        <div className='counter'>
            <span>{count}</span>
            {/* <button onClick={()=>{setCount(count+1)}}>+1</button>  */}
            {/* <button onClick={() => { setCount(item => ++item) }}>+1</button> */}
            <button onClick={updateCount}>+1</button>
        </div>
    );
}

export default Counter;
