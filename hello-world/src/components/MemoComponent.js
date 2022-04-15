import React from 'react'

function MemoComponent({name}) {
    console.log("Rendering Memo Component");
    return (
        <div>
            {name}
        </div>
    )
}

export default  React.memo(MemoComponent);
// React.memo is a higher order component which take component add something to it and return the new component 

// note:---- this memo component will re-render only when the props will change if not
//           it will not rerender (very very important)