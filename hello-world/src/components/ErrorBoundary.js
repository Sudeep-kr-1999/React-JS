import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }
    
    // ===================================================
    // function utilised for error boundary 
    static getDerivedStateFromError(error){
        return {
            hasError:true
        }
    }

    componentDidCatch(error,info){
        console.log(error);
    }
    // ===================================================

    render() {
        if (this.state.hasError){
            return <h1>Something went wrong</h1>
        }
        return (
            this.props.children
        )
    }
}

export default ErrorBoundary

// note:----- ErrorBoundary lagane pe React error hamesha show krega as it is mentioned in the documentation that jitna acche se ho error show krega but cross button pr click krne pr agar
//           humne error ErrorBoundary lagyi hogi to wo fallback UI dikhega nhi to kuch nhi dikhega


// Note:--- saare Component ko as a group ErrorBoundary mein wrap krna is not ideal kyuki ek mein error aayega to saara block ho jaayega to iske liye hum saare component ko individually 
//          ErrorBoundary se wrap krte h taaki jisme error aaye bs whi dikhe baaki sb shi chlta rhe 

// note:-------- error boundaries catch error during rendering in life cycle methods and the constructors of the whole tree below them however it donot catch error inside event 
//               handlers for eventhandlers we have to use regular try catch statement not ErrorBoundary.