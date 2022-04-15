import React,{useState,useMemo} from 'react'

function UseMemoCounter() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne=()=>{
        setCounterOne(counterOne+1);
    }

    const incrementTwo=()=>{
        setCounterTwo(counterTwo+1);
    }

    const isEven=useMemo(()=>{
        let i=0;

        // it will affect the speed to print wehther the counterOne is even or odd 
        while(i<200000000){
            i++;
        }
        return counterOne % 2===0;
    },[counterOne]);


    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One--{counterOne}</button>
                <br/>
                <span>{isEven?"Even":"Odd"}</span>
            </div>
            <div>
            <button onClick={incrementTwo}>Count Two-- {counterTwo}</button>
            </div>
        </div>
    )
}

export default UseMemoCounter;


// note:---------- every time when state update component rerender and when component rerender isEven fucntion is called again the function is slow and even when we update counterTwo the 
                // UI update is taking some time 


// note:----------- after using useMemo hook the delay is counterOne is as expected but the delay occouring at counterTwo earlier is eliminated  
