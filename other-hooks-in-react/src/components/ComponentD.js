import React,{useContext} from 'react'
import {CountContext} from '../App';

function ComponentD() {
    const counterContext=useContext(CountContext);
    return (
        <div>
            Component D-{counterContext.countState}
            <button onClick={()=>counterContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=>counterContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>counterContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentD;