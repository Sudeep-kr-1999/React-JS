import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Sudeep"

        }
        console.log("Life Cycle B Constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Life cycle B getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("Life Cycle B componentDidMount");
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log("Life cycle B getSnapshotBeforeUpdate ")
        return null;
    }

    shouldComponentUpdate() {
        console.log(" Life cycle B shouldComponentUpdate");
        return true;
    }

    componentDidUpdate() {
        console.log("Life cycle B componentDidUpdate")
    }

    render() {
        console.log("Life cycle B render Method");
        return (
            <div>Life Cycle B</div>
        )
    }
}
export default LifeCycleB;
