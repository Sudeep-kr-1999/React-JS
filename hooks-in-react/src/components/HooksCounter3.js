import React,{useState} from 'react'

function HooksCounter3() {

    // note:------- state variable can be anything a String, number,object anything 
    const [name,setName]=useState({firstName:"",lastName:""});
    return (
        <form>
            {/* this means copy every property from the name object and then just override the firstname with different value  */}
            <input type="text" value={name.firstName} onChange={(e)=>{setName({...name,firstName:e.target.value})}}/>

            {/* this means copy every property from the name object and then just override the lastname with different value  */}
            <input type="text" value={name.lastName} onChange={(e)=>{setName({ ...name,lastName:e.target.value})}}/>

            <h2>First Name is -{name.firstName}</h2>
            <h2>Last Name is - {name.lastName}</h2>

{/* ======================================================================================================================================================================================= */}
            {/* note :---- initial dono state empty hoga fir jb first name pr likhege to wha se lastname state dissapear ho jaayega aur jab hum last name likhege to wha se firstname 
                       dissaperar ho jaayega . This is because usestate() does not automatically merge and update the object this is the key difference between setState in class 
                        component. setState will merge the state but useState function do not merge the state */}

                        {/* similar scenario will be with arrays also  */}


                         {/* Very very important :-------------- */}
                        {/* for this we use spread operator (...) which will spread the name first then do remaining changes  */}

{/* ======================================================================================================================================================================================= */}

            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}

export default HooksCounter3;
