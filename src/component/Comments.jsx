import React, { useEffect, useState } from 'react';
import axios from 'axios';
export const Comments = () => {
    
    const [comments,setComments] = useState([]);
    const [filteredComments,setFilteredComments] = useState([]);
    const [search,setSearch] = useState([]);

    const getComments = async () =>{
        try {
            const response = await axios.get(
               "https://jsonplaceholder.typicode.com/comments"
            );
          setComments(response.data);
          setFilteredComments(response.data);
          
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
       
        const result = comments.filter((comment)=>{
         return comment.title.toLowerCase().match(search.toLowerCase()) ;
        })
        setFilteredComments(result)
       
    },[search]);

    useEffect(() => {
        getComments();
    },[])

  return (
    <div>
    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className='form-control mb-2' id='searchval' 
    />

    <table className='table table-striped'>
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
           
          


        </tr>
    </thead>
    <tbody>
  
    {
        filteredComments.map(({id,name,email,body}) => {
          
            return (
                <tr>
                    
                    <td>{id}</td>
                    <td>{name}</td>
                    <td >{email}</td>
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
