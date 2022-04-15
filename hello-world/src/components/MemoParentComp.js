import React, { Component } from 'react'
import MemoComponent from './MemoComponent'

class MemoParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Sudeep"
        }
    }


    componentDidMount() {
        setInterval(() => {
            this.setState({ name: "Sudeep" })
        }, 2000)
    }
    render() {
        console.log("****************************** Memo Parent Component Render*************************************");
        return (
            <div>
                Memo Parent Component
                <MemoComponent name={this.state.name}/>
            </div>
        )
    }
}

export default MemoParentComp;

// Note:-- it is only for functional components 