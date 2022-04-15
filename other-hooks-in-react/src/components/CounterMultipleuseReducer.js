import React,{useReducer} from 'react'

const initialState=0;
const reducer=(currentState,action)=>{
    switch(action){
        case 'increment':
            return currentState +1;
        case 'decrement':
            return currentState -1;
        case 'reset':
            return initialState;
        default:
            return currentState;
    }

}
function CounterMultipleuseReducer() {

    // dispatch method allow us to execute the code corresponding to a particular action in a reducer function action 
    // here count refers to the entire state of the object 


    // we can use multiple useReducer when dealing with multiple statevariable having same state transistion or function 
   const [count,dispatch]= useReducer(reducer,initialState);
   const [count2,dispatch2]=useReducer(reducer,initialState);
    return (
        <div>
            <div>count1-{count}</div>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>

            <div>count2-{count2}</div>
            <button onClick={()=>dispatch2('increment')}>Increment</button>
            <button onClick={()=>dispatch2('decrement')}>Decrement</button>
            <button onClick={()=>dispatch2('reset')}>Reset</button>
        </div>
    )
}

export default CounterMultipleuseReducer;

// Note:----- this is useReducer with simple state and simple action 