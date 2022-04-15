import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggendIn: true
        }
    }
    render() {

        // ============================================================================

        // Short Circuit Operator :--- if the conditon is true then evaluate the next expressions else do nothing 
        return(
            this.state.isLoggendIn && <div>Welcome Sudeep</div>
        )
        // ============================================================================


        // ==========================================================================

        // Ternary Conditional Operator Approach 
        // return (
        //     this.state.isLoggendIn ? <div>Welcome Sudeep</div> : <div>Welcome Guest</div>
        // )
        // ==========================================================================

        // ==========================================================================

        // Element Variable Approach 
        // let Message;
        // if(this.state.isLoggendIn){
        //     Message=<div>Welcome Sudeep</div>
        // }else{
        //     Message= <div>Welcome Guest</div>
        // }

        // return(
        //     <div>{Message}</div>
        // )
        // =======================================================================



        // =======================================================================
        // if else approach :---------------------------

        // if(this.state.isLoggendIn){
        //     return(
        //         <div>
        //             Welcome Sudeep
        //         </div>
        //     )
        // }else{
        //     return(
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )

        // }
        // =======================================================================




        // return (

        //     <div>
        //         <div>Welcome Sudeep</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting;

