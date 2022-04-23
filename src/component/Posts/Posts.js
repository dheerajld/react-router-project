import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PostCard from "./PostCard";


const Post = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts);
    const {userId} = useParams()
    console.log('ID', userId);
    async function PostData() {

        let response = await axios.get( `https://jsonplaceholder.typicode.com/posts/?userId=${userId}`)
        setPosts(response.data)
    }

    useEffect(() => {
        PostData()
    }, [])
    return (
        <div>
            {
                posts.map((post) => {
                    return ( <PostCard post={post} />
                    )
                })
            }
        </div>
    )
}

export default Post;


