import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log("Pure Component Render");
        return (
            <div>
                Pure Compoent {this.props.name}
            </div>
        )
    }
}

export default PureComp;
