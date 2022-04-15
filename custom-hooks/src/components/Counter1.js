// import React,{useState} from 'react'
import useCounter from '../customHooks/useCounter'

function Counter1() {

    // without custom hooks 

    // const [count,setCount]=useState(0);

    // const increment=()=>{
    //     setCount(prevCount=>prevCount+1)
    // }

    // const decrement=()=>{
    //     setCount(prevCount=>prevCount-1)
    // }

    // const reset=()=>{
    //     setCount(0);
    // }


    // with custom hooks 

    // first paramter for the initial count and the second parameter is for the value(kitne value se change krega) 
    const [count, increment, decrement, reset] = useCounter(0,1);

    return (
        <div>
            <h2>Count- {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter1
