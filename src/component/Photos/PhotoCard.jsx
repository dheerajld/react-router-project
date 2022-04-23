import React from 'react';


const PhotoCard = (props) => {

    const { title, url } = props.post;
    return (
        <div className="card mx-md-1 d-inline-block " >
        <div  className="col-3">
        <div className="card-col-4" style={{ width: "18rem" }}>
          <img src={url} class="card-img-top"  />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
      </div>
        </div>
    )
}

export default PhotoCard;