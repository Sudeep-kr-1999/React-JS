import React, { Component } from 'react'
import UpdatedComponent from './withCounter';

class ClickCounter extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }
    

    // incrementCount=()=>{
    //     this.setState((prevState)=>{
    //         return {count: prevState.count+1}
    //     })
    // }
    render() {

        // extracting count from the this.state 
        // const {count}=this.state;

        const {count,incrementCount}=this.props;

        return (
            
        //    <button onClick={this.incrementCount}>{this.props.name} Clicked {count} times</button>


        // here passing props on the ClickCounter from the App.js not work since the prop is passed down to HOC not to ClickCounter 
           <button onClick={incrementCount}> {this.props.name}Clicked {count} times</button>

        )
    }
}

// here we can paas the wrapped component  and additional data to be used there (HOC parameters)
export default UpdatedComponent(ClickCounter,5);


// Naming Convention for the HOC:------------

// 1. The function and the file name is usually the same it indidcates the functionality added to the component in camelCase 
// 2. Original Component is Usually Rerfered to as WrappedComponent
// 3. new component is same as the function name but in the PascalCase
