import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const Photos = () => {
    const [photos,setPhotos] = useState([]);
   

    const getPhotos = async () =>{
        try {
            const response = await axios.get(
               "https://jsonplaceholder.typicode.com/photos"
            );
          console.log(response.data);
          setPhotos(response.data);
        
          
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPhotos();
    },[])
  return (
    <div className="row">
    {photos.map(({ id, url, title, thumbnailUrl }) => {
      return (
        <div key={id} className="col-3">
          <div className="card-col-4" style={{ width: "18rem" }}>
            <img src={url} class="card-img-top"  />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
            </div>
          </div>
        </div>
      );
    })}
  </div>
  )
}
