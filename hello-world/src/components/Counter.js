import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    Increment() {
        //     //  Note:----------------
        //     // if we do this.state.count=this.state.count+1 
        //     // then this will run correct in console but donot change in UI

        //     // So for making change in the UI we should use this.setState();

        //     // the console value is 1 less than rendered value because call to this.setState() is asynchronous
        //     // this.setState() takes 2 argument first is the object and then the callback function to be run after the state get change 
        // this.setState({ count: this.state.count + 1 }, () => (console.log("Callback value", this.state.count)));
        this.setState({ count: this.state.count + 1 }, () => {return console.log("Callback value", this.state.count)});

        //     console.log(this.setState.count); 


        // if we have to do some operations with or related to previous state we paas previous state as a function argument to arrow function and do whatever we want !


        // The reason for below, as explained in the MDN Docs is that an arrow function wrapped by() will return the value it wraps, so if I wanted to use curly braces I had 
        // to add the return keyword,
        this.setState((previousState ) => { return { count: previousState.count + 1 } });
        // this.setState((previousState)=>({count:previousState.count+1}));


        // note:---- we can also use props with this function like thisState((previousState,props)=>(.......................................whaterver the operation));
    }


    // note :--- this will not result UI Value as 5 because all 5 call are done in a single go in react 
    //  and updated value doesnot carry over between different calls 

    //  but yes in console there is calback run for each call means 5 times
    Increment5() {
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
    }
    render() {
        return (
            <div>
                <h2>Count - {this.state.count}</h2>
                <button onClick={() => this.Increment5()}>Increment</button>
            </div>
        )
    }
}

export default Counter;



// note about setState() in react:--------------

// 1. Always make use of setState and never modify the state directly

// 2. Code has to be executed after the state has been updated? place that code in the callback function which is the second argument to the setState() method

// 3. When you have to update state based on the previous state value, pass a in a function as argument instead of regular object