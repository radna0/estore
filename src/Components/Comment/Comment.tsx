import React from 'react'
import "./Comment.css"
import IMG from "../IMG/IMG"

interface ICommentProps{
    id: number
    image: string;
    name: string;
    job: string;
    comment: string
}
const Comment:React.FC<ICommentProps> =( props ) =>{
  return (
    <>
    <div className="comment_container">
        <div className="comment_container_display">
            <IMG image={props.image}  />
        </div>
        <div className="comment_container_title"> 
            <h1>{props.name}</h1>
            <h3>{props.job}</h3>
            <p>{props.comment}</p>
        </div>
    </div>
    </>
  )
}

export default Comment