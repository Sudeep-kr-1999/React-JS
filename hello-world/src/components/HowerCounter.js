import React, { Component } from 'react'
import UpdatedComponent from './withCounter';


class HowerCounter extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }


    // incrementCount = () => {
    //     this.setState((prevState) => {
    //         return { count: prevState.count + 1 }
    //     })
    // }
    render() {
        // const {count}=this.state;
        const {count,incrementCount}=this.props;
        return (
            <div>
                <h2 onMouseOver={incrementCount}> Hower {count} times</h2>
            </div>
        )
    }
}

// here we can paas the wrapped component and additional data to be used there (parameter for HOC)
export default UpdatedComponent(HowerCounter,10);


// Naming Convention for the HOC:------------

// 1. The function and the file name is usually the same it indidcates the functionality added to the component in camelCase 
// 2. Original Component is Usually Rerfered to as WrappedComponent
// 3. new component is same as the function name but in the PascalCase
