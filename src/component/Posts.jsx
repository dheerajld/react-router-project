import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Posts = () => {
    
    const [posts,setPosts] = useState([]);
    const [filteredPosts,setFilteredPosts] = useState([]);
    const [search,setSearch] = useState([]);

    const getPosts = async () =>{
        try {
            const response = await axios.get(
               "https://jsonplaceholder.typicode.com/posts"
            );
          setPosts(response.data);
          setFilteredPosts(response.data);
          
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
       
        const result = posts.filter((post)=>{
         return post.title.toLowerCase().match(search.toLowerCase()) ;
        })
        setFilteredPosts(result)
       
    },[search]);

    useEffect(() => {
        getPosts();
    },[])

  return (
    <div>
    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className='form-control mb-2' id='searchval' 
    />

    <table className='table table-striped'>
    <thead>
        <tr>
          
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            
           
          


        </tr>
    </thead>
    <tbody>
  
    {
        filteredPosts.map(({id,title,body}) => {
          
            return (
                <tr>
                    
                    <td>{id}</td>
                    <td>{title}</td>
                    <td >{body}</td>
                    
                    
                    
                    

                </tr>
                

            )
        })
    }
</tbody>  
              
     
</table>
    </div>
  )
}
