import axios from 'axios'
import React, { useState } from 'react'

export const PostsDetails = () => {
    const [posts, setPosts] = useState([])

const getPosts = async () =>{
    try{
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        setPosts(response.data);
    }catch(error){
        console.log(error);
    }
};

  return (
    <div className='container'>
    <div className='row'>
    {
        posts.map(post =>{
            return (
                <tr>
                    
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td >{post.body}</td>
                    
                    
                    

                </tr>
                

            )
        })
    }
    </div>
    
    </div>
  )
}
