import React,{useState,useEffect} from 'react'

function HooksuseEffectCouter() {
    const [count,setCount]=useState(0);


    // it runs after every render of the component very important
    // useEffect is placed inside the components so we can easily access components state and props without having to write the additional code 
    useEffect(()=>{
        document.title=`You clicked ${count} times`
    })
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default HooksuseEffectCouter;
