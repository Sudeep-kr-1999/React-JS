import React from 'react';

// function Greet(){
//     return <h1>Hello Sudeep to the React World</h1>
// }


// notes :-------------props is just an object which contains attributes and the values pass from the parent component 
// const Greet = (props) => {
//     return (

//         // Note:------ it will give the error since props are immutable and cannot be changed once defined
//         // props.name="React"; 
//     <div>
//     <h1>Hello {props.name} with heroname {props.heroName}</h1>
//     {props.children}
//     </div>
//     )

// }



// By using Destructuring Concept :its destructuring in the parameter
// const Greet = ({name,heroName,children}) => {
//     return (

//         // Note:------ it will give the error since props are immutable and cannot be changed once defined
//         // props.name="React"; 
//     <div>
//     <h1>Hello {name} with heroname {heroName}</h1>
//     {children}
//     </div>
//     )
// }



// By using Destructuring Concept :its destructuring in the function body
const Greet = (props) => {
    const {name,heroName}=props;

    return (

        // Note:------ it will give the error since props are immutable and cannot be changed once defined
        // props.name="React"; 
    <div>
    <h1>Hello {name} with heroname {heroName}</h1>
    {/* {children} */}
    </div>
    )
}
export default Greet;

// NOTE:------- default export kerege to hum App.js mein koi bhi name se export kre aur uska component bnaye frk nhi padega but agr default export nhi hoga to hume exact name se export 
//              krna hoga