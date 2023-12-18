import React from 'react'
import '../App.css'

const Post = ({title,comments,content}) => {
  return (
    <div>
     <div className='bg-purple-200'>
        <p>{title}</p>
        <p>{content}</p>
        </div>
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