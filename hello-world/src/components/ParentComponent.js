import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props){
        super(props);

        this.state={
            parentNane:"Parent"
        }

        this.greetParent=this.greetParent.bind(this);
    }


    greetParent(childName){
        alert(`hello ${this.state.parentNane}from ${childName}`);
    }
    render() {
        return (
            <div>

                {/* here we passed the method to the ChildComponent as a props  */}
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent;
