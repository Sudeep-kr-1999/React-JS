import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Sudeep"
        }
    }
    

    componentDidMount(){
        setInterval(()=>{
            this.setState({name:"Sudeep"})
        },2000)
    }
    render() {
        console.log("******************************Parent Component Render*************************************");
        return (
            <div>
                Parent Component
                <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp


// Note:------- every 2 seconds the parent and regular component render but pure component never re-render it just render once at the top 


// ******************************Parent Component Render*************************************
// RegularComp.js:5 Regular Compnent Render
// PureComp.js:5 Pure Component Render
// ParentComp.js:21 ******************************Parent Component Render*************************************
// RegularComp.js:5 Regular Compnent Render
// ParentComp.js:21 ******************************Parent Component Render*************************************
// RegularComp.js:5 Regular Compnent Render
// ParentComp.js:21 ******************************Parent Component Render*************************************
// RegularComp.js:5 Regular Compnent Render
// ParentComp.js:21 ******************************Parent Component Render*************************************
// RegularComp.js:5 Regular Compnent Render
// ParentComp.js:21 ******************************Parent Component Render*************************************
// RegularComp.js:5 Regular Compnent Render
// ParentComp.js:21 ******************************Parent Component Render*************************************
// RegularComp.js:5 Regular Compnent Render
// ParentComp.js:21 ******************************Parent Component Render*************************************
// RegularComp.js:5 Regular Compnent Render
// ParentComp.js:21 ******************************Parent Component Render*************************************
// RegularComp.js:5 Regular Compnent Render
// ParentComp.js:21 ******************************Parent Component Render*************************************
// RegularComp.js:5 Regular Compnent Render
// ParentComp.js:21 ******************************Parent Component Render*************************************
// RegularComp.js:5 Regular Compnent Render
// ParentComp.js:21 ******************************Parent Component Render*************************************
// RegularComp.js:5 Regular Compnent Render
// ParentComp.js:21 ******************************Parent Component Render*************************************
// RegularComp.js:5 Regular Compnent Render

// =============================================================================================================================================================================
// note:----------------

// Regular Component:-
// -----> A regular Component does not implements the shouldComponentUpdate method . It always return true by default 


// Pure Component:--------
// --------> A pure Component on the other hand implements shouldComponentUpdate method with a shallow props and state Comparisons 

