import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}

            {/* passing the parameter from the child components to the parent components method  */}
            <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
