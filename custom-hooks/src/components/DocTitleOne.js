// import React,{useState,useEffect} from 'react'
import React,{useState} from 'react'


import useDoucmentTitle from '../customHooks/useDoucmentTitle';

function DocTitleOne() {
    const [count, setCount] = useState(0);

    // useEffect(()=>{
    //     document.title=`Count ${count}`
    // },[count])

    // now calling custom hook 
    useDoucmentTitle(count);

    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Count- {count}</button>
        </div>
    )
}

export default DocTitleOne;
