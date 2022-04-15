import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Sudeep"

        }
        console.log("Life Cycle A Constructor");
    }

    changeState=()=>{
        this.setState({
            name:"React With Sudeep"
        })
    }



    static getDerivedStateFromProps(props, state) {
        console.log("Life cycle A getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("Life Cycle A componentDidMount")
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log("Life cycle A getSnapshotBeforeUpdate ")
        return null;
    }

    shouldComponentUpdate() {
        console.log(" Life cycle A shouldComponentUpdate");
        return true;
    }

    componentDidUpdate() {
        console.log("Life cycle A componentDidUpdate")
    }
    render() {
        console.log("Life cycle A render Method");
        return (
            <div>
                <div>Life Cycle A</div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
