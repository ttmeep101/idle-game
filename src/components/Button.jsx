import React, { useState, useEffect } from "react";


function Button(){
    const [value, setValue] = useState(0)
    const [count, setCount] = useState(0)

    function handleClick(){
        setValue((prevValue) => prevValue + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
          setCount((prevCount) => prevCount + value);
        }, 1000)
        return () => clearInterval(interval)},
        [value])

    return (
        <div>
            <p>{value}</p>
            <button onClick={handleClick}>test</button>
            <h1>Count: {count}</h1>
        </div>
    )
}

export default Button