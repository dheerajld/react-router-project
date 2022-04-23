import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AlbumCard from "./AlbumCard";


const Album = () => {
    const [posts, setPosts] = useState([]);
   
    const {userId} = useParams()
   
    async function PostData() {

        let response = await axios.get( `https://jsonplaceholder.typicode.com/albums/?userId=${userId}`)
        setPosts(response.data)
    }

    useEffect(() => {
        PostData()
    }, [])
    return (
        <div>
            {
                posts.map((post) => {
                    return ( <AlbumCard post={post} />
                    )
                })
            }
        </div>
    )
}

export default Album;


