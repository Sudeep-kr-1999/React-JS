import React ,{useState} from 'react'

function HookCounter() {

    // useState() hooks first argument as the initial value of the state leta hai and return krta h wo state and ek function jo us state ko change kr skta h !

    // this syntax is known as array destructuring 
    const [count,setCount]=useState(0);
    
    return (
        <div>

            {/* note setCount() mein hum new count value pass kr skte h  */}
            <button onClick={()=>setCount(count+1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter;


// Rules to follow using Hooks in React :----------------------
 
// -----> Only call hooks at the top level
// -----> Donot call hooks inside loops, conditions , or nested functions
// -----> Only call hooks from the react functions
// -----> Can call them from within React functional components and not just any regular Javascript Functions



