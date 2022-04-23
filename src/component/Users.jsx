import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export const Users = () => {
    
    const [users,setUser] = useState([]);
    const [filteredUsers,setFilteredUsers] = useState([]);
    const [search,setSearch] = useState([]);
   

    const getUsers = async () =>{
        try {
            const response = await axios.get(
               "https://jsonplaceholder.typicode.com/users"
            );
          setUser(response.data);
          setFilteredUsers(response.data);
          
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
       
        const result = users.filter((user)=>{
         return user.username.toLowerCase().match(search.toLowerCase()) || user.name.toLowerCase().match(search.toLowerCase());
        })
        setFilteredUsers(result)
       
    },[search]);

    useEffect(() => {
        getUsers();
    },[])

  return (
    <div>
    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className='form-control mb-2' id='searchval' 
    />

    <table className='table table-striped '>
    <thead>
        <tr>
          
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Post</th>
            <th>Todo</th>
            <th>Album</th>
            <th>Comment</th>
            <th>Photo</th>
            
          


        </tr>
    </thead>
    <tbody>
  
    {
        filteredUsers.map(({id,name,username,email}) => {
          
            return (
                <tr>
                
                    <td >{name}</td>
                    <td>{username}</td>
                    <td>{email}</td>
                    
                    <td>
                    <Link to={`/posts/${id}`}>Posts</Link>
                    </td>
                    <td>
                    <Link to={`/todos/${id}`}>Todos</Link>
                    </td>
                    <td>
                    <Link to={`/albums/${id}`}>Albums</Link>
                    </td>
                    <td>
                    <Link to={`/comments/${id}`}>Comments</Link>
                    </td>
                    <td>
                    <Link to={`/photos/${id}`}>Photo</Link>
                    </td>

                </tr>
                

            )
        })
    }
</tbody>  
              
     
</table>
    </div>
  )
}
