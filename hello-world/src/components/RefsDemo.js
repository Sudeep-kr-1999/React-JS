import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef=React.createRef();
        this.callBackref=null;
        this.setcallBackref=(element)=>{
            this.callBackref=element;
        }
    }


    clickHandler=()=>{

        // here we are using the value property of the DOM node which get refer by the this.inputRef 
        alert(this.inputRef.current.value);
    }
    componentDidMount(){

        // in callBackref We donot need current object it will directly point to the reference node 
        if (this.callBackref){
            this.callBackref.focus();
        }

        // // note:---- this.inputRef give an object current as an output which refer the exact DOM Node so we have to write (this.inputRef.current.focus()) to have focus on that 
        // console.log(this.inputRef);
        // console output:---{current: input}

        // this.inputRef.current.focus();
    }
    
    render() {
        return (
            <div>
                {/* for general ref  */}
                <input type="text" ref={this.inputRef}/>

                {/* for callBackref */}
                {/* here the input element is implicity paased as the parameter to assign the reference  */}
                <input type="text" ref={this.setcallBackref}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo;

// note:----- here we saw how to add ref to the normal html element and it is also possible to add the ref to the class component 
            //  Note refs cannot be attached to the functional component 