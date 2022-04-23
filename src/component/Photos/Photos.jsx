import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PhotoCard from "./PhotoCard";


const Photo = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts);
    const {albumId} = useParams()
  
    async function PostData() {

        let response = await axios.get( `https://jsonplaceholder.typicode.com/photos/?albumId=${albumId}`)
        setPosts(response.data)
    }

    useEffect(() => {
        PostData()
    }, [])
    return (
        <div>
            {
                posts.map((post) => {
                    return ( <PhotoCard post={post} />
                    )
                })
            }
        </div>
    )
}

export default Photo;


