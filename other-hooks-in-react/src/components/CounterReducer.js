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
function CounterReducer() {

    // dispatch method allow us to execute the code corresponding to a particular action in a reducer function action 
    // here count refers to the entire state of the object 
   const [count,dispatch]= useReducer(reducer,initialState);
    return (
        <div>
            <div>count-{count}</div>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterReducer;

// Note:----- this is useReducer with simple state and simple action 