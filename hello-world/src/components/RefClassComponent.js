import React, { Component } from 'react'

class RefClassComponent extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef=React.createRef();
    }
    
    focusInput(){
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                Ref in class Component
                <input type="text" ref={this.inputRef}/>
            </div>
        )
    }
}

export default RefClassComponent;
