import React from 'react'
import './myStyles.css';

function Stylesheets(props) {
    let classname=props.primary?'primary':' '
    return (
        <div>
            <h1 className={`${classname} font-xl`}>Stylsheets</h1>
        </div>
    )
}

export default Stylesheets;

// Note:------ we can do styling in react in 4 different ways :
// 1. CSS Stylesheets
// 2. Inline styling
// 3. CSS Modules
// 4. CSS in JS libraries