import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TodoCard from "./TodoCard";


const Todo = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts);
    const {userId} = useParams()
   
    async function PostData() {

        let response = await axios.get( `https://jsonplaceholder.typicode.com/todos/?userId=${userId}`)
        setPosts(response.data)
    }

    useEffect(() => {
        PostData()
    }, [])
    return (
        <div>
            {
                posts.map((post) => {
                    return ( <TodoCard post={post} />
                    )
                })
            }
        </div>
    )
}

export default Todo;


