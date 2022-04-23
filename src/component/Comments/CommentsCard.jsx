import React from 'react';


const CommentsCard = (props) => {

    const { email, body } = props.post;
    return (
        <div className="card mx-md-3 d-inline-block " style={{marginTop:"2vh", width:"30%", height:"30vh", marginLeft:"2vh", backgroundColor: "#0000FF", color:"white"}}>
            <div className="card-body">
                <h5 className="card-title">{email}</h5>
                <p className="card-text">{body}</p>
            </div>
        </div>
    )
}

export default CommentsCard;