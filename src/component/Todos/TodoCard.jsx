import React from 'react';


const TodoCard = (props) => {

    const { id,title } = props.post;
    return (
        <div className="card mx-md-3 d-inline-block " style={{marginTop:"2vh", width:"30%", height:"30vh", marginLeft:"2vh", backgroundColor: "#0000FF", color:"white"}}>
            <div className="card-body">
                <h5 className="card-title">{id}</h5>
                <p className="card-text">{title}</p>
            </div>
        </div>
    )
}

export default TodoCard;