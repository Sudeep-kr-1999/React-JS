import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log("Button Clicked");

    }


    return (
        <div>

            {/* if the handler is like {clickHandler()} it will directly call the function without doing anything with button which is not correct   */}
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick;

// note:---------------------------
// 1. React event are named using camelCase only 
