// React portal provide a way to render children into a DOM Node which exist outside the DOM heirarcy of the ParentComponent 

import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal( <h1>Portal Demo</h1>,document.getElementById('portal-root'));          
    
}

export default PortalDemo;

// note:----- ReactDOM.createPortal():-- Takes 2 argument first is the JSX which is the children of that portal or we can say what we have to render there as JSX And the second
        //    argument is the container where the JSX has to be entered . 

        // first parameter can be anything either Number, string , jsx or even any component 
        // portal event will propagate to all the ansestors publically 