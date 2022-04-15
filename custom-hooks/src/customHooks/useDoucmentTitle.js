import React,{useEffect} from 'react'

function useDoucmentTitle(count) {
    useEffect(()=>{
        document.title=`Count ${count}`
    },[count])

    
    return (
        <div>
            
        </div>
    )
}

export default useDoucmentTitle;
