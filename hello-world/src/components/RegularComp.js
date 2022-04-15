import React, { Component } from 'react'

class RegularComp extends Component {
    render() {
        console.log("Regular Compnent Render");
        return (
            <div>
                Regular Commponent {this.props.name}
            </div>
        )
    }
}

export default RegularComp;
