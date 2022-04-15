import React from 'react';

// very first HOC 

const UpdatedComponent = (OriginalComponent,incrementNumber) => {

    class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }


        incrementCount = () => {
            this.setState((prevState) => {
                return { count: prevState.count + incrementNumber}
            })
        }
        render() {
            console.log(this.props.name);
            return (

                // note:--- {...this.props} is the spread  operator ye HOC se original component ko wo prop paas krega jo hum app component se original component ko paas krna chahte the
                //          but wo hoc ko paas ho gya . iska mtlb jo yha de rhe hai wo to lo hi aur saath saath wha se aaya hua props bhi lelo to original component
                <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
            )
        }
    }
    return NewComponent;
}

export default UpdatedComponent;


// Naming Convention for the HOC:------------

// 1. The function and the file name is usually the same it indidcates the functionality added to the component in camelCase 
// 2. Original Component is Usually Rerfered to as WrappedComponent
// 3. new component is same as the function name but in the PascalCase