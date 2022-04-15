import React,{useState,useEffect} from 'react'

function RunEffectOnlyOnceuseEffectMouse() {
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);

    const logMousePosition=(e)=>{
        console.log("Mouse Events");
        setX(e.clientX);
        setY(e.clientY);
    }


    // Note:--------------
    // for calling useEffect Only once:--------------- add an empty array to the second parameter of useEffect ---> this will tell react that this particular effect doesnot depend
    // on any props or state so there is just no reason you to call this effect on reenders , means this will call only once in the initial render and forgot about it .




    //  Note:--------------------------------
    // for cleanup :------ useEffect mein jo function hai wo ek function return kr skta hai jo ye btayega ki agar component unmount ho gya to kya krna hai basically wo hi cleanup hai 
    useEffect(()=>{
        console.log('useEffect called...');
        window.addEventListener('mousemove',logMousePosition);


        // this is the cleanup function (very very important)
        return ()=>{
            console.log("Component Unmounting Code");
            window.removeEventListener('mousemove',logMousePosition);
        }
        

    },[])
    return (
        <div>
            Hooks X-{x} Hooks Y-{y}
        </div>
    )
}

export default RunEffectOnlyOnceuseEffectMouse;
