// import React,{useState} from 'react'
import { useState } from 'react'

function useCounter(initialCount=0,value,) {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount(prevCount => prevCount + value)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }

    const reset = () => {
        setCount(initialCount);
    }
    return (
        [count, increment, decrement, reset]
    )
}

export default useCounter;


// by default initialCount 0 hota h hum kuch aur bhi rkh skte h as per our need and wish 
