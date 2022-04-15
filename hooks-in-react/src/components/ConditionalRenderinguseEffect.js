import React,{useState,useEffect} from 'react'

function ConditionalRenderinguseEffect() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState("");


    // it runs after every render of the component very important
    // useEffect is placed inside the components so we can easily access components state and props without having to write the additional code 

    // note:----- for conditional rendering in the useEffect in the react a second argument is passed as array which contains state or  props , if that props or state changes then
    //           only the useEffect will work otherwise not. (very very important)

                //  here in our example we passed count in the array if the count changes then only the useEffect will execute otherwise not 
    useEffect(()=>{
        console.log(" useEffect - updating document title")
        document.title=`You clicked ${count} times`
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default ConditionalRenderinguseEffect;