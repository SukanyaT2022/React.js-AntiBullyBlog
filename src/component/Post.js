import React from 'react'

const Post = ({title,comments,content}) => {
  return (
    <div>
        <h2>{title}</h2>
        <h2>{title}</h2>
        <ul>
{comments.map((comment,index)=>{
    return(
        <li key={index}>{comment}</li>
    )
})}
        </ul>
    </div>
  )
}

export default Post