import React from 'react'

function NameList1() {
    const names=['Bruce','Clark','Diana','Bruce'];
    const NameList=names.map((name,index)=>(<h2 key={index}>{index}{name}</h2>))
    return (
        <div>
            {NameList}
        </div>
    )
}

export default NameList1;

// we can use index as a key for following coniditons :----------------------------------

// 1. The item in your list do not have a unique ID.
// 2. List is static list and will not change 
// 3. List will never be reordered or filtered 