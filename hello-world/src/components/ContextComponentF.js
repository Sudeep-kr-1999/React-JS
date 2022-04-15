import React, { Component } from 'react'
import { UserConsumer } from './UserContext';

class ContextComponentF extends Component {
    render() {
        return (

            // the function inside recieve the context value as its parameter and render it on Html 
            <UserConsumer>
                {
                    (userName)=>{
                        return <div>Hello {userName}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ContextComponentF;
