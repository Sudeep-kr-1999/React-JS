import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
                {this.props.render(false)}
            </div>
        )
    }
}

export default User;
// Note:- rennder props is a function which take argument from the common 
// component and pass it as a props to the other used component where they 
// have to be used or directly use it in the app component .
