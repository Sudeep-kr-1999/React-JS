import React ,{useState} from 'react'

function HooksCounter2() {
    let initialCount=0
    const [count,setCount]=useState(initialCount);


    
    const increment5=()=>{

        for(let i=0;i<5;i++){

            // =============================================================================
             // this will not do our job har baar ek ek krke value increment hoga 
            // setCount(count+1)
            // ============================================================================

            // ===============================================================================
            // this will do our job 
            // when we want do do something related to previous state value we should do it this way 
            setCount((prevCount)=>{
                return prevCount+1
            })

            // ==================================================================================
        }
    }


    return (
        <div>
            Count:{count}
            <br></br>
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            {/* <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button> */}
    
            <button onClick={()=>setCount((prevCount)=>{return prevCount+1})}>Increment</button>
            <button onClick={()=>setCount((prevCount)=>{return prevCount-1})}>Decrement</button>
            <button onClick={()=>increment5()}>Increment 5</button>

        </div>
    )
}

export default HooksCounter2;
