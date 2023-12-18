import React, { useState } from 'react'

const CommentForm = ({onCommentSubmit}) => {
const [comment,setComment] = useState('')


const handleSubmit =(e)=>{
e.preventDefault();
onCommentSubmit(comment);
setComment('')
}
const handleCommentChange =(e)=>{
    setComment(e.target.value)
}


  return (
    <div>
<form onSubmit={handleSubmit}>
    <label>
        Comment:
        <input type='text' value={comment} onChange={handleCommentChange}/>
    </label>
<button type='submit' className='bg-pink-200'>Add Comment</button>
</form>
    </div>
  )
}

export default CommentForm