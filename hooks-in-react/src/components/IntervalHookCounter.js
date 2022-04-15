import React,{useState,useEffect} from 'react'

function IntervalHookCounter() {
    const [count,setCount]=useState(0);

    const tick=()=>{
        // setCount(count+1)
        setCount((prevCount)=>prevCount+1);
    }

    useEffect(()=>{

        // note:----- we can use multiple useEffect for the multiple effect to run 

        // note:------- if we have to use function in the useEffect  we should define it inside the useEffect and if we use any dependeny we should also provide it to the 
                        // dependency array in the second argument 

        function doSomething(){
            console.log(someProps);
        }
        const interval=setInterval(tick,1000);

        return ()=>{
            clearInterval(interval)
        }


        // note:------------- if we donot specify previous count in setCount we have to add dependency in the list of second argument otherwise if we take care of previous count we donot haveto add dependency 
    },[someProps])
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default IntervalHookCounter
