import React, { useEffect, useState } from 'react';
import axios from 'axios';
export const Todos = () => {
    
    const [todos,setTodos] = useState([]);
    const [filteredTodos,setFilteredTodos] = useState([]);
    const [search,setSearch] = useState([]);

    const getTodos = async () =>{
        try {
            const response = await axios.get(
               "https://jsonplaceholder.typicode.com/todos"
            );
          setTodos(response.data);
          setFilteredTodos(response.data);
          
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
       
        const result = todos.filter((todo)=>{
         return todo.title.toLowerCase().match(search.toLowerCase()) ;
        })
        setFilteredTodos(result)
       
    },[search]);

    useEffect(() => {
        getTodos();
    },[])

  return (
    <div>
    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className='form-control mb-2' id='searchval' 
    />

    <table className='table table-striped '>
    <thead>
        <tr>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
           
          


        </tr>
    </thead>
    <tbody>
  
    {
        filteredTodos.map(({userId,id,title}) => {
          
            return (
                <tr>
                    <td >{userId}</td>
                    <td>{id}</td>
                    <td>{title}</td>
                    
                    
                    

                </tr>
                

            )
        })
    }
</tbody>  
              
     
</table>
    </div>
  )
}
