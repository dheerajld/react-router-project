import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CommentsCard from "./CommentsCard";


const Comments = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts);
    const {postId} = useParams()
  
    async function PostData() {

        let response = await axios.get( `https://jsonplaceholder.typicode.com/comments/?postId=${postId}`)
        setPosts(response.data)
    }

    useEffect(() => {
        PostData()
    }, [])
    return (
        <div>
            {
                posts.map((post) => {
                    return ( <CommentsCard post={post} />
                    )
                })
            }
        </div>
    )
}

export default Comments;


