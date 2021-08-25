import { func } from "assert-plus";
import React, { useState } from "react";
import '../App.css'
const FunctionCounter = () => {

    const [count, setCount] = useState(0);

    function handleIncrease() {
        setCount(count + 1);
    }

    function handleDecrease() {
        setCount(count - 1);
    }

    return (
        <>
          <h1 className="count-display">{count}</h1>
        <div>
            <button onClick={() => handleDecrease()} className='count-button'>Decrease Count</button>
            <button onClick={() => handleIncrease()} className='count-button'>Increase Count</button>
        </div>
        </>
    )
}

export default FunctionCounter;