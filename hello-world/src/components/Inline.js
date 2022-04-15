import React from 'react'

function Inline() {
    const heading={
        fontSize:'72px',
        color:'blue'
    }
    return (
        <div>
            <h2 style={heading}>Inline</h2>
            <h1 className="error">Error</h1>
        </div>
    )
}

export default Inline;

// note:----------------
// For Inline styling key must be on camel case(very very important)