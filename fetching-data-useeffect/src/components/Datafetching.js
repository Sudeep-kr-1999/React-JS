import React, { useState, useEffect } from 'react'
import axios from 'axios'
function Datafetching() {
    // const [posts, setPost] = useState([])
    const [post,setPost]=useState({});
    const[id,setId]=useState(1);
    const [idFromButtonClick,setIdFromButtonClick]=useState(1);


    const handleClick=()=>{
        setIdFromButtonClick(id);
    }
    // fetching data in the useEffect() Function 
    useEffect(() => {
        // axios.get("https://jsonplaceholder.typicode.com/posts/").then((response) => {
        //     console.log(response)
        //     setPost(response.data)
        // }).catch((error) => { console.log(error) });

        // getting data as per the id  entered directly
        // axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) => {
        //     console.log(response)
        //     setPost(response.data)
        // }).catch((error) => { console.log(error) });


        // getting data as per the id  entered and after the button click
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`).then((response) => {
            console.log(response)
            setPost(response.data)
        }).catch((error) => { console.log(error) });


    },[idFromButtonClick])
    return ( 
        <div>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
            <button onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
            {/* <ul>
                {posts.map((post) => (<li key={post.id}>{post.title}</li>))}
            </ul> */}
        </div>
    )
}

export default Datafetching;
