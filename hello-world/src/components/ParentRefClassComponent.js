import React, { Component } from 'react'
import RefClassComponent from './RefClassComponent'

class ParentRefClassComponent extends Component {
    constructor(props) {
        super(props)
    
        this.componentRef=React.createRef();
    }

    clickHandler=()=>{
        this.componentRef.current.focusInput();
    }
    
    render() {
        return (
            <div>
                <RefClassComponent ref={this.componentRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ParentRefClassComponent;
