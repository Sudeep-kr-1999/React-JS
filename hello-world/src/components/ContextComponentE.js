import React, { Component } from 'react'
import ContextComponentF from './ContextComponentF'
import UserContext from './UserContext';

class ContextComponentE extends Component {

    static contextType=UserContext;
    render() {
        return (
            <div>
                Component E context : {this.context}
                <ContextComponentF/>
            </div>
        )
    }
}


// assign this UserContext to the contextType property of the class
// Now in the render method the context value is available as {this.context} --- very very important 

// Note:------ we can also replace ContextComponentE.contextType=UserContext to ---> static contextType=UserContext  above in the class;

// ContextComponentE.contextType=UserContext;

export default ContextComponentE;


// ===============================================================================================================================================
// Limitations of the contextType:-----------

// 1. Only Works with the class component

// 2. We can only suscribe only a single context using contextType at a time .( means ek time pr ek hi context use kr paayege multiple nhi)

// ===============================================================================================================================================