import React, { useState } from 'react'

function UseStateHook(){
    const[color, setColor]=useState('blue');

    const mouseover=()=>{
        setColor(color=='blue'?'red':'blue')
    }

    const[count,setCount]=useState();

    const increment=()=>{
        setCount(count+1);
    }

    const decrement=()=>{
        setCount(count-1);
    }

    const reset=()=>{
        setCount(0);
    }

    return(
        <>
        <div>UseStateHook</div>
        <p style={{color: color}} onMouseOver={mouseover}>React Hooks were introduced in version 16.8 to enable functional components to access state and other core React features that were previously only available in class components.</p>
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
        </div>
        </>
    )
}

export default UseStateHook;