import React from 'react';

// With the Help of JSX:-----------

// const Hello=()=>{
//     return(
//         <div className="dummyClass">
//             <h1>Hello Sudeep</h1>
//         </div>
//     )
// }


// Without The help of JSX:----------


// note:--------- the JSX do exactly below operations while performing the operations 
const Hello = () => {
    return React.createElement('div', {id:"Hello",className:"dummyClass"}, React.createElement('h1',null,'Hello Sudeep'));
}


export default Hello; 